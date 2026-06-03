import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center shrink-0 ${className}`}>
      <div className="relative h-5 md:h-7 w-auto flex items-center">
        <Image 
          src="/web-data/logo_PERUMDA1@2x.svg" 
          alt="Perumda Aneka Usaha Kalimantan Barat" 
          width={140} 
          height={28} 
          className="h-full w-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
