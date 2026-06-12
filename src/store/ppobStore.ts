import { create } from 'zustand';

interface PPOBState {
  activeTab: string;
  phoneNumber: string;
  amount: number | null;
  provider: string;
  setActiveTab: (tab: string) => void;
  setPhoneNumber: (phone: string) => void;
  setAmount: (amount: number | null) => void;
  setProvider: (provider: string) => void;
  resetPPOB: () => void;
}

export const usePPOBStore = create<PPOBState>((set) => ({
  activeTab: 'pulsa',
  phoneNumber: '',
  amount: null,
  provider: '',
  setActiveTab: (tab) => set({ activeTab: tab }),
  setPhoneNumber: (phone) => set({ phoneNumber: phone }),
  setAmount: (amount) => set({ amount }),
  setProvider: (provider) => set({ provider }),
  resetPPOB: () => set({ phoneNumber: '', amount: null, provider: '' }),
}));
