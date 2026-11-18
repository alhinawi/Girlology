'use client';
import React from 'react';
import {
  Handshake, MessageCircle, Ear, Star, Flower2, Users, Heart, ShieldCheck, Gem, TriangleAlert,
} from 'lucide-react';

const map: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  handshake: Handshake,
  chat: MessageCircle,
  ear: Ear,
  star: Star,
  flower: Flower2,
  friends: Users,
  heart: Heart,
  shield: ShieldCheck,
  rings: Gem,
  warning: TriangleAlert,
};

export default function TopicIcon({ name, size = 18, className }: { name: string; size?: number | string; className?: string }) {
  const I = map[name] ?? Heart;
  return <I size={size} className={className} />;
}
