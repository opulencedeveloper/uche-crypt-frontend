interface Window {
  SpeechRecognition: typeof SpeechRecognition;
  webkitSpeechRecognition: typeof SpeechRecognition;
  
}

export interface NavLink {
  label: string;
  href: string;
  activeIcon: StaticImageData;
  inActiveIcon: StaticImageData;
}