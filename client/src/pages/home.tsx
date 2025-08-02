import { useEffect } from "react";
import Navigation from "../components/layout/navigation";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Services from "../components/sections/services";
import Work from "../components/sections/work";
import Reviews from "../components/sections/reviews";
import Contact from "../components/sections/contact";
import Footer from "../components/layout/footer";
import AnimatedButton from "../components/ui/animated-button";
import { Calendar } from "lucide-react";

export default function Home() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Kut'n Up Barber Shop - Premium Grooming Experience | Huntsville, AL";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience premium grooming at Kut\'n Up Barber Shop in Huntsville, AL. Professional haircuts, beard styling, and luxury treatments. Book your appointment today.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Experience premium grooming at Kut\'n Up Barber Shop in Huntsville, AL. Professional haircuts, beard styling, and luxury treatments. Book your appointment today.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Kut\'n Up Barber Shop - Premium Grooming Experience' },
      { property: 'og:description', content: 'Experience premium grooming at Kut\'n Up Barber Shop in Huntsville, AL. Professional haircuts, beard styling, and luxury treatments.' },
      { property: 'og:type', content: 'business.business' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tag => {
      const existing = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existing) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      
      {/* Sticky Book Now Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatedButton
          variant="primary"
          size="lg"
          className="shadow-2xl animate-float"
          icon={Calendar}
        >
          Book Now
        </AnimatedButton>
      </div>
    </div>
  );
}
