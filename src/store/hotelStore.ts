import { create } from 'zustand';

interface HotelState {
  city: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  setCity: (val: string) => void;
  setCheckIn: (val: string) => void;
  setCheckOut: (val: string) => void;
  setGuests: (val: number) => void;
  setRooms: (val: number) => void;
}

export const useHotelStore = create<HotelState>((set) => ({
  city: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  rooms: 1,
  setCity: (val) => set({ city: val }),
  setCheckIn: (val) => set({ checkIn: val }),
  setCheckOut: (val) => set({ checkOut: val }),
  setGuests: (val) => set({ guests: val }),
  setRooms: (val) => set({ rooms: val }),
}));
