'use client';

import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type NavLink = {
  name: string;
  href: string;
};

type MobileDrawerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navLinks?: NavLink[];
};

type SocialIconProps = {
  href: string;
  label: string;
  icon: string;
};

type NavItemProps = {
  to: string;
  label: string;
  onClick?: () => void;
};

// Reusable Social Icon Component
const SocialIcon: React.FC<SocialIconProps> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
    aria-label={label}
  >
    <Image src={icon} alt={label} width={20} height={20} className="w-5 h-5" />
  </a>
);

const NavItem: React.FC<NavItemProps> = ({ to, label, onClick }) => (
  <Link
    href={to}
    onClick={onClick}
    className="group flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 hover:bg-gray-100"
  >
    <span className="font-medium">{label}</span>
    <span className="flex-1" />
    <span className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
      →
    </span>
  </Link>
);

const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, setIsOpen, navLinks }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Use passed navLinks, fallback if not provided
  const navItems = useMemo(() => {
    if (navLinks?.length) {
      return navLinks.map((l) => ({ to: l.href, label: l.name }));
    }

    return [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/services', label: 'Services' },
      { to: '/message', label: 'Message' },
      { to: '/feedback', label: 'Feedback' },
      { to: '/team', label: 'Team' },
      { to: '/contact', label: 'Contact' },
    ];
  }, [navLinks]);

  const socialLinks = [
    { href: 'https://www.facebook.com/', label: 'Facebook', icon: '/icons/facebook.svg' },
    { href: 'https://www.youtube.com/', label: 'YouTube', icon: '/icons/youtube.svg' },
    { href: 'https://www.x.com/', label: 'X', icon: '/icons/x.svg' },
    { href: 'https://www.linkedin.com/company/', label: 'LinkedIn', icon: '/icons/linkedin.svg' },
  ];

  // Mobile detection + auto close on desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [setIsOpen]);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false);

  if (!isMobile) return null;

  return (
    <>
      {/* HAMBURGER BUTTON */}
      <div className="relative w-full">
        <button
          onClick={toggleDrawer}
          className="lg:hidden block z-50 p-2 rounded bg-white text-black border border-gray-200"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '' : (
            <Image src="/icons/hamburger.svg" alt="" width={40} height={40} className="w-10 h-10" />
          )}
        </button>
      </div>
      

      {/* Overlay */}
      {isOpen && (
        <div className="fixed w-screen inset-0 bg-black/40 z-40" onClick={closeDrawer} aria-hidden="true" />
      )}

      {/* Drawer (WHITE BACKGROUND) */}
      <div
        className={`fixed top-0 left-0 h-full w-72 z-50 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white text-black shadow-xl`}
      >
        <div className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
            <Link href="/" onClick={closeDrawer} className="block">
              <Image
                src="/favicon/logo.png"
                alt="Sriyog Logo"
                width={800}
                height={600}
                className="w-[130px] md:w-[170px] h-auto"
                style={{
                  filter:
                    'brightness(0) saturate(80%) invert(15%) sepia(90%) saturate(3000%) hue-rotate(2deg) brightness(105%) contrast(120%)',
                }}
              />
            </Link>

            <button
              onClick={closeDrawer}
              className="text-2xl p-1 -mr-2 text-black"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col space-y-2 pb-2">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} onClick={closeDrawer} />
            ))}

            <div className="pt-4 space-y-2">
              <Link href="/career" onClick={closeDrawer} className="block">
                <button className="w-full border border-gray-300 rounded-lg px-6 py-2.5 hover:bg-gray-100 transition-colors duration-200 text-black">
                  Career
                </button>
              </Link>

              <Link href="/notice" onClick={closeDrawer} className="block">
                <button className="w-full bg-red-800 text-white px-6 py-2.5 rounded-lg hover:bg-teal-800 transition-colors duration-200">
                  Notice
                </button>
              </Link>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-xs font-medium text-gray-500 mb-3 text-center">Connect With Us</p>
              <div className="flex flex-wrap justify-center gap-3 px-2">
                {socialLinks.map((social) => (
                  <SocialIcon
                    key={social.label}
                    href={social.href}
                    label={social.label}
                    icon={social.icon}
                  />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
