'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'BookNest',
    subtitle: 'A social app for book lovers',
    description:
      'A cozy social app for book lovers to connect, share reviews, and discover new reads together.',
    image: '/BookNest.jpg', 
    tags: ['Figma', 'UI Design', 'Mobile App','Individual'],
    link: '/portfolio/book-nest',
  },

  {
    title: "Dinuka's Portfolio",
    subtitle: 'A clean and modern  personal portfolio, created in Figma.',
    description:
      'A minimal Figma UI for a clear, responsive personal portfolio.',
    image: '/dinu.jpg', 
    tags: ['Ongoing','Figma', 'UI Design', 'Website'],
    link: '/portfolio/dinuka-portfolio',
  },

  {
    title: 'Eco Shopper',
    subtitle: 'Sustainable Shopping Made Simple',
    description:
      'An app that promotes eco-friendly shopping with green product suggestions and carbon footprint tracking.',
    image: '/Echo.jpg', 
    tags: ['Figma', 'UI Design', 'Mobile App','Individual'],
    link: '/portfolio/eco-shopper',
  },

  {
    title: 'Waste Wizard',
    subtitle: 'Boosting Recycling in Colombo',
    description:
      'A recycling app for Colombo where users earn rewards by recycling through the Municipal Council.',
    image: '/wast.jpg', // Place this image in public folder
    tags: ['Figma', 'UI Design', 'Mobile App','Group','BPM Module'],
    link: '/portfolio/waste-wizard',
  },

  {
    title: 'UtiliTrack',
    subtitle: 'One app to manage all your utility payments — fast, simple, and stress-free.',
    description:
      'A mobile app that combines electricity and water bill payments into one streamlined platform, saving users time and effort.',
    image: '/utility.jpg', // Place this image in public folder
    tags: ['Figma', 'UI Design', 'Mobile App','Group','ICT4D Module'],
    link: '/portfolio/utili-track',
  },

  {
    title: 'KoKos',
    subtitle: 'Showcasing Coconut-Based Cosmetics',
    description:
      'A modern and intuitive website designed to highlight unique coconut cosmetic products, attracting and engaging the target audience.',
    image: '/kokos.jpg', 
    tags: ['Figma', 'UI Design', 'Mobile App','Group','HCI Module'],
    link: '/portfolio/kokos',
  },


];

export default function PortfolioPage() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY || window.scrollY < 50);
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 🔻 Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-[#2C6E49] h-20 shadow-md px-6 py-4 flex justify-between items-center transition-opacity duration-500 ${
          showNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-4xl font-bold text-white font-[Lato]">SASINI TENNAKOON</div>
        <div className="space-x-8 text-lg font-medium text-white font-[Lato]">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/#about" className="hover:text-white">About</a>
          <a href="/portfolio" className="hover:text-white">My Portfolio</a>
          <a href="/#skills" className="hover:text-white">Profile & Skills</a>
          <a
            href="https://wa.me/94771234567"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* 🔻 Main Content */}
      <main className="min-h-screen bg-gray-50 pt-24 px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-12 mt-6">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-2 font-[Lato]">
            MY PORTFOLIO
          </h1>
          <p className="text-xl text-black">A selection of my recent UI/UX design works</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="flex bg-[#2C6E49] rounded-lg shadow-md overflow-hidden hover:shadow-xl transition min-h-[280px]"
            >
              <div className="w-1/2 p-4 overflow-hidden rounded-md" style={{ width: '250px' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              <div className="w-1/2 pt-12 pr-2 pb-4 pl-4">
                <h2 className="text-4xl font-semibold text-white mb-1 font-[Lato]">
                  {project.title}
                </h2>
                <p className="text-md text-white italic">{project.subtitle}</p>
                <p className="text-sm text-white mt-2">{project.description}</p>

                <div className="flex flex-nowrap gap-2 mt-8">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-[#2C6E49] text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap shadow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* 🔻 Footer OUTSIDE of main */}
      <footer className="bg-[#2C6E49] text-white py-8 w-full mt-20">
        <div className="text-center">
          <p className="text-mm">
            &copy; {new Date().getFullYear()} Sasini Tennakoon. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
