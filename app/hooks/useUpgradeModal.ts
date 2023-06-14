import { create } from 'zustand';

interface UpgradeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useUpgradeModal = create<UpgradeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useUpgradeModal;