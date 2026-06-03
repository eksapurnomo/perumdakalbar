"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 250]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[90vh] min-h-[700px] bg-black" />; // SSR placeholder

  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-black flex items-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/10 z-10 mix-blend-overlay"
        />

        {/* Dynamic Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/web-data/cargo-container-ship.png')" }}
        />
      </motion.div>

      {/* Floating Blur Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 60, 0], 
          y: [0, -60, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] z-10 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0], 
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] z-10 pointer-events-none"
      />

      {/* Glass Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

      {/* Light Particle Motion (Simulated with small blur circles) */}
      <motion.div
        animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-1/3 w-2 h-2 bg-white rounded-full blur-sm z-10"
      />
      <motion.div
        animate={{ y: [0, -150], opacity: [0, 0.3, 0] }}
        transition={{ duration: 6, delay: 2, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-1/2 w-3 h-3 bg-white rounded-full blur-[2px] z-10"
      />

      {/* Hero Content (60/40 Layout via max-width) */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Mendorong Pertumbuhan Ekonomi <span className="text-secondary drop-shadow-md">Kalimantan Barat</span> Melalui Layanan Strategis
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed font-light">
              Perumda Aneka Usaha mengintegrasikan layanan properti, ticketing, logistik, dan marketplace untuk memberdayakan UMKM dan korporasi di era digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/services" size="lg" className="px-8 bg-primary text-white hover:bg-primary/90 border-0 shadow-lg shadow-primary/30">
              Explore Services
            </Button>
            <Button href="/marketplace" variant="outline" size="lg" className="px-8 text-white border-white/30 hover:bg-white/10 hover:border-white backdrop-blur-sm">
              Marketplace
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Bottom Fade matching standard background */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />
    </section>
  );
}
