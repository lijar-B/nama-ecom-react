import React from 'react'
import { d2 } from '../db'

const D2 = () => {
  return (
    <div className="shop">
      <div className="shop-info">
        <img className="shop-img" src="./img/42 (OneOne)/shop.jpg" alt="" />
        <h3 className="shop-name">D2 Bubble Tea နှင့် စားဖွယ်စုံ</h3>
      </div>
    </div>
  )
}

const Item = ({ img, itemName, price }) => {
  // const { img, title, author } = props
  return (
    <article>
      <div className="shop-item-info">
        <img src={img} alt="" />
        <div className="shop-item-info-1">
          <h1>{itemName}</h1>
          <h4>{price}</h4>
        </div>
        <div className="shop-item-info-2">
          <a href="https://www.messenger.com/t/108286378398611/?messaging_source=source%3Apages%3Amessage_shortlink">
            <button type="button" className="btn">
              မှာယူရန်
            </button>
          </a>
        </div>
      </div>
    </article>
  )
}

const A = () => {
  return (
    <div>
      <section>
        {d2.catA.map((category) => {
          return <Item key={category.index} {...category}></Item>
        })}
      </section>
    </div>
  )
}

const B = () => {
  return (
    <div>
      <section>
        {d2.catB.map((category) => {
          return <Item key={category.index} {...category}></Item>
        })}
      </section>
    </div>
  )
}

const C = () => {
  return (
    <div>
      <section>
        {d2.catC.map((category) => {
          return <Item key={category.index} {...category}></Item>
        })}
      </section>
    </div>
  )
}

export { A, B, C, Item, D2 }
