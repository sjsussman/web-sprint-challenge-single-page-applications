import React from 'react'
import { useHistory, Link } from 'react-router-dom'

export default function PizzaForm(props) {

    const {
    values,
    submit,
    change,
    disabled,
    errors,
    } = props
    
    //useHistory for button
    const goHome = useHistory()
    const backHome = () => {
      console.log(goHome)
      goHome.push('/')
    }


    // ON SUBMIT  & ON CHANGE BUTTONS

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse) 
      }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
      }

    return(
        <div>
            <div>
              <ul id="nav">
                <li><Link to ='/'>Home</Link></li>
                <li><Link to = '/pizza'>Order</Link></li>
              </ul>
            </div>
            <h1>Order Form</h1>
            {/* FORM STARTS HERE */}
            <form onSubmit={onSubmit} >
                <label>Please Enter Your Name:
                    <input
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        placeholder='Name Here' 
                    />
                    <div>{errors.name}</div>
                </label> <br />

                <label>Size:
                    <select 
                        name='size'
                        onChange={onChange}
                        value={values.size}
                    >
                    <option value = ''>-- Select an option --</option>
                    <option value = 'personal'>Personal</option>
                    <option value = 'small'>Small</option>
                    <option value = 'medium'>Medium</option>
                    <option value = 'large'>Large</option>
                    </select>
                    <div>{errors.size}</div>

                </label><br />
                {/* TOPPINGS */}
                <h2>Toppings</h2>

                <label>Pepperoni
                    <input
                    type='checkbox'
                    name='pepperoni' 
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>

                <label>Veggies
                    <input
                    type='checkbox'
                    name='veggies' 
                    checked={values.veggies}
                    onChange={onChange}
                    />
                </label> <br />

                <label>Pineapple
                    <input
                    type='checkbox'
                    name='pineapple' 
                    checked={values.pineapple}
                    onChange={onChange}
                    />
                </label>

                <label>Sardines
                    <input
                    type='checkbox'
                    name='sardines' 
                    checked={values.sardines}
                    onChange={onChange}
                    />
                </label> <br /> <br />

                <label>Special requests:
                    <input
                        type='text'
                        name='request'
                        value={values.request}
                        onChange={onChange}
                        placeholder='Put your special requests here...' 
                    />
                </label><br />
                <button disabled={disabled}>Order Now!</button>
            </form>
            <p>Lost your appetite? Click here to go back home:</p>
            <button onClick = {backHome}>I don't want hot, delicious pizza</button>
        </div>
    )
}