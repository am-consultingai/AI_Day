export interface Session {
  id: string;
  title: string;
  level: string;
  requirements: string;
  focus: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  overview: string;
  topics?: string[];
  takeaways: string[];
  image: string;
  apiField: 'regBeginners' | 'regIntermediate' | 'regAdvanced';
}

export interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  regBeginners: boolean;
  regIntermediate: boolean;
  regAdvanced: boolean;
  marketingOptIn: boolean;
  recordingConsent: boolean;
  couponCode?: string;
}
