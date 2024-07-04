import styles from './Prato.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import Cardapio from 'data/cardapio.json';
import { lazy } from 'react';

const TagsPrato = lazy(() => import('components/TagsPrato'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const NotFound = lazy(() => import('pages/NotFound'));

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = Cardapio.find(item => item.id === Number(id));

  if (!prato) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>
                {prato.title}
              </h1>
              <div className={styles.imagem}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__description}>
                  {prato.description}
                </p>
              </div>
              <TagsPrato {...prato} />
            </section>
          </>
        } />
      </Route>
    </Routes>
  );
}