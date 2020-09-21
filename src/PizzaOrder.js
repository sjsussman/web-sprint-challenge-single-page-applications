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
        <div>
          Toppings:
          <ul>
            {details.toppings.map((top, idx) => <li key={idx}>{top}</li>)}
          </ul>
        </div>
      }

      <p>Special Requests: {details.request}</p>


    </div>
  )
}