'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Bellota_Text, Cormorant_Garamond, DM_Sans, Estonia, Geologica, Inknut_Antiqua, Inter, Inder, Libre_Baskerville, Merriweather, Playfair_Display, Poppins, Roboto } from 'next/font/google';
import { useEffect, useState } from 'react';
import Link from 'next/link';


const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const geologica = Geologica({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const estonia = Estonia({
  subsets: ['latin'],
  weight: ['400', '400'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const cormorant_garamond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inder = Inder({
  subsets: ['latin'],
  weight: ['400'],
});

const inknut_Antiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const bellota_text= Bellota_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
});

// Storytelling Card Component with manual image option
const StoryCard = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // MANUAL IMAGE OPTION - Add your custom images here
  const manualImages = {
    'book-nest': [
      '/images/BookLanding.png',
      '/images/Book shelf.png',
      '/images/Community.png',
      '/images/User Profile.png',
      '/images/Group  chat.png'
    ],
    'dinuka-portfolio': [
      '/images/dinuka/4.png',
      '/images/dinuka/3.png',
      '/images/dinuka/1.png',
      '/images/dinuka/2.png',
      '/images/dinuka/5.png',
      '/images/dinuka/6.png'
    ],
    'eco-shopper': [
      '/images/eco/Home Page.png',
      '/images/eco/Product Page.png',
      '/images/eco/order page.png',
      '/images/eco/Category Page (1).png',
      '/images/eco/Cart Page (1).png'
    ],
    'waste-wizard': [
      '/images/waste/Dashboard.png',
      '/images/waste/Profile.png',
      '/images/waste/Recycling Partner details.png',
      '/images/waste/Redeemable Points.png',
      '/images/waste/Profile (1).png'
    ],
    'utili-track': [
      '/images/utili/Home page (1).png',
      '/images/utili/popup screen.png',
      '/images/utili/Water Consumption.png',
      '/images/utili/bill.png',
      '/images/utili/elpopup screen.png',
      '/images/utili/Power Consumption.png',
      '/images/utili/Bill Calculation.png'
    ],
    'kokos': [
      '/images/koko/1.png',
      '/images/koko/2.png',
      '/images/koko/3.png',
      '/images/koko/4.png',
      '/images/koko/5.png',
      '/images/koko/6.png'
    ]
  };

  // Choose which images to use (manual if available, otherwise from project data)
  const images = manualImages[project.id] || 
                 (project.uiMobileImages?.length > 0 ? project.uiMobileImages : project.uiDesktopImages);
  
  const isMobile = !manualImages[project.id] && project.uiMobileImages?.length > 0;
  
  const descriptions = {
    'book-nest': [
      "Home Screen: A personalized dashboard showing a welcome message, your current reading progress, recommended books, community highlights, and upcoming events.",
      "Book Shelf Screen: Organizes your book collection into categories like All Books, Currently Reading, Want to Read, Finished Reading, and Favourites for easy tracking.",
      "Community Screen: Minimal form fields to reduce friction in the onboarding process.",
      "Group Chat Screen:isplays your personal details, reading stats, preferences, and settings. A place to manage your account and customize your reading experience.Join real-time conversations with your book clubs or reading groups. Share thoughts, ask questions, and discuss books directly with fellow members."
    ],
    'dinuka-portfolio': [
      "Welcome Screen: A stylish introduction to Dinuka’s creative world, showcasing his brand and giving visitors a quick overview of his work and specialties.",
      "Clents and Blog Section: Professional bio with skills and experience highlights.Highlights trusted clients Dinuka has worked with and features blog posts where he shares insights, behind-the-scenes content, and industry tips.",
      "Photography Screen : A curated gallery of Dinuka’s photography projects, displaying his expertise in capturing compelling visual stories through the lens.",
      "Videography Screen: Showcases Dinuka’s video productions, from cinematic edits to client-focused projects, reflecting his storytelling and technical skills.",
      "Graphic Design Screen: Displays a variety of graphic design works including branding, illustrations, and promotional content, highlighting Dinuka’s creative versatility.",
      "Blog Screen: A dedicated space for detailed blog posts, creative process write-ups, and personal reflections that connect Dinuka with his audience.",
    ],
    'eco-shopper': [
      "Personalized Eco-Dashboard: Features a clean greeting header with user location, CO₂ savings tracker, and categorized product recommendations. Organized sections include Recommended for you and Top Picks with price-displayed eco-products, plus quick-access category filters at bottom.",
      "Product Page:Highlights environmental impact (500g CO₂ savings) with detailed product specs for a wool sweater. Includes ethical sourcing badges, size/color options, and prominent CTAs. Cleanly separates shipping info and material certifications for quick scanning.",
      "Cart Page (Version 1): Tab-based interface for order status tracking (To Pay, To Ship etc.). Displays pending items with quantity, price, and action buttons (Cancel/Payment). Minimalist design focuses on transactional clarity.",
      "Category Page: Two-panel layout with hierarchical categories (e.g., Getting > Winter Ticket) and sortable product grid. Features price-conscious filtering (Best Match/Discount) and prominent sustainability badges on each product card.",
      "Cart Page (Version 2): Simplified cart view with editable delivery address, product customization options (color selection), and strikethrough pricing showing discounts. Progressively reveals costs (Subtotal → Shipping → Total) for transparency."
    ],
    'waste-wizard': [
      "Dashbaord Screen: Date-specific interface (Feb 28, 2024) with time tracking and logistics fields (AWB, Track No). Designed for quick member identification and website type selection, ending with a prominent Track action button.",
      "Organization Profile Screen: Clear value proposition for recycling participation.",
      "Recycle Partner Details Screen: Overview of stakeholders in the recycling ecosystem.",
      "Points Management Screen: A clean tabular display showing the redeemable points",
      "Customer Profile Screen: Profile of the Customer.",
      
    ],
    'utili-track': [
      "Home Page: Displays the available utilities. Users can choose either the Ceylon Electricity Board or the National Water Supply and Drainage Board.",
      "Popup Screen:Welcome screen for the National Water Supply and Drainage Board.",
      //"Water board home page: Home page of the National Water Supply and Drainage Board",
      "Water Consumption Screen:Users can check their water consumption for the current month.",
      "Water Bill Screen:Displays the bill for the current month.",
      "Popup Screen:Welcome screen for the Ceylon Electricity Board.",
      //"Electricity board home page:Home page for Ceylon Electricity Board",
      "Power Consumption Screen:Users can check their power consumption for the current month.",
      "Electicity Bill Screen:Users can see how the bill was calculated and what factors were included in determining the final amount.",

    ],
    'kokos': [
      "Homepage: Hero section showcasing coconut-based products.",
      "Tagline : Brand reinforcement",
      "Product Catalog : Educated product discovery",
      "Testimonials : Social proof establishment",
      "About Us: About Us",
      "Newsletter Signup: Community engagement",
    ]
  };

  // Auto-advance cards
  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

      return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border-2 border-black"> {/* Black outline added */}
      <div className="flex flex-col md:flex-row">
        {/* Image Section with your background color */}
        <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-[#2C6E49]"> {/* Your chosen background color */}
          <div className={`relative ${isMobile ? 'w-[200px] h-[430px]' : 'w-full h-[300px] md:h-[400px]'}`}>
            <Image
              src={images[activeIndex]}
              alt={`${project.title} UI screen ${activeIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
        {/* Description Side */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            {project.title} UI Flow
          </h3>
          <p className="text-gray-600 mb-6">
            {descriptions[project.id]?.[activeIndex] || "Description of this screen goes here."}
          </p>
          
          {/* Navigation Dots */}
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-green-600' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="mt-6 text-sm text-black">
            {activeIndex + 1} of {images.length} screens
          </div>
        </div>
      </div>
    </div>
  );
};

const projectDetails = [

  {
    id: 'book-nest',
    title: 'BookNest',
    subtitle: 'A social app for book lovers',
    description: {
      overview: "BookNest is a mobile application designed for book lovers to connect, share, and discover new reads in a vibrant, social environment. Inspired by the idea of bringing together a community of readers, BookNest blends social networking features with personalized book management tools. Users can build virtual bookshelves, track their reading progress, post reviews, and interact with fellow readers through groups and chats. The app is crafted with a clean and cozy UI, ensuring a seamless experience for users across all ages. Whether you're a casual reader or a passionate bibliophile, BookNest offers a dedicated space to celebrate your love for books and connect with like-minded individuals.",
      problem: "In today&apos;s digital world, while there are plenty of platforms for general social interaction, there&apos;s a lack of dedicated, engaging spaces for book lovers to connect and share their reading experiences. Existing apps either focus solely on cataloging books or provide overly complex features that can overwhelm users. Additionally, bookworms often face difficulties tracking and organizing their reading habits across different platforms. They experience limited interaction with like-minded readers, especially around specific genres or interests. There is also a lack of personalized discovery features for new books based on community recommendations and a disconnected experience between managing personal book collections and participating in reading communities. BookNest was designed to address these pain points by combining simplicity, community, and personalization in one cohesive platform.",
      research: "To better understand the needs of book readers and identify opportunities for improvement, I explored several popular book-related apps. The goal was to analyze their strengths, weaknesses, and the overall user experience they offered. I observed that many apps had overly complex or cluttered interfaces, making it hard for casual users to engage regularly. Many lacked a strong community or interactive features, so users couldn't easily connect, comment, or chat with others about books. Personalized recommendations were often limited or not visually engaging, and while tracking reading progress was available, it often lacked motivational features or a friendly UI. Offline features and smooth mobile-first experiences were also underdeveloped. These insights revealed a clear gap for a user-friendly, community-centered app that makes reading more social, visually inviting, and organized. These observations formed the foundation for BookNest—an app focused not just on books, but on the people who read them."
    },
    coverImage: '/images/Cover/B.png',
    wireframes: ['/images/Book1.png', '/images/Book2.png', '/images/Book3.png','/images/Book4.png'],
    uiMobileImages: ['/images/BookWelcome.png','/images/BookLogin.png', '/images/BookSign.png', '/images/BookLanding.png', '/images/BookList.png' , '/images/Community.png', '/images/User Profile.png'],
    uiDesktopImages:[],
    designSystem: {
      typography: [
        {
          name: 'LibreBaskerville',
          className: libreBaskerville.className,
          usage: 'Headings',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Merriweather',
          className: merriweather.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Geologica',
          className: geologica.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        }
      ],
      colors: [
        { color: '#0073E6', name: 'Bright Azure', text: 'text-white' },
        { color: '#002040', name: 'Oxford Blue', text: 'text-white' },
        { color: '#004080', name: 'Dark Cerulean', text: 'text-white', border: 'border border-gray-200' },
        { color: '#0060BF', name: 'Medium Persian Blue', text: 'text-white' },
        { color: '#0080FF', name: 'Azure', text: 'text-white' }
      ],
      primaryColor: '#000000'
    }
  },
    

  {
    id: 'dinuka-portfolio',
    title: 'Dinuka\'s Portfolio',
    subtitle: 'A clean and modern  personal portfolio, created in Figma.',
    description: {
      overview: "Dinuka&apos;s Portfolio is a clean, modern, and responsive web-based portfolio designed for Dinuka Gunawardane, a creative professional specializing in photography, videography, and graphic design. The goal was to create a platform that reflects Dinuka&apos;s unique style and showcases his best work to potential clients and collaborators. The website features categorized galleries, a blog section for updates, and a contact form to streamline inquiries. Built with Next.js and Tailwind CSS, the portfolio ensures fast loading, mobile responsiveness, and a user-friendly experience.",
      problem: "Freelancers and creative professionals like Dinuka often rely on social media or outdated portfolio websites, which lack structure, personalization, or professionalism. Common issues include an inconsistent or unprofessional online presence, difficult navigation, and poor mobile compatibility. Additionally, such sites often fail to effectively showcase work across different creative domains or provide integrated client communication and inquiry features. Dinuka needed a centralized digital space that would not only represent his creative identity but also provide a smooth and engaging experience for visitors.",
      research: "To craft an effective solution, I analyzed various creative portfolio websites and identified design patterns, content organization, and usability challenges. Input gathered directly from Dinuka helped to understand his needs and preferences. I found that most portfolios favored either minimalism or over-design, so a balance between clean design and creativity was essential. Many portfolios lacked mobile responsiveness, making them hard to view on phones or tablets. Users expected clearly separated sections for each creative service, such as photography and videography. A smooth project showcase with thumbnails, preview images, and short descriptions was a highly effective way to engage visitors. Including a client testimonial or blog section builds trust and establishes credibility. These insights guided the design and structure of Dinuka&apos;s new portfolio, ensuring it meets both functional needs and visual appeal."
    },
    coverImage: '/images/Cover/D.png',
    wireframes: ['/images/dinuka/w1.png', '/images/dinuka/w2.png', '/images/dinuka/w3.png','/images/dinuka/w4.png'],
    uiMobileImages:[],
    uiDesktopImages: ['/images/dinuka/1.png','/images/dinuka/2.png','/images/dinuka/3.png','/images/dinuka/4.png','/images/dinuka/5.png','/images/dinuka/6.png','/images/dinuka/7.png',],
    designSystem: {
      typography: [
        {
          name: 'Playfair Display',
          className: playfair_display.className,
          usage: 'Headings',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Cormorant Garamond',
          className: cormorant_garamond.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'DM Sans',
          className: dm_sans.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        }
      ],
      colors: [
        { color: '#0D1321', name: 'Rich Charcoal Blue', text: 'text-white' },
        { color: '#1D2D44', name: 'Dark Midnight Blue', text: 'text-white' },
        { color: '#3E5C76', name: 'Slate Blue', text: 'text-white', border: ' border-gray-200' },
        { color: '#748CAB', name: 'Dusty Periwinkle', text: 'text-white' },
        { color: '#FFFBEE', name: 'Ivory Cream', text: 'text-black', }
      ],
      primaryColor: '#000000'
    }
  },
  

  {
    id: 'eco-shopper',
    title: 'Eco Shopper',
    subtitle: 'Sustainable Shopping Made Simple',
    description: {
      overview: "Eco Shopper is a mobile app created to make sustainable shopping easy, engaging, and rewarding. It connects eco-conscious consumers with environmentally friendly products across various categories including clothing, electronics, groceries, and household items. The app equips users with tools to discover and filter eco-certified products, track their environmental impact, earn rewards through a loyalty program, and receive personalized recommendations. By combining sustainability insights with a smooth user experience, Eco Shopper empowers users to make informed and responsible shopping decisions that benefit both them and the planet.",
      problem: "In today&apos;s consumer-driven world, finding genuinely sustainable products is often difficult, time-consuming, and confusing. Shoppers who want to make eco-conscious decisions face several challenges such as a lack of transparent product information regarding environmental impact, limited access to verified eco-friendly options in one platform, difficulty tracking the impact of their purchases, and no engaging system to encourage or reward sustainable shopping behavior. There was a clear need for a solution that makes sustainable choices easier, more visible, and more rewarding without overwhelming the user.",
      research: "To design Eco Shopper effectively, I conducted competitive analysis of existing eco-shopping platforms and sustainability-focused e-commerce apps. This included a review of their features, design flows, and user feedback. Many apps lacked detailed product sustainability data, leaving users uncertain about how “green” their purchases really were. Very few platforms provided a way to track environmental contributions such as CO2 savings. Reward systems were either non-existent or not tied to sustainability actions. Users desired mobile-friendly, visually clean interfaces that made browsing eco-friendly items enjoyable and simple. Filters and customization were either too broad or missing, and users wanted tailored search options based on personal values such as vegan, plastic-free, or fair trade. These insights helped shape Eco Shopper&apos;s core features and guided design decisions to ensure the app is user-focused, informative, and impactful."
    },
    coverImage: '/images/Cover/E.png',
    wireframes: ['/images/eco/1.png', '/images/eco/2 (2).png', '/images/eco/3.png','/images/eco/4 (2).png','/images/eco/5.png','/images/eco/6.png','/images/eco/7.png','/images/eco/8.png'],
    uiMobileImages: ['/images/eco/Welcome Screen.png','/images/eco/Login.png','/images/eco/Signup.png','/images/eco/Home Page.png','/images/eco/Product Page.png','/images/eco/order page.png','/images/eco/Category Page (1).png'],
    uiDesktopImages: [],
    designSystem: {
      typography: [
        {
          name: 'Roboto',
          className: roboto.className,
          usage: 'Headings',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Inter',
          className: inter.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        }
      ],
      colors: [
        { color: '#1FD655', name: 'Bright Spring Green', text: 'text-black' },
        { color: '#000000', name: 'Black', text: 'text-white' },
        { color: '#B2FFAF', name: 'Pale Mint', text: 'text-black', border: 'border border-gray-200' },
        { color: '#28D20D', name: 'Vibrant Leaf Green', text: 'text-black' },
        
      ],
      primaryColor: '#000000'
    }
  },
  

  {
    id: 'waste-wizard',
    title: 'Waste Wizard',
    subtitle: 'Boosting Recycling in Colombo',
    description: {
     overview: `WasteWizard is an innovative centralized waste management platform designed to address the growing challenges of urban waste collection, segregation, and public awareness. Accessible via both mobile application and website, WasteWizard integrates GPS-enabled garbage truck tracking, real-time collection schedules, drop-off location maps, and an EcoPoints reward system to promote active citizen participation in proper waste disposal practices. The platform is designed for three key user groups: residents who want to stay informed and engaged with waste collection schedules and segregation practices; municipal council employees who require efficient tracking, route planning, and reporting; and area managers responsible for oversight, analytics, and service optimization. By combining IoT, GPS tracking, and smart notifications, WasteWizard enables cities to implement sustainable waste management practices, improve public hygiene, and promote environmental responsibility.`,
      problem: `In modern cities, waste management has become a critical societal and environmental challenge due to increased population density, urbanization, and lack of smart infrastructure. Current systems suffer from uncontrolled and inefficient waste disposal, leading to environmental and health hazards. There is a lack of transparency in garbage collection schedules, causing frustration and missed pickups, and an absence of real-time communication between citizens and municipal services. Additionally, there is insufficient public awareness of proper waste segregation and recycling practices and high operational costs due to fuel inefficiencies, outdated tracking, and manual oversight. These issues contribute to pollution, poor aesthetics, public health risks, and low accountability in urban areas.`,

      research: `To design an effective solution, the WasteWizard team conducted in-depth research on current municipal waste practices, user needs, environmental impact reports, and successful smart city implementations. They found citizen frustration with inconsistent collection times and lack of digital communication between municipal services and citizens. Environmental and health hazards stem from inefficient routes causing increased emissions and skipped collections that contribute to odors and disease. Lack of real-time data limits municipal councils to reactive operations rather than proactive ones. Public interest in eco-friendly practices is growing, with residents open to reward-based systems encouraging recycling and proper waste disposal. Global cities are adopting smart waste solutions including sensor-enabled bins, GPS tracking, dynamic routing, and community engagement programs. WasteWizard was built as a tech-driven platform offering real-time garbage truck tracking and optimized route planning, dynamic collection schedules visible to the public, EcoPoints rewards to promote positive waste behavior, interactive drop-off point maps for recyclables, educational content on segregation and sustainable practices, and data analytics tools for municipalities to optimize operations and reduce costs.`
    },
    coverImage: '/images/Cover/W.png',
    wireframes: ['/images/waste/1.png', '/images/waste/2 (2).png', '/images/waste/3.png','/images/waste/4 (2).png','/images/waste/5.png','/images/waste/6.png'],
    uiMobileImages: ['/images/waste/Landing Page (1) - Copy.jpg','/images/waste/Actors (1) - Copy.jpg', '/images/waste/Log In.png', '/images/waste/Sign Up.png', '/images/waste/Dashboard.png', '/images/waste/Profile.png', '/images/waste/Profile (1).png','/images/waste/Recycling Partner details.png','/images/waste/Redeemable Points.png'],
    uiDesktopImages: [],
    designSystem: {
      typography: [
        {
          name: 'Inter',
          className: inter.className,
          usage: 'Headings',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Inder',
          className: inder.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph:'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'JejuGothic',
          className: inter.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph:'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Inknut Antiqua',
          className: inknut_Antiqua.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        }
      ],
      colors: [
        { color: '#1FD655', name: 'Malachite', text: 'text-black' },
        { color: '#FFFFFF', name: 'White', text: 'text-black' , border: 'border border-gray-200' },
        { color: '#00661E', name: 'Forest Green', text: 'text-black' },
        
      ],
      primaryColor: '#000000'
    }
  },
  

  {
    id: 'utili-track',
    title: 'Utili Track',
    subtitle: 'One app to manage all your utility payments — fast, simple, and stress-free.',
    description: {
      overview: 'UtiliTrack is a smart utility management system designed to modernize how households and businesses monitor, manage, and pay for electricity and water usage. Combining the power of ICT and IoT technologies, UtiliTrack integrates smart meters with a user-friendly mobile application to deliver a seamless and intelligent utility experience. With features like real-time consumption tracking, online bill payments, outage notifications, and detailed usage history, UtiliTrack empowers users to take control of their utility consumption while promoting sustainability and operational efficiency.',
      problem:'Traditional utility systems often suffer from inefficiencies and user frustrations. Key pain points include uncontrolled usage of electricity and water due to a lack of real-time monitoring, inconvenient and outdated bill payment methods requiring physical presence or manual processes, inaccurate billing resulting from manual meter readings and delayed data entry, and lack of timely notifications about service outages causing confusion and inconvenience. These issues lead to wasted resources, increased costs, and poor user satisfaction.',

      research: 'To design a solution tailored to user needs, market research, stakeholder interviews, and reviews of current smart utility systems locally and internationally were conducted. It was found that users desire real-time visibility into their electricity and water consumption to adjust usage proactively. There is a growing demand for convenient online payment options to save time and eliminate queues. Smart meters are being adopted globally to improve billing accuracy and reduce human error. Mobile apps are preferred platforms for 24/7 access, offering flexibility regardless of location. Outage notifications are valued features that enhance transparency and user trust in utility providers. UtiliTrack implemented IoT-based smart meters to automate accurate data collection, developed a mobile-first platform for access to bill history, consumption data, and outage alerts, integrated secure online payment gateways to streamline billing and reduce friction, and focused on data-driven awareness to support conservation habits among users.'
    },
    coverImage: '/images/Cover/U.png',
    wireframes: ['/images/utili/w1.png', '/images/utili/w2.png', '/images/utili/w3.png','/images/utili/w4.png','/images/utili/w5.png','/images/utili/w6.png','/images/utili/FigJam basics.png'],
    uiMobileImages: ['/images/utili/Home page (1).png','/images/utili/Bill Calculation.png', '/images/utili/elpopup screen.png', '/images/utili/Signup.jpg', '/images/utili/popup screen.png', '/images/utili/Water.png', '/images/utili/bill.png'],
    uiDesktopImages: [],
    designSystem: {
      typography: [
        {
          name: 'Droid Sans',
          className: inter.className,
          usage: 'Headings',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Bellota Text',
          className: bellota_text.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        }
      ],
      colors: [
        { color: '#013567', name: 'Prussian Blue', text: 'text-white' },
        { color: '#FFFFFF', name: 'White', text: 'text-black' , border: 'border border-gray-200' },
        { color: '#1B6BB8', name: 'Steel Blue', text: 'text-white' },
        { color: '#07223C', name: 'Charcoal Navy', text: 'text-white' },
        
      ],
      primaryColor: '#000000'
    }
    

    //previewType: 'mobile',
  },

  {
    id: 'kokos',
    title: 'KOKOS',
    subtitle: 'Cosmetic products made from coconuts',
    description: {
      overview: 'KoKoS is a holistic brand built around the natural goodness of the coconut tree, introducing a premium line of coconut-based products designed for today\'s fast-paced, health-conscious lifestyle. The product line includes desiccated coconut that is carefully grated, naturally sweet, and aromatic, perfect for desserts, smoothies, or cooking. It also offers coconut milk that is creamy, dairy-free, and made from freshly pressed coconuts to enrich curries, soups, and sauces. Coconut oil is cold-pressed, pure, and unrefined, ideal for cooking, baking, and personal care. Additionally, coconut water is refreshing and electrolyte-rich, straight from young green coconuts to energize the body. KoKoS is committed to delivering nature\'s bounty while minimizing environmental impact, reducing production costs, and offering affordable, high-quality products that promote a healthier lifestyle. The brand\'s broader vision is to utilize the entire coconut tree, reduce waste, and support sustainable, guilt-free living.',

      problem:'As lifestyles grow more stressful and fast-paced, people increasingly seek healthy, natural, and convenient food alternatives. Despite a high demand for coconut-based products, consumers often face key issues such as inconsistent product quality and unreliable sourcing, limited transparency in production processes and safety standards, higher price points for healthy, eco-friendly alternatives, fragmented product offerings with no single brand offering a complete coconut-based lifestyle solution, and wastage of by-products in traditional coconut processing. Many local and global coconut product manufacturers focus on individual product segments, failing to capitalize on the coconut tree\'s full potential.',

      research: 'To validate the concept and market potential, KoKoS conducted a comprehensive analysis of consumer behavior, industry trends, and competitor offerings across the coconut-based product landscape in Sri Lanka and beyond. There is a growing consumer demand for natural, healthy, and eco-conscious products. Coconut-based products are widely accepted as nutritious, versatile, and sustainable. The global popularity of coconut oil, water, and milk continues to rise due to wellness trends. Consumers are increasingly aware of the environmental impact of their purchasing choices. Competitors in coconut oil include Ceylon Coconut Company, Fresco, and Quentara. Major players for coconut milk are Renuka, Sera, and Nestlé\'s Maggie. Coconut water brands like Wichy, Coco House, and Ceylon Naturals dominate the market. Desiccated coconut is produced by Renuka, Maggie, and similar companies. Tropicoir Lanka leads with coir fiber, pots, and textiles in coir and fiber products. Most competitors focus on individual product categories, but there is room for a brand offering multiple edible and non-edible coconut products under one roof. Consumers seek affordable and reliable alternatives with a commitment to sustainability and health.'
    },
    coverImage: '/images/Cover/K.png',
    wireframes: ['/images/koko/w1.png', '/images/koko/w2.png'],
    uiMobileImages:[],
    uiDesktopImages: ['/images/koko/3.png','/images/koko/2.png','/images/koko/1.png','/images/koko/4.png','/images/koko/5.png'],
   // previewType: 'desktop',

   designSystem: {
      typography: [
        {
          name: 'Poppins',
          className: poppins.className,
          usage: 'Headings',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Estonia',
          className: estonia.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        },
        {
          name: 'Inter',
          className: inter.className,
          usage: 'Body text',
          sample: 'Aa',
          paragraph: 'Aa, Bb, Cc, Dd, Ee, Ff, Gg ,Hh ,Ii, Jj, Kk ,Ll ,Mm, Nn, Oo, Pp, Qq ,Rr, Ss ,Tt, Uu ,Vv ,Ww ,Xx ,Yy, Zz',
          numbers: '1234567890'
        }
      ],
      colors: [
        { color: '#283F6C', name: 'Indigo Dye', text: 'text-white' },
        { color: '#FFFFFF', name: 'White', text: 'text-black' },
        { color: '#146F75', name: 'Deep Teal', text: 'text-white', border: 'border border-gray-200' },
        { color: '#C4F2CB', name: 'Tea Green', text: 'text-black' },
        
      ],
      primaryColor: '#000000'
    }
  },
  

  
  // Add more projects here as needed
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const [showScrollNav, setShowScrollNav] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrolledDown = window.scrollY > 300;
    setShowScrollNav(scrolledDown);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  // Safely get project ID from params
  const projectId = params?.projectID;
  const project = projectDetails.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-10">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Project Not Found</h1>
          <p className="text-xl mb-6">The project {projectId} doesn't exist in our portfolio.</p>
          <button 
            onClick={() => router.push('/portfolio')}
            className="bg-[#2C6E49] text-white px-6 py-2 rounded-md hover:bg-[#245239] transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const currentIndex = projectDetails.findIndex(p => p.id === projectId);

  const goToProject = (direction) => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < projectDetails.length) {
      router.push(`/portfolio/${projectDetails[newIndex].id}`);
    }
  };

  const primaryColor = project.designSystem?.primaryColor || '#2C6E49';

  return (
    <main className="bg-white min-h-screen pt-28 px-4 md:px-6">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#2C6E49] h-20 shadow-md px-6 py-4 flex justify-between items-center">
          <div className="text-4xl font-bold text-white ">SASINI TENNAKOON</div>
          <div className="space-x-8 text-lg font-medium text-white font-[Lato]">
            {/* Link to sections on landing page */}
            <Link href="/#home" className="hover:text-white">Home</Link>
            <Link href="/#about" className="hover:text-white">About</Link>
            <Link href="/portfolio" className="hover:text-white">My Portfolio</Link>
            <Link href="/#skills" className="hover:text-white">Profile & Skills</Link>
            <a
                href="https://wa.me/94776552988"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                >
                Contact
             </a>
          </div>
      </nav>

      {/* Project Header */}
      <div className="text-center mb-12">
  <h1 className="text-3xl md:text-8xl font-bold text-black font-[Lato] mb-2">
    {project.title}
  </h1>
  <p className="text-lg md:text-xl text-black">{project.subtitle}</p>

  <div className="flex justify-between mt-6 px-4 md:px-0 max-w-6xl mx-auto">
    {/* Previous Button */}
    <button
      onClick={() => goToProject('prev')}
      disabled={currentIndex === 0}
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300
        ${currentIndex === 0 
          ? 'text-black bg-gray-100 cursor-not-allowed' 
          : 'bg-gradient-to-r from-green-700 to-green-500 text-white hover:scale-105 hover:shadow-lg'
        }`}
    >
      ← Previous
    </button>

    {/* Next Button */}
    <button
      onClick={() => goToProject('next')}
      disabled={currentIndex === projectDetails.length - 1}
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300
        ${currentIndex === projectDetails.length - 1 
          ? 'text-gray-400 bg-gray-100 cursor-not-allowed' 
          : 'bg-gradient-to-r from-green-700 to-green-500 text-white hover:scale-105 hover:shadow-lg'
        }`}
    >
      Next →
    </button>
  </div>
</div>


      {/* Cover Image */}
<div className="mb-10 w-full flex justify-center">
  <div className="relative w-[1440px] h-[398px] overflow-hidden rounded-lg shadow-lg">
    <Image 
      src={project.coverImage} 
      alt={`${project.title} cover image`} 
      fill
      className="object-cover"
      priority
      unoptimized
    />
  </div>
</div>



      {/* Project Details */}
      <div className="max-w-6xl mx-auto space-y-20 mb-16 px-4 md:px-6">
        {/* Overview */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
          <div className="w-full md:w-[20%] flex justify-end">
            <div className="flex items-center text-lg md:text-3xl font-semibold text-right h-24">
              Overview
            </div>
          </div>
          <div className="hidden md:block w-[1px] bg-black h-24" />
          <div className="w-full md:w-[80%] text-base md:text-lg text-black text-justify leading-relaxed">
            {project.description.overview}
          </div>
        </div>

        {/* Problem */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-2 md:gap-4">
          <div className="w-full md:w-[20%] flex justify-start md:justify-start">
            <div className="flex items-center text-lg md:text-4xl font-semibold text-left h-24">
              Problem
            </div>
          </div>
          <div className="hidden md:block w-[1px] bg-black h-24" />
          <div className="w-full md:w-[80%] text-base md:text-lg text-black text-justify leading-relaxed">
            {project.description.problem}
          </div>
        </div>

        {/* Research */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4">
          <div className="w-full md:w-[20%] flex justify-end">
            <div className="flex items-center text-lg md:text-4xl font-semibold text-right h-24">
              Research
            </div>
          </div>
          <div className="hidden md:block w-[1px] bg-black h-24" />
          <div className="w-full md:w-[80%] text-base md:text-lg text-black text-justify leading-relaxed">
            {project.description.research}
          </div>
        </div>
      </div>


      {/* Wireframes Section */}
      {project.wireframes?.length > 0 && (
        <div className="max-w-6xl mx-auto mt-16 mb-20">
          <h2 className="text-6xl font-semibold mb-6 text-center text-black font-[lato]">Wireframes</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4">
            {project.wireframes.map((src, i) => {
              const isMobile = project.previewType === 'mobile';
              const heightClass = isMobile ? 'h-[380px]' : 'h-[280px]';

              return (
                <div key={i} className={`relative w-full ${heightClass}`}>
                  <Image 
                    src={src} 
                    alt={`${project.title} wireframe ${i + 1}`} 
                    fill
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

     {/* Components Section */}
      <div className="max-w-6xl mx-auto mt-20 mb-24 px-4 md:px-6">
        <h2 className="text-6xl font-bold text-center text-black font-[lato] mb-12">Design System</h2>

        {/* Typography Cards */}
        {project.designSystem?.typography && (
          <>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: primaryColor }}>Typography</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {project.designSystem.typography.map((font, i) => (
                <div
                  key={i}
                  className={`bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 ${font.className}`}
                >
                  <p className="text-6xl mb-2" style={{ color: primaryColor }}>{font.sample}</p>
                  <h3 className="text-lg font-semibold mb-2">{font.name}</h3>
                  <p className="text-sm text-black mb-1">{font.usage}</p>
                  <p className="text-sm text-black whitespace-pre-line leading-snug">{font.paragraph}</p>
                  <p className="text-sm text-black mt-2">{font.numbers}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Color Palette */}
        {project.designSystem?.colors && (
          <>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: primaryColor }}>Color Palette</h3>
            
            {/* Main color blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
              {project.designSystem.colors.map((col, i) => (
                <div 
                  key={i}
                  className={`relative h-40 rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:scale-105 ${col.border || ''}`}
                  style={{ backgroundColor: col.color }}
                >
                  <div className={`absolute inset-0 flex flex-col items-center justify-end p-4 ${col.text}`}>
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                        {col.name}
                      </p>
                      <p className="font-mono text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {col.color}
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 text-xs font-bold opacity-70 group-hover:opacity-0 transition-opacity">
                      {col.color}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Color dots */}
            <div className="flex justify-center">
              <div className="inline-flex flex-wrap justify-center gap-4 p-4 bg-gray-50 rounded-full shadow-inner">
                {project.designSystem.colors.map((col, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full shadow-md transform hover:scale-125 transition-all duration-300 ${col.border || ''}`}
                    style={{ backgroundColor: col.color }}
                    title={`${col.name}: ${col.color}`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>


      {/* UI Images */}
{(project.uiMobileImages?.length > 0 || project.uiDesktopImages?.length > 0) && (
  <div className="max-w-6xl mx-auto mt-16 mb-20">
    <h2 className="text-6xl font-semibold mb-6 text-center text-black font-[lato]">UI Design</h2>

    {/* Mobile UI Section */}
    {project.uiMobileImages?.length > 0 && (
      <div className="relative h-[500px] md:h-[600px] w-full flex justify-center items-end overflow-visible px-4">
        <div className="relative w-full h-full flex justify-center">
          {project.uiMobileImages.map((src, i) => {
            const totalImages = project.uiMobileImages.length;
            const centerPosition = (totalImages - 1) / 2;
            const distanceFromCenter = i - centerPosition;
            const zIndex = totalImages - Math.abs(distanceFromCenter);
            const bottomOffset = Math.abs(distanceFromCenter) * 20;
            const horizontalOffset = distanceFromCenter * 160;

            return (
              <div
                key={i}
                className="absolute transition-all duration-300 hover:scale-110 hover:z-50"
                style={{
                  left: '50%',
                  transform: `translateX(calc(-50% + ${horizontalOffset}px))`,
                  zIndex,
                  bottom: `${bottomOffset}px`,
                }}
              >
                <div className="relative border-2 border-green-600 rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`${project.title} mobile UI screen ${i + 1}`}
                    width={200}
                    height={430}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}

    {/* Desktop UI Section */}
    {project.uiDesktopImages?.length > 0 && (
      <div className="relative min-h-[350px] w-full flex justify-center items-end overflow-visible px-4">
        <div className="relative w-full h-full flex justify-center">
          {project.uiDesktopImages.map((src, i) => {
            const totalImages = project.uiDesktopImages.length;
            const centerPosition = (totalImages - 1) / 2;
            const distanceFromCenter = i - centerPosition;
            const zIndex = totalImages - Math.abs(distanceFromCenter);
            const bottomOffset = Math.abs(distanceFromCenter) * 15;
            const horizontalOffset = distanceFromCenter * 180;

            return (
              <div
                key={i}
                className="absolute transition-all duration-300 hover:scale-105 hover:z-50"
                style={{
                  left: '50%',
                  transform: `translateX(calc(-50% + ${horizontalOffset}px))`,
                  zIndex,
                  bottom: `${bottomOffset}px`,
                }}
              >
                <div className="relative border-2 border-green-600 rounded-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`${project.title} desktop UI screen ${i + 1}`}
                    width={400}
                    height={230}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </div>
)}





{/* Updated Preview Section */}
      <div className="max-w-6xl mx-auto mt-16 mb-20 px-4">
        <h2 className="text-6xl font-semibold mb-12 text-center text-black font-[lato]">UI Walkthrough</h2>
        <StoryCard project={project} />
      </div>
{/* Footer */}
<footer className="w-full bg-[#2C6E49] text-white py-8 mt-20">
  <div className="text-center">
    <p className="text-mm">
      &copy; {new Date().getFullYear()} Sasini Tennakoon. All rights reserved.
    </p>
  </div>
</footer>

      {showScrollNav && (
  <>
    {/* Floating Previous Button (Left) */}
    <button
      onClick={() => goToProject('prev')}
      disabled={currentIndex === 0}
      className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        currentIndex === 0
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-green-700 text-white hover:bg-green-600 hover:scale-105'
      }`}
      aria-label="Previous Project"
    >
      ←
    </button>

    {/* Floating Next Button (Right) */}
    <button
      onClick={() => goToProject('next')}
      disabled={currentIndex === projectDetails.length - 1}
      className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
        currentIndex === projectDetails.length - 1
          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
          : 'bg-green-700 text-white hover:bg-green-600 hover:scale-105'
      }`}
      aria-label="Next Project"
    >
      →
    </button>
  </>
)}


    </main>
    
  );
}