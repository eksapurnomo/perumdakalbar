export interface Flight {
  id: string;
  airline: string;
  logo: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  type: string; // Direct, 1 Transit
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  facilities: string[];
}

export interface Train {
  id: string;
  name: string;
  class: string;
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
}

export interface Tour {
  id: string;
  name: string;
  location: string;
  image: string;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
}

const airlines = ["Garuda Indonesia", "Citilink", "Lion Air", "Batik Air", "Super Air Jet", "Sriwijaya Air"];
const cities = ["Jakarta (CGK)", "Pontianak (PNK)", "Surabaya (SUB)", "Bali (DPS)", "Medan (KNO)", "Makassar (UPG)"];

export const dummyFlights: Flight[] = Array.from({ length: 50 }).map((_, i) => {
  const isDirect = (i % 3) !== 0;
  const originIndex = i % cities.length;
  const origin = cities[originIndex];
  
  let destIndex = (i * 2 + 1) % cities.length;
  if (destIndex === originIndex) destIndex = (destIndex + 1) % cities.length;
  const destination = cities[destIndex];
  
  const h = (i * 3 + 6) % 24;
  const m = (i * 15) % 60;
  const durH = isDirect ? (i % 2) + 1 : (i % 4) + 3;
  
  return {
    id: `f${i + 1}`,
    airline: airlines[i % airlines.length],
    logo: `https://ui-avatars.com/api/?name=${airlines[i % airlines.length].split(' ')[0]}&background=005BAC&color=fff`,
    origin,
    destination,
    departureTime: `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`,
    arrivalTime: `${((h + durH) % 24).toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`,
    duration: `${durH}j 0m`,
    price: ((i * 35000) % 2000000) + 800000,
    type: isDirect ? "Langsung" : "1 Transit",
  };
});

const hotelNames = ["Grand Mahkota", "Mercure", "Aston", "Harris", "Golden Tulip", "Ibis", "Santika", "Neo", "Gajahmada Avara", "Transera"];
const hotelCities = ["Pontianak", "Singkawang", "Ketapang", "Sintang", "Sambas"];

export const dummyHotels: Hotel[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `h${i + 1}`,
  name: `${hotelNames[i % hotelNames.length]} ${hotelCities[i % hotelCities.length]}`,
  city: hotelCities[i % hotelCities.length],
  image: `https://images.unsplash.com/photo-${1566073771259 + i}?q=80&w=500&auto=format&fit=crop`,
  rating: Number((4.0 + ((i * 0.17) % 1.0)).toFixed(1)),
  reviews: (i * 127) % 2000 + 100,
  price: (i * 45000) % 1500000 + 350000,
  facilities: ["WiFi", "Kolam Renang", "Restoran", "Resepsionis 24 Jam"].slice(0, (i % 3) + 2),
}));

export const dummyTrains: Train[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `t${i + 1}`,
  name: ["Argo Bromo", "Gajayana", "Bima", "Turangga", "Argo Lawu"][i % 5],
  class: ["Eksekutif", "Bisnis", "Ekonomi Premium"][i % 3],
  origin: ["Jakarta (GMR)", "Surabaya (SGU)", "Bandung (BD)", "Semarang (SMT)", "Yogyakarta (YK)"][i % 5],
  destination: ["Jakarta (GMR)", "Surabaya (SGU)", "Bandung (BD)", "Semarang (SMT)", "Yogyakarta (YK)"][(i + 1) % 5],
  departureTime: "08:00",
  arrivalTime: "16:00",
  duration: "8j 0m",
  price: (i * 15000) % 500000 + 150000,
}));

export const dummyTours: Tour[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `tr${i + 1}`,
  name: ["Eksplorasi Danau Sentarum", "City Tour Singkawang", "Susur Sungai Kapuas", "Tanjung Puting Adventure", "Pulau Lemukutan Trip"][i % 5],
  location: "Kalimantan Barat",
  image: `https://images.unsplash.com/photo-${1537996194471 + i}?q=80&w=500&auto=format&fit=crop`,
  duration: ["1 Hari", "2H1M", "3H2M", "4H3M"][i % 4],
  price: (i * 75000) % 2000000 + 500000,
  rating: Number((4.2 + ((i * 0.1) % 0.8)).toFixed(1)),
  reviews: (i * 37) % 500 + 20,
}));
