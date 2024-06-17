import { Header } from '../../Componets/Header/Header';
import { Footer } from '../../Componets/Footer/Footer';
import { Banner } from '../../Componets/Banner/Banner';
import { Sobre } from '../../Componets/Sobre/Sobre';
import { Experiencia } from '../../Componets/Experiencias/Experiencia';




export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Sobre />
      <Experiencia />
      <Footer />      
    </>
  );
}