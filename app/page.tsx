'use client';

import LogoAnimation from '@/components/logo-animation';
import Navbar from '@/components/navbar';
import NeuralNetworkBg from '@/components/neural-network-bg';
import FloatingElements from '@/components/floating-elements';
import HeroSection from '@/components/hero-section';
import WorkflowMockup from '@/components/workflow-mockup';
import ServiceCards from '@/components/service-cards';
import ProcessTimeline from '@/components/process-timeline';
import AboutSection from '@/components/about-section';
import StatsMockup from '@/components/stats-mockup';
import AnimatedStats from '@/components/animated-stats';
import MagneticCTA from '@/components/magnetic-cta';
import CTAWaitlist from '@/components/cta-waitlist';
import Footer from '@/components/footer';
import ScrollReveal from '@/components/scroll-reveal';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <LogoAnimation />
      <NeuralNetworkBg />
      <FloatingElements />
      <Navbar />
      
      <HeroSection />
      
      <ScrollReveal>
        <WorkflowMockup />
      </ScrollReveal>
      
      <ScrollReveal>
        <ServiceCards />
      </ScrollReveal>
      
      <ScrollReveal>
        <ProcessTimeline />
      </ScrollReveal>
      
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      
      <ScrollReveal>
        <StatsMockup />
      </ScrollReveal>
      
      <ScrollReveal>
        <AnimatedStats />
      </ScrollReveal>
      
      <ScrollReveal>
        <MagneticCTA />
      </ScrollReveal>
      
      <ScrollReveal delay={200}>
        <CTAWaitlist />
      </ScrollReveal>
      
      <Footer />
    </div>
  );
}