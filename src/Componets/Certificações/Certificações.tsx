import { Title } from '../Sobre/SobreStyle';
import { CertificacoesDiv, CertificacoesSection } from './CertificaçõesStyle';
import CursoCard from './CursoCard/CursoCard';
import certificacoes from './certificacoes.json';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function Certicacoes() {
  const cursosSlideArray = certificacoes.cursos.map(e => (
    <SwiperSlide
      key={e.cursoNome}
    >
      <CursoCard
        cursoNome={e.cursoNome}
        instituicao={e.instituicao}
        duracao={e.duracao}
        anoConclusao={e.anoConclusao}
      />
    </SwiperSlide>
  ));

  return (
    <CertificacoesSection id='certificacoes'>
      <Title>Certificações</Title>
      <CertificacoesDiv >
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={3}
        >
          {cursosSlideArray}
        </Swiper>
      </CertificacoesDiv>
    </CertificacoesSection>
  );
};
