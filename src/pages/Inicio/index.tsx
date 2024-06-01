import Cardapio from 'data/cardapio.json';
import style from './inicio.module.scss';
import StylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';

export default function Inicio() {
  let pratosRecomendados = [
    ...Cardapio
  ];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  return (
    <section>
      <h3 className={StylesTema.titulo}>
        Recomendações da cozinha
      </h3>
      <div className={style.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={style.recomendado__imagem}>
            <img src={item.photo} alt={item.title} />
            <button className={style.recomendado__botao}>
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={StylesTema.titulo}>
        Nossa casa
      </h3>
      <div className={style.nossaCasa}>
        <img src={nossaCasa} alt="Casa do Aluroni" />
        <div className={style.nossaCasa__endereco}>
          Rua Vergueiro 3185<br /><br />Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}