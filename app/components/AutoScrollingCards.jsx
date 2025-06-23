'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { id: 1, title: "BookNest", image: "/BookNest.jpg", link: "/portfolio/book-nest" },
  { id: 2, title: "Eco Shopper", image: "/Echo.jpg", link: "/portfolio/eco-shopper" },
  { id: 3, title: "Waste Wizard", image: "/wast.jpg", link: "/portfolio/waste-wizard" },
  { id: 4, title: "Utilitrack", image: "/utility.jpg", link: "/portfolio/utili-track" },
  { id: 5, title: "KoKos", image: "/kokos.jpg", link: "/portfolio/kokos" },
  { id: 6, title: "Dinuka Gunawardana Portfolio", image: "/dinu.jpg", link: "/portfolio/dinuka-portfolio" },
];


const AutoScrollingCards = () => {
  const containerRef = useRef(null);
  const scrollAmountRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (isPaused) {
        animationIdRef.current = requestAnimationFrame(scroll);
        return;
      }

      scrollAmountRef.current += 0.5;
      const container = containerRef.current;
      if (container && scrollAmountRef.current >= container.scrollWidth / 2) {
        scrollAmountRef.current = 0;
      }
      if (container) container.scrollLeft = scrollAmountRef.current;

      animationIdRef.current = requestAnimationFrame(scroll);
    };

    animationIdRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationIdRef.current);
  }, [isPaused]);

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex space-x-8">
        {[...projects, ...projects].map((project, index) => (
          <ProjectCard key={`${project.id}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (!project.link) {
    // If no link, render the card without <Link> wrapper
    return (
      <div
        className="flex-shrink-0 w-80 h-96 rounded-xl shadow-lg overflow-hidden relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-3xl font-bold text-white text-center p-4 drop-shadow-md">{project.title}</h3>
        </div>
      </div>
    );
  }

  return (
    <Link href={project.link} passHref>
      <div
        className="flex-shrink-0 w-80 h-96 rounded-xl shadow-lg overflow-hidden relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className="text-3xl font-bold text-white text-center p-4 drop-shadow-md">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default AutoScrollingCards;
