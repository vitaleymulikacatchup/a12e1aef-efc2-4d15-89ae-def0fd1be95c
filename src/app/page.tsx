"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';
import { Shield, Users, Chart } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        buttonText="Buy DOG"
        onButtonClick={() => {/* Handle button click */}}
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' },
        ]}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Join the DogMemecoin Adventure!"
          subtitle="Your future could be just a wag away!"
          contractAddress="0x123456789abcdef"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="DogMemecoin is a fun and engaging community-driven cryptocurrency designed to bring joy and value to our holders."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="DogMemecoin Tokenomics"
          description="A community-driven token that thrives on the participation of its holders."
          kpiItems={[
            { value: '1M', description: 'Total Supply', longDescription: 'Total number of tokens.', icon: Users },
            { value: '0.1%', description: 'Transaction Fee', longDescription: 'Fee for every transaction on the network.', icon: Shield },
            { value: '50%', description: 'Circulating Supply', longDescription: 'Percentage of tokens available in the market.', icon: Chart }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="DogMemecoin Logo"
          logoText="DogMemecoin"
          columns={[
            { items: [{ label: 'Privacy Policy', onClick: () => {/* Handle Privacy Click */}}] },
            { items: [{ label: 'Contact Us', onClick: () => {/* Handle Contact Click */}}] },
            { items: [{ label: 'About Us', onClick: () => {/* Handle About Click */}}] }
          ]}
          copyrightText="© 2023 DogMemecoin. All rights reserved."
        />
      </div>
    </SiteThemeProvider>
  );
}
