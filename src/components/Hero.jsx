'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_theme(colors.gray.700),_theme(colors.gray.950))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-500 border px-2 py-1 rounded-4xl bg-gray-900">The Alim Foundation</span>
            <h1 className="mt-4 text-5xl text-gray-500 font-bold leading-tight">
              Learn, Discuss,{' '}
              <span className="block">& Share Islamic</span>
              <span className="block">Knowledge</span>
            </h1>
            <p className="mt-6 text-xl text-gray-400">
              Alim.org is a social network focused around various Islamic content,
              including tafsir, hadith, and Muslim history.
            </p>
            <div className="mt-10 text-gray-200 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary border rounded-full p-3 text-red-500"
              >
                <Link href="/"> Launch the Alim</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary border rounded-full p-3"
              >
                <Link href="">Learn More</Link>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1580220810949-e7ddee6a4954?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Quran"
                layout="fill"
                objectFit="contain"
                className="opacity-80 "
              />
            </div>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
}

