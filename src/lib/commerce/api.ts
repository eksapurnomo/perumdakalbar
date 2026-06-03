/**
 * Commerce API Abstraction Layer (MedusaJS Ready)
 * 
 * This file serves as the abstraction layer for e-commerce functionality.
 * Currently, it returns mocked data, but it is structured to be replaced 
 * with MedusaJS SDK calls in the future without changing the frontend components.
 */

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  { id: '1', title: 'Beras Premium Kapuas 5Kg', description: 'Beras lokal kualitas premium dari Kapuas.', price: 75000, currency: 'IDR', category: 'sembako', imageUrl: '/web-data/rices.jpg', isFeatured: true },
  { id: '2', title: 'Minyak Goreng Sawit 2L', description: 'Minyak goreng kelapa sawit berkualitas.', price: 34000, currency: 'IDR', category: 'sembako', imageUrl: '/web-data/kios-perumdakalbar.png', isFeatured: true },
  { id: '3', title: 'Gula Pasir Lokal 1Kg', description: 'Gula pasir putih produksi lokal.', price: 16000, currency: 'IDR', category: 'sembako', imageUrl: '/web-data/kios-perumdakalbar.png' },
  { id: '4', title: 'Kopi Bubuk Robusta 250g', description: 'Kopi bubuk robusta khas Kalbar.', price: 45000, currency: 'IDR', category: 'minuman', imageUrl: '/web-data/green-matcha-powder-still-life-e.png' },
];

const MOCK_CATEGORIES: Category[] = [
  { id: 'c1', name: 'Sembako', slug: 'sembako' },
  { id: 'c2', name: 'Minuman', slug: 'minuman' },
  { id: 'c3', name: 'Hasil Bumi', slug: 'hasil-bumi' },
  { id: 'c4', name: 'Kerajinan', slug: 'kerajinan' },
];

export async function getProducts(options?: { category?: string; featured?: boolean }): Promise<Product[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  let products = [...MOCK_PRODUCTS];
  
  if (options?.category) {
    products = products.filter(p => p.category === options.category);
  }
  
  if (options?.featured) {
    products = products.filter(p => p.isFeatured);
  }
  
  return products;
}

export async function getCategories(): Promise<Category[]> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return MOCK_CATEGORIES;
}

export async function getProductById(id: string): Promise<Product | null> {
  await new Promise(resolve => setTimeout(resolve, 200));
  return MOCK_PRODUCTS.find(p => p.id === id) || null;
}
