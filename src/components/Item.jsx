import React from 'react'

const Item = ({ item }) => {
  return (
    <article className='article'>
        <img src={item.img} alt="" />
        <div className="data-container">
            <div className="top-line">
                <h2 className="title">{item.title}</h2>
                <span className="price">{item.price}</span>
            </div>
            <p className="description">{item.desc}</p>
        </div>
    </article>
  )
}

export default Item