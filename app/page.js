'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AutoScrollingCards from './components/AutoScrollingCards.jsx';

export default function Home() {
  const [showHome, setShowHome] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const homeRef = useRef(null);

  const scrollToHome = () => {
    setShowHome(true);
    setShowNavbar(true);
    setTimeout(() => {
      document.getElementById("intro")?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0 && !showHome) {
        scrollToHome();
      }
    };
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [showHome]);

  useEffect(() => {
    const handleWindowScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.8;
      setShowNavbar(scrollY >= threshold);
    };
    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 🔹 Landing Page */}
      <main id="home" className="relative min-h-screen w-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/landing bg.jpg')" }}></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4 text-center">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold text-black mb-2 drop-shadow-md">SASINI TENNAKOON</h1>
            <br />
            <h2 className="text-2lg sm:text-4xl font-semibold text-black mb-4 drop-shadow-md">UI/UX Designer</h2>
            <br /><br />
            <p className="text-2lg sm:text-2xl text-black mb-6 max-w-5xl mx-auto drop-shadow-md leading-relaxed">
              I am a UI/UX Designer and Front-End Developer creating modern <br />
              and responsive designs for web and mobile. Let us work together.<br />
              Thank you!
            </p>
            <button
              onClick={scrollToHome}
              className="bg-green-700 hover:bg-green-800 text-white font-semibold text-2lg sm:text-2xl py-4 px-20 rounded transition duration-200"
            >
              Let&apos;s Begin
            </button>
          </div>
        </div>
      </main>

      {/* 🔻 Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 bg-[#2C6E49] shadow-md px-6 py-4 transition-opacity duration-500 ${showNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-between items-center">
          <div className="text-2xl sm:text-4xl font-bold text-white">SASINI TENNAKOON</div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white text-2xl">☰</button>
          </div>
          <div className="hidden md:flex space-x-8 text-lg font-medium text-white font-[lato]">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <Link href="/portfolio" className="hover:text-white">My Portfolio</Link>
            <a href="#skills" className="hover:text-white">Profile & Skills</a>
            <a href="https://wa.me/94776552988" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact</a>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="mt-4 flex flex-col md:hidden space-y-3 text-white text-base font-[lato]">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <Link href="/portfolio" className="hover:text-white">My Portfolio</Link>
            <a href="#skills" className="hover:text-white">Profile & Skills</a>
            <a href="https://wa.me/94776552988" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact</a>
          </div>
        )}
      </nav>

      {/* 🔻 Home Section */}
      {showHome && (
        <section ref={homeRef} id="intro" className="bg-white min-h-screen pt-8 transition-opacity duration-1000 ease-in-out">

          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/2 w-full">
                <Image src="/profile2.jpeg" alt="Sasini Tennakoon" width={600} height={100} className="rounded-lg object-cover w-full h-auto" style={{ objectPosition: 'left center' }} />
              </div>
              <div id="about" className="lg:w-1/2 w-full space-y-6 p-6 text-black">
                <h1 className="text-3xl md:text-5xl font-bold">Hi,<br /><span className="text-green-700">I am a UI/UX Designer</span></h1>
                <p className="text-lg leading-relaxed">
                  Passionate and detail-oriented UI/UX engineer with a focus on designing user-friendly and engaging digital experiences. Currently pursuing a BSc in Information Systems, I am eager to apply my creativity and problem-solving skills to enhance user interaction and satisfaction through thoughtful design solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 🔻 Portfolio Section */}
      <section id="portfolio" className="py-12 bg-gray-50 overflow-hidden">

        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-6xl font-bold text-center text-black mb-16 font-[lato]">MY PORTFOLIO</h1>
          <AutoScrollingCards />
        </div>
      </section>

      {/* 🔻 Profile & Skills Section */}
      <section id="skills" className="py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-black">
          <h1 className="text-3xl md:text-6xl font-bold text-center mb-16 font-[Lato]">Profile & Skills</h1>
          <div className="flex flex-col md:flex-row gap-x-16 gap-y-12 mb-16">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-bold mb-6 border-b-2 border-green-600 pb-2 font-[Roboto]">Bio Details</h3>
              <div className="space-y-4">
                <div className="flex"><span className="w-32 font-medium">Name</span><span className="mx-2">:</span><span>Sasini Tennakoon</span></div>
                <div className="flex"><span className="w-32 font-medium">Address</span><span className="mx-2">:</span><span>Colombo, Sri Lanka</span></div>
                <div className="flex"><span className="w-32 font-medium">Phone no</span><span className="mx-2">:</span><span>0776552988</span></div>
                <div className="flex"><span className="w-32 font-medium">Email</span><span className="mx-2">:</span><span>tennakoonsasi5@gmail.com</span></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-4xl font-bold mb-6 border-b-2 border-green-600 pb-2 font-[Roboto]">Working Experiences</h3>
              <div className="flex items-start gap-4">
                <div className="w-28">
                  <Image src="/work.png" alt="Work" width={112} height={112} className="object-contain" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Business Analyst - Intern</h4>
                  <p className="mb-1">VizuaMatix (Pvt) Ltd</p>
                  <p className="text-sm">19 December 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>

          {/* 🔻 Skills Grid */}
          <h3 className="text-4xl font-bold mb-6 border-b-2 border-green-600 pb-2 font-[Roboto]">My Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { name: 'HTML', icon: '/html-icon.png' },
              { name: 'CSS', icon: '/css-icon.png' },
              { name: 'JavaScript', icon: '/js-icon.png' },
              { name: 'Figma', icon: '/figma-icon.png' },
              { name: 'Tailwind CSS', icon: '/tailwind-icon.png' },
              { name: 'Illustrator', icon: '/Illustrator.png' },
              { name: 'Animate', icon: '/Animate.png' },
              { name: 'Xd', icon: '/Xd.png' },
              { name: 'Photoshop', icon: '/Photoshop.png' },
              { name: 'Premiere Pro', icon: '/Premiere Pro.png' },
              { name: 'Next.js', icon: '/Next.js_Logo_1.png' },
              { name: 'Type Script', icon: '/types.png' },
              { name: 'React', icon: '/re.png' },
            ].map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div className="w-24 h-24 mb-2">
                  <Image src={skill.icon} alt={skill.name} width={96} height={96} className="object-contain w-full h-full" />
                </div>
                <span className="text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔻 Footer */}
      <footer className="bg-[#2C6E49] text-white py-8 mt-auto">
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Sasini Tennakoon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
