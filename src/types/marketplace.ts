export interface Category {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface Store {
  id: string;
  name: string;
  slug: string;
  logo?: string;
  followers: number;
  rating: number;
  productCount: number;
  city: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  sold: number;
  city: string;
  storeName: string;
  image: string;
  freeShipping: boolean;
  categoryId: string;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  userCity: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Banner {
  id: string;
  imageUrl: string;
  title: string;
  subtitle?: string;
  buttonText: string;
  link: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
