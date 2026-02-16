import styles from './Certificacoes.module.css';
import typography from '../Styles/typography.module.css';
import CursoCard from './CursoCard/CursoCard';
import certificacoes from './certificacoes.json';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function Certificacoes() {
  return (
    <section id="certificacoes" className={styles.section}>
      <h2 className={typography.sectionTitle}>Certificações</h2>

      <div className={styles.container}>
        <Swiper
          className={styles.swiper}
          navigation
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {certificacoes.cursos.map((curso) => (
            <SwiperSlide key={curso.cursoNome}>
              <CursoCard
                cursoNome={curso.cursoNome}
                instituicao={curso.instituicao}
                duracao={curso.duracao}
                anoConclusao={curso.anoConclusao}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
