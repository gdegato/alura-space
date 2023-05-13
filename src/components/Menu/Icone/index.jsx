import React from 'react'

export default function Icone({ style, icone }) {
  return (
    <li className={style.menu__item}>
      <img src={icone.path} alt={icone.alt} />
      <a href="/">{icone.nome}</a>
    </li>
  )
}
