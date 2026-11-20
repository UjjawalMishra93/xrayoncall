"use client";

import React, { createContext, useContext, useState } from "react";
import BookingModal from "@/components/BookingModal";

interface BookingContextType {
  openBooking: (scanType?: string) => void;
  closeBooking: () => void;
  isOpen: boolean;
  selectedScan: string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedScan, setSelectedScan] = useState("Chest X-ray");

  const openBooking = (scanType?: string) => {
    if (scanType) {
      setSelectedScan(scanType);
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return (
    <BookingContext.Provider
      value={{
        openBooking,
        closeBooking,
        isOpen,
        selectedScan,
      }}
    >
      {children}
      <BookingModal
        isOpen={isOpen}
        onClose={closeBooking}
        defaultScanType={selectedScan}
      />
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
