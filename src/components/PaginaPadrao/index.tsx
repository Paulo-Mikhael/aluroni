import styles from './paginaPadrao.module.scss';
import { Outlet } from 'react-router-dom';
import StylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={StylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}