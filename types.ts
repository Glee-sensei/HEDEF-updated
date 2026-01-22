
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Education' | 'Vocational' | 'Economic' | 'Advocacy';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
