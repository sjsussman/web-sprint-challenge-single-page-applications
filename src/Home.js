import React from 'react'
import { useHistory, Link } from 'react-router-dom'

export default function Home() {
  const orderNow = useHistory()

  const orderForm = () => {
    console.log(orderNow)
    orderNow.push('/pizza')
  }

  return (
    <div>
        <div>
            <ul id="nav">
                <li><Link to ='/'>Home</Link></li>
                <li><Link to = '/pizza'>Order</Link></li>
            </ul>
        </div>
      <h1>Lambda Eats</h1>
      <p>Hungry? Order a Pizza Here:</p>
      <button
        onClick={orderForm}
        name='orderButton'
      >
        Order Now!
      </button>
    </div>
  )
}
