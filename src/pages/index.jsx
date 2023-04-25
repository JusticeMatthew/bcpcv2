import { useEffect } from 'react';
import { Events } from 'react-scroll';
import { Landing, About } from '@/containers';

export default function Home() {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => null);
    Events.scrollEvent.register('end', () => null);

    return Events.scrollEvent.remove('begin'), Events.scrollEvent.remove('end');
  }, []);

  return (
    <main className="flex flex-col items-center w-full text-white bg-dark font-poppins selection:bg-logo selection:text-black">
      <Landing />
      <About />
    </main>
  );
}
