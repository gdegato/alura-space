import React from 'react'
import styles from './PaginaInicial.module.scss'
import banner from './banner.png'
import Cabecalho from 'components/Cabecalho'
import Galeria from 'components/Galeria'
import Menu from 'components/Menu'
import Rodape from 'components/Rodape'
import Populares from 'components/Populares'

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço!</h1>
            <img src={banner} alt="Banner da galeria" />
          </div>
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  )
}
