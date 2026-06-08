'use client';

import HeroSection from '@/components/home/HeroSection';
import ReferencesSection from '@/components/home/ReferencesSection';
import GenesisSection from '@/components/home/GenesisSection';
import VisionSection from '@/components/home/VisionSection';
import MissionSection from '@/components/home/MissionSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const HomeContent = ({ data }: { data?: Record<string, string> }) => {
  return (
    <div className="min-h-screen">
      <HeroSection data={data} />
      <ReferencesSection data={data} />
      <GenesisSection data={data} />
      <VisionSection data={data} />
      <MissionSection data={data} />
      <ServicesSection data={data} />
      <TestimonialsSection data={data} />
      <CTASection data={data} />
    </div>
  );
};

export default HomeContent;
