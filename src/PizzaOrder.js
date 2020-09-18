import React from 'react'

export default function PizzaOrder({ details }) {
  if (!details) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      <h2>Name:{details.name}</h2>
      <p>Size: {details.size}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }

      <p>Special Requests: {details.request}</p>


    </div>
  )
}