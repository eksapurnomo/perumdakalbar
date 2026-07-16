"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Search } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === '/';
  const scrolled = isScrolled || !isHomePage;
  
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnterServices = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    hoverTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); 
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50' : 'bg-transparent'}`}>
        {/* Top Menu (Corporate Links) */}
        <div className={`hidden md:block transition-all duration-300 ${scrolled ? 'bg-soft/50 border-b border-border/50' : 'bg-black/10 backdrop-blur-sm'}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-end">
            <nav className={`flex gap-5 text-xs font-medium ${scrolled ? 'text-foreground/70' : 'text-white/80'}`}>
              <Link href="/tentang" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white'}`}>Tentang Kami</Link>
              <Link href="/berita" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white'}`}>Berita</Link>
              <Link href="/karier" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white'}`}>Karier</Link>
              <Link href="https://ppid.perumdakalbar.com" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white'}`}>PPID</Link>
              <Link href="/pengadaan" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white'}`}>Pengadaan</Link>
              <Link href="/kontak" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white'}`}>Kontak</Link>
            </nav>
          </div>
        </div>

        {/* Main Menu */}
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center gap-10">
            <Logo className={scrolled ? '' : 'brightness-0 invert'} />
            
            <nav className={`hidden lg:flex items-center gap-8 text-sm font-semibold ${scrolled ? 'text-foreground' : 'text-white'}`}>
              {/* Services & Products - Mega Menu Toggle */}
              <div 
                className={`relative group flex items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
              >
                <button className={`flex items-center gap-1 transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white/80'}`}>
                  Services & Products <ChevronDown className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </button>
                
                {/* Mega Menu Dropdown */}
                <div 
                  className={`absolute left-0 w-[800px] bg-white border border-border/50 shadow-2xl rounded-2xl p-8 transition-all duration-300 origin-top-left ${scrolled ? 'top-16' : 'top-20'} ${isServicesOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}
                >
                  <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-xs uppercase tracking-wider flex items-center gap-2">Business & Property</h3>
                      <p className="text-xs text-foreground/50 mb-4 font-normal">Penyewaan aset dan properti strategis</p>
                      <ul className="space-y-3 text-foreground/80 font-medium text-sm">
                        <li><Link href="/services#property" className="hover:text-primary block transition-colors">Penyewaan Aset</Link></li>
                        <li><Link href="/services#property" className="hover:text-primary block transition-colors">Properti Perumda</Link></li>
                        <li><Link href="/services#property" className="hover:text-primary block transition-colors">Ruang Usaha & Lahan</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Ticketing & PPOB</h3>
                      <p className="text-xs text-foreground/50 mb-4 font-normal">Pembayaran dan layanan digital</p>
                      <ul className="space-y-3 text-foreground/80 font-medium text-sm">
                        <li><Link href="/services#ticketing" className="hover:text-primary block transition-colors">Pembayaran Tagihan PPOB</Link></li>
                        <li><Link href="/services#ticketing" className="hover:text-primary block transition-colors">Tiket Pesawat & Kapal</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Tug Boat Rental</h3>
                      <p className="text-xs text-foreground/50 mb-4 font-normal">Armada dan layanan maritim</p>
                      <ul className="space-y-3 text-foreground/80 font-medium text-sm">
                        <li><Link href="/services#tugboat" className="hover:text-primary block transition-colors">Armada & Spesifikasi</Link></li>
                        <li><Link href="/services#tugboat" className="hover:text-primary block transition-colors">Area Operasi</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 text-xs uppercase tracking-wider">Trading & Distribution</h3>
                      <p className="text-xs text-foreground/50 mb-4 font-normal">Logistik dan rantai pasok</p>
                      <ul className="space-y-3 text-foreground/80 font-medium text-sm">
                        <li><Link href="/services#logistics" className="hover:text-primary block transition-colors">Logistics Services</Link></li>
                        <li><Link href="/services#logistics" className="hover:text-primary block transition-colors">Supply Chain</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/marketplace" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white/80'}`}>Marketplace</Link>
              <Link href="/partnership" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white/80'}`}>Partnership</Link>
              <Link href="/governance" className={`transition-colors ${scrolled ? 'hover:text-primary' : 'hover:text-white/80'}`}>Governance</Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`p-2 rounded-full transition-colors ${scrolled ? 'text-foreground/70 hover:bg-soft hover:text-foreground' : 'text-white/90 hover:bg-white/20'}`}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button 
            className={`lg:hidden p-2 ${scrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 bg-white p-4 shadow-xl absolute w-full max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col gap-4 font-medium text-foreground">
              <Link href="/services" className="text-primary block py-2">Services & Products</Link>
              <Link href="/marketplace" className="block py-2">Marketplace</Link>
              <Link href="/partnership" className="block py-2">Partnership</Link>
              <Link href="/governance" className="block py-2">Governance</Link>
              <div className="h-px bg-border/50 my-2"></div>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="flex items-center gap-2 text-foreground/70 py-2 w-full text-left"
              >
                <Search size={18} /> Search
              </button>
              <div className="h-px bg-border/50 my-2"></div>
              <Link href="/tentang" className="block text-sm text-foreground/70 py-2">Tentang Kami</Link>
              <Link href="/berita" className="block text-sm text-foreground/70 py-2">Berita</Link>
              <Link href="/kontak" className="block text-sm text-foreground/70 py-2">Kontak</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Global Search Modal - Command Palette Style */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}></div>
          <div className="relative bg-white w-full max-w-2xl mx-4 rounded-2xl shadow-2xl overflow-hidden border border-border/50 transform transition-all">
            <div className="flex items-center border-b border-border/50 px-4 py-4">
              <Search className="w-5 h-5 text-foreground/50 mr-3 shrink-0" />
              <input 
                type="text" 
                placeholder="Search services, products, news..." 
                className="flex-grow bg-transparent text-lg focus:outline-none text-foreground placeholder:text-foreground/40"
                autoFocus
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] rounded bg-soft text-foreground/50 border border-border/50 mr-2 font-mono">
                ESC
              </kbd>
            </div>
            <div className="p-2 max-h-[60vh] overflow-y-auto">
              {/* Empty state for now */}
              <div className="py-14 flex flex-col items-center justify-center text-center">
                <p className="text-foreground/50 font-medium mb-1">No recent searches</p>
                <p className="text-xs text-foreground/40">Start typing to search across the platform.</p>
              </div>
            </div>
            <div className="border-t border-border/50 bg-soft/50 px-4 py-3 flex gap-4 items-center text-xs text-foreground/50">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-border/50 shadow-sm">↑</kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-border/50 shadow-sm">↓</kbd>
                <span>Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-white border border-border/50 shadow-sm">↵</kbd>
                <span>Open</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
