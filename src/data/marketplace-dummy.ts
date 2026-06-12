import { Product, Category, Store, Review, Banner } from "@/types/marketplace";

export const dummyCategories: Category[] = [
  { id: "c1", name: "Properti", slug: "properti", icon: "Building2" },
  { id: "c2", name: "Pertambangan", slug: "pertambangan", icon: "Pickaxe" },
  { id: "c3", name: "Pertanian", slug: "pertanian", icon: "Tractor" },
  { id: "c4", name: "Perikanan", slug: "perikanan", icon: "Fish" },
  { id: "c5", name: "Energi Terbarukan", slug: "energi-terbarukan", icon: "Zap" },
  { id: "c6", name: "Fashion", slug: "fashion", icon: "Shirt" },
  { id: "c7", name: "Elektronik", slug: "elektronik", icon: "Smartphone" },
  { id: "c8", name: "Rumah Tangga", slug: "rumah-tangga", icon: "Home" },
  { id: "c9", name: "Makanan & Minuman", slug: "makanan-minuman", icon: "Utensils" },
  { id: "c10", name: "Kesehatan", slug: "kesehatan", icon: "HeartPulse" },
  { id: "c11", name: "Otomotif", slug: "otomotif", icon: "Car" },
  { id: "c12", name: "Jasa", slug: "jasa", icon: "Briefcase" },
];

export const dummyBanners: Banner[] = [
  {
    id: "b1",
    imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    title: "Belanja Produk UMKM Kalimantan Barat",
    subtitle: "Dukung Produk Lokal, Majukan Ekonomi Daerah",
    buttonText: "Belanja Sekarang",
    link: "/marketplace",
  },
  {
    id: "b2",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop",
    title: "Marketplace Terpercaya Perumda Kalbar",
    subtitle: "Temukan Kebutuhan Anda dengan Harga Terbaik",
    buttonText: "Lihat Promo",
    link: "/marketplace/deals",
  },
];

const cities = ["Pontianak", "Singkawang", "Sambas", "Ketapang", "Mempawah", "Sintang", "Sanggau", "Kapuas Hulu", "Bengkayang", "Landak"];
const storeNames = ["Aneka Usaha Store", "Kalbar Mart", "Borneo Shop", "Nusantara Market", "UMKM Center Kalbar", "Khatulistiwa Goods", "Maju Jaya", "Sumber Rejeki", "Berkah Selalu", "Borneo Agro", "Kapuas Raya", "Equator Tech", "Sinar Mandiri", "Cahaya Indah", "Pesona Kalbar", "Lestari Alam", "Karya Mandiri", "Gading Mart", "Bumi Sentosa", "Kencana Mas"];

export const dummyStores: Store[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `s${i + 1}`,
  name: storeNames[i],
  slug: storeNames[i].toLowerCase().replace(/\s+/g, '-'),
  followers: (i * 2435) % 50000 + 1000,
  rating: Number((4.2 + ((i * 0.1) % 0.8)).toFixed(1)),
  productCount: (i * 47) % 1000 + 50,
  city: cities[i % cities.length],
  logo: `https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=100&auto=format&fit=crop`,
}));

const baseProducts = [
  { name: "Laptop ASUS Vivobook 15", cat: "c7", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853", basePrice: 7500000 },
  { name: "Samsung Galaxy S25 Ultra", cat: "c7", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c", basePrice: 20000000 },
  { name: "Smart TV LG 55 Inch 4K", cat: "c7", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1", basePrice: 6500000 },
  { name: "Rice Cooker Philips Premium", cat: "c8", img: "https://images.unsplash.com/photo-1584269600519-112d08a7fa3c", basePrice: 850000 },
  { name: "Mesin Pompa Air Shimizu", cat: "c8", img: "https://images.unsplash.com/photo-1574344686001-381c818be464", basePrice: 450000 },
  { name: "Batik Tulis Khas Kalimantan", cat: "c6", img: "https://images.unsplash.com/photo-1583391733958-d25e07fac815", basePrice: 350000 },
  { name: "Kopi Robusta Asli Pontianak", cat: "c9", img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7", basePrice: 75000 },
  { name: "Bibit Kelapa Sawit Unggul", cat: "c3", img: "https://images.unsplash.com/photo-1621217649688-6d8db9c882d2", basePrice: 45000 },
  { name: "Pupuk Organik Cair 1L", cat: "c3", img: "https://images.unsplash.com/photo-1592424001806-0371307b22d4", basePrice: 55000 },
  { name: "Madu Hutan Liar Kapuas", cat: "c9", img: "https://images.unsplash.com/photo-1587049352847-4d4b1f41d914", basePrice: 120000 },
  { name: "Panel Surya 100WP", cat: "c5", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276", basePrice: 650000 },
  { name: "Helm Full Face KYT", cat: "c11", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc", basePrice: 550000 },
];

export const dummyProducts: Product[] = Array.from({ length: 100 }).map((_, i) => {
  const base = baseProducts[i % baseProducts.length];
  const hasDiscount = (i % 3) === 0; // Every 3rd item has discount
  const discount = hasDiscount ? ((i * 7) % 35) + 5 : 0;
  const storeIndex = i % dummyStores.length;
  const store = dummyStores[storeIndex];

  return {
    id: `p${i + 1}`,
    name: `${base.name} V${Math.floor(i / baseProducts.length) + 1}`,
    slug: `${base.name.toLowerCase().replace(/\s+/g, '-')}-v${i + 1}`,
    price: hasDiscount ? Math.floor(base.basePrice * (1 - discount / 100)) : base.basePrice,
    originalPrice: hasDiscount ? base.basePrice : undefined,
    discount: hasDiscount ? discount : undefined,
    rating: Number((4.0 + ((i * 0.13) % 1.0)).toFixed(1)),
    sold: (i * 271) % 5000 + 10,
    city: store.city,
    storeName: store.name,
    image: `${base.img}?q=80&w=500&auto=format&fit=crop&sig=${i}`, // avoid duplicate image cache if possible
    freeShipping: (i % 2) === 0,
    categoryId: base.cat,
  };
});

export const dummyFlashSale: Product[] = dummyProducts.filter(p => p.discount && p.discount > 15).slice(0, 10);

const reviewers = ["Ahmad", "Budi", "Siti", "Rina", "Joko", "Tini", "Wawan", "Dian", "Eko", "Maya", "Rudi", "Fitri", "Agus", "Nina", "Hadi", "Sari", "Deny", "Lestari", "Reza", "Indah"];
const comments = ["Barang cepat sampai, packaging sangat rapi.", "Kualitas produk sangat bagus, original.", "Sesuai deskripsi, penjual ramah.", "Harga termurah se-Kalbar!", "Produk lokal kualitas internasional.", "Sangat merekomendasikan toko ini.", "Akan belanja di sini lagi nanti.", "Pengiriman agak lama tapi barang aman.", "Mantap, sukses terus UMKM Kalbar.", "Bintang 5 buat pelayanannya."];

export const dummyTestimonials: Review[] = Array.from({ length: 30 }).map((_, i) => ({
  id: `r${i + 1}`,
  productId: dummyProducts[i % dummyProducts.length].id,
  userName: reviewers[i % reviewers.length],
  userCity: cities[i % cities.length],
  rating: (i % 2) === 0 ? 5 : 4,
  comment: comments[i % comments.length],
  date: new Date(Date.now() - (i * 86400000)).toISOString().split('T')[0],
}));
