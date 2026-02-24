// 'use client';

// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/models', label: 'Models' },
//     { href: '/about', label: 'About' },
//     { href: '/contact', label: 'Contact' },
//   ];

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-black bg-linear-to-b from-dark-900/95 to-dark-900/80 shadow-lg shadow-primary-500/5 border-b border-dark-800'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-3 group">
//             <div className="w-10 h-10 bg-linear-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 glow">
//               <svg
//                 className="w-6 h-6 text-dark-900"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M10 3.5L2 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-2.5z" />
//               </svg>
//             </div>
//             <span className="font-display text-2xl font-bold gradient-text">
//               RYLTON
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="font-body text-sm font-medium text-gray-300 hover:text-primary-500 transition-colors duration-200 relative group"
//               >
//                 {link.label}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-gray-300 hover:text-primary-500 transition-colors"
//             aria-label="Toggle menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isMobileMenuOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="w-full md:hidden bg-dark-800/98 backdrop-blur-lg border-t border-dark-700 animate-fade-in">
//           <div className="px-4 py-6 space-y-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className="block text-gray-300 hover:text-primary-500 transition-colors py-2 font-medium"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import TestDriveModal from './TestDriveModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const openMenu = () => {
    setShouldRender(true);
    // Small delay to allow DOM to mount before triggering animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsAnimating(true);
        setIsMobileMenuOpen(true);
      });
    });
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setIsMobileMenuOpen(false);
    // Wait for animation to finish before unmounting
    setTimeout(() => setShouldRender(false), 350);
  };

  const toggleMenu = () => {
    if (isMobileMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/models', label: 'Models' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/dealership', label: 'Dealership' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black bg-linear-to-b from-dark-900/95 to-dark-900/80 shadow-lg shadow-primary-500/5 border-b border-dark-800'
            : 'bg-[#0a0a0f]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div>
              <Link href="/" className="pt-20">
                <img src="/images/logo2.png" alt="Rylton Logo" className="w-70 h-70 pt-6" />
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm font-medium text-gray-300 hover:text-primary-500 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <button onClick={() => setIsOpen(true)} className='btn-primary'>
                Book Test Ride
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-primary-500 transition-colors relative w-6 h-6"
              aria-label="Toggle menu"
            >
              {/* Hamburger → X animated icon */}
              <span
                className="absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                style={{
                  top: isMobileMenuOpen ? '50%' : '25%',
                  transform: isMobileMenuOpen ? 'translateY(-50%) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                style={{
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scale: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="absolute block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out"
                style={{
                  top: isMobileMenuOpen ? '50%' : '75%',
                  transform: isMobileMenuOpen ? 'translateY(-50%) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {shouldRender && (
        <>
          {/* Backdrop - blurs and darkens the page content behind the menu */}
          <div
            onClick={closeMenu}
            className="fixed inset-0 z-40 md:hidden transition-all duration-350"
            style={{
              backgroundColor: isAnimating ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
              backdropFilter: isAnimating ? 'blur(4px)' : 'blur(0px)',
              WebkitBackdropFilter: isAnimating ? 'blur(4px)' : 'blur(0px)',
              transition: 'background-color 350ms ease, backdrop-filter 350ms ease',
            }}
          />

          {/* Menu Panel - slides down from top */}
          <div
            className="fixed top-0 left-0 right-0 z-50 md:hidden"
            style={{
              transform: isAnimating ? 'translateY(0)' : 'translateY(-100%)',
              opacity: isAnimating ? 1 : 0,
              transition: 'transform 350ms cubic-bezier(0.32, 0.72, 0, 1), opacity 350ms ease',
              background: 'rgba(10, 10, 10, 0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Top bar with logo + close button */}
            <div className="flex items-center justify-between h-20 px-4 sm:px-6">
              <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
                <div className="w-10 h-10 bg-linear-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center glow">
                  <svg className="w-6 h-6 text-dark-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5L2 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-8-2.5z" />
                  </svg>
                </div>
                <span className="font-display text-2xl font-bold gradient-text">RYLTON</span>
              </Link>
              <button
                onClick={closeMenu}
                className="text-gray-300 hover:text-primary-500 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links with staggered animation */}
            <div className="px-6 pb-10 space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center py-4 text-xl font-semibold text-gray-200 hover:text-primary-500 transition-all duration-200 border-b border-white/5 group"
                  style={{
                    transform: isAnimating ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isAnimating ? 1 : 0,
                    transition: `transform 350ms cubic-bezier(0.32, 0.72, 0, 1) ${100 + index * 60}ms, opacity 350ms ease ${100 + index * 60}ms`,
                  }}
                  onClick={closeMenu}
                >
                  <span className="w-0 group-hover:w-4 h-0.5 bg-primary-500 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full" />
                  {link.label}
                </Link>
              ))}
              <button onClick={() => setIsOpen(true)} className='btn-primary max-[540px]:w-full max-[720px]:w-[75%] mt-4'>
                Book Test Ride
              </button>
            </div>
          </div>
        </>
      )}
      <TestDriveModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}