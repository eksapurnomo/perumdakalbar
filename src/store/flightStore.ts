import { create } from 'zustand';

interface FlightState {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  passengers: number;
  flightClass: string;
  setOrigin: (val: string) => void;
  setDestination: (val: string) => void;
  setDepartureDate: (val: string) => void;
  setReturnDate: (val: string) => void;
  setPassengers: (val: number) => void;
  setFlightClass: (val: string) => void;
}

export const useFlightStore = create<FlightState>((set) => ({
  origin: '',
  destination: '',
  departureDate: '',
  returnDate: '',
  passengers: 1,
  flightClass: 'Economy',
  setOrigin: (val) => set({ origin: val }),
  setDestination: (val) => set({ destination: val }),
  setDepartureDate: (val) => set({ departureDate: val }),
  setReturnDate: (val) => set({ returnDate: val }),
  setPassengers: (val) => set({ passengers: val }),
  setFlightClass: (val) => set({ flightClass: val }),
}));
