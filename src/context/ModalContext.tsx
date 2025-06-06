import React, { createContext, useState } from 'react';
import PortfolioModal from '@/components/PortfolioModal/PortfolioModal';
import portfolioItems from '@/data/portfolioItems';

interface ModalContextType {
  openModal: (index: number) => void;
}

export const ModalContext = createContext<ModalContextType>({
  openModal: () => { },
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleClose = () => setCurrentIndex(null);
  const handlePrev = () => setCurrentIndex((prev) => prev === 0 ? portfolioItems.length - 1 : (prev ?? 0) - 1);
  const handleNext = () => setCurrentIndex((prev) => prev === portfolioItems.length - 1 ? 0 : (prev ?? 0) + 1);

  return (
    <ModalContext.Provider value={{ openModal: setCurrentIndex }}>
      {children}
      {currentIndex !== null && (
        <PortfolioModal
          projects={portfolioItems}
          currentIndex={currentIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </ModalContext.Provider>
  );
};
