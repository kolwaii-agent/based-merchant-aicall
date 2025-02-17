import Head from 'next/head';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/sections/HeroSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { DemoSection } from '../components/sections/DemoSection';
import { IntegrationSection } from '../components/sections/IntegrationSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>BASED.ai Call Agent - USDC Payment Processing</title>
        <meta name="description" content="Process USDC payments with natural voice interactions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />

      <main className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <IntegrationSection />
      </main>

      <Footer />
    </>
  );
}
