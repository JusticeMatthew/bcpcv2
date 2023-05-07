import { useEffect } from 'react';
import { Events } from 'react-scroll';
import { Footer } from '@/components';
import { Landing, About, ServiceAreas, Reviews } from '@/containers';

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => null);
    Events.scrollEvent.register('end', () => null);

    return Events.scrollEvent.remove('begin'), Events.scrollEvent.remove('end');
  }, []);

  return (
    <div className="flex flex-col items-center w-full text-white scroll-smooth font-inter bg-dark selection:bg-logo selection:text-black">
      <Landing />
      <About />
      <ServiceAreas />
      <Reviews />
      <Footer />
    </div>
  );
}
