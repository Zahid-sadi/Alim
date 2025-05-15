'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sun, Moon, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full top-0 z-50 bg-gray-900  backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-red-600 text-2xl font-bold">Alim</span>
            </Link>
          </div>

          <div className="hidden md:block text-gray-200">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#" className="nav-link">Qur&apos;an</Link>
              <Link href="#" className="nav-link">Hadith</Link>
              <Link href="#" className="nav-link">History</Link>
              <Link href="#" className="nav-link">Duas</Link>
              <Link href="#" className="nav-link">Discussions</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full bg-red-500 hover:bg-accent">
              <Settings className="w-5 h-5" />
            </button>

            {/* Uncomment this block if you want to toggle dark/light theme */}
            {/*
            <button 
              className="p-2 rounded-full hover:bg-accent"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            */}

            <button className="btn-primary text-red-500">Login</button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
