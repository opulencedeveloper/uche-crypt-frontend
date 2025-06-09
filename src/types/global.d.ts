import React from "react";
import { StaticImageData } from "next/image";
import { input } from "framer-motion/client";


declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export interface AdminNavLinkProps {
  label: string;
  href: string;
  activeIcon: StaticImageData;
  inActiveIcon: StaticImageData;
}

export interface AdminDashboardHeaderProps {
  title: string;
  subtitle: string;
}

export interface AdminDashboardCardProps {
  title: string;
  subtitle: string;
  subTitleColor: string;
  percentageChange: string;
  percentageChangeColor: string;
  bgColor: string;
  icon: StaticImageData;
}

export interface AdminDashboardTableHeaderProps {
  title: string;
  subtitle: string;
}

export interface AnimatedModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface AdminDashBoardModalProps {
  title: string;
  subtitle: string;
  inputTitle: string;
  inputType: string;
  proceedButtonText: string;
  onClose: () => void;
}

export interface PurchaseDetailsModalProps {
  onClose: () => void;
}

export interface PurchaseDetailsModalItemProps {
  label: string;
  value: string;
}

export interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: (newState: boolean) => void;
}

export interface TitledToggleButtonProps {
  title: string;
  subTitle: string;
  enabled: boolean;
  onToggle: (newState: boolean) => void;
}


export interface SubAdminModalProps {
  onClose: () => void;
}