"use client";
import React from 'react';
import { FloatingNav } from './ui/Floating-navbar';

const Navbar = () => {
    
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/",
        },
        {
            name: "Skills",
            link: "/#Skills",
        },
        {
            name: "Project",
            link: "/#projects",
        },
    ];
    
    return (
        <div className="relative w-full">
          <FloatingNav navItems={navItems} />
        </div>
      );
    
};


export default Navbar