import  Header  from '../../Componets/layout/Header/Header';
import { Footer } from '../../Componets/layout/Footer/Footer';
import { Banner } from '../../Componets/sections/Banner/Banner';
import { About } from '../../Componets/sections/About/About';
import { Experience } from '../../Componets/sections/Experience/Experience';
import { Projects } from '../../Componets/sections/Projects/Projects';
import { Certificates } from '../../Componets/sections/Certificates/Certificates';




export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Certificates />
      <Footer />
    </>
  );
}