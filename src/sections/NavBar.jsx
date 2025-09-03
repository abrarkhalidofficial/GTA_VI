"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null);
  const menuItemsRef = useRef(null);
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);

  const handleNavClick = () => {
    window.open("https://github.com/abrarkhalidofficial", "_blank");
  };

  // Initial navbar animation
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(navRef.current, { y: -50, opacity: 0, duration: 0.8 })
      .from(
        logoRef.current,
        { x: -40, opacity: 0, scale: 0.7, duration: 0.7 },
        "-=0.4"
      )
      .from(
        menuBtnRef.current,
        { x: 40, opacity: 0, scale: 0.7, duration: 0.7 },
        "-=0.5"
      );
  }, []);

  // Toggle menu open/close
  const toggleMenu = () => {
    setOpen((prev) => !prev);

    if (!open) {
      gsap.to(menuRef.current, { x: 0, duration: 0.6, ease: "power3.out" });
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.3 });

      gsap.fromTo(
        menuItemsRef.current.children,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.15, delay: 0.2 }
      );

      gsap.fromTo(
        closeBtnRef.current,
        { opacity: 0, rotation: -90 },
        { opacity: 1, rotation: 0, duration: 0.4, delay: 0.1 }
      );
    } else {
      gsap.to(menuRef.current, { x: "100%", duration: 0.6, ease: "power3.in" });
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3 });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav ref={navRef} className="">
        <img
          ref={logoRef}
          src="/images/nav-logo.svg"
          alt="Logo"
          className="navbar-logo"
          onClick={handleNavClick}
        />
        <img
          ref={menuBtnRef}
          src={open ? "/images/close.svg" : "/images/menu.svg"}
          alt="Menu"
          className="navbar-menu-btn"
          onClick={toggleMenu}
        />
      </nav>

      {/* Overlay */}
      <div ref={overlayRef} className="overlay" onClick={toggleMenu}></div>

      {/* Slide-in Menu */}
      <div ref={menuRef} className="side-menu">
        <button ref={closeBtnRef} className="close-btn" onClick={toggleMenu}>
          <img src="/images/close.png" alt="Close Menu" />
        </button>

        <div ref={menuItemsRef} className="menu-items">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
          <a href="#portfolio" onClick={toggleMenu}>
            Portfolio
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
