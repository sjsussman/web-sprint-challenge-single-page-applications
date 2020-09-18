import React, { useState, useEffect } from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios';
import schema from './validation/schema'
import * as yup from 'yup'


import PizzaForm from './PizzaForm'
import PizzaOrder from './PizzaOrder'
import Home from './Home'

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  veggies: false,
  pineapple: false,
  sardines: false,
  request: '',
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialDisabled = true


export default function App(){
    const [order, setOrder] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)


const postNewOrder = newOrder =>{
  axios.post('https://reqres.in/api/use', newOrder)
  .then(res => {
    setOrder([...order, newOrder])
    setFormValues(initialFormValues)
    console.log(newOrder)
  })
  .catch(err =>{
    alert("There was an error submitting your order. Please reload the page and try again")
    console.log(err)
  })
}

const validate = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]:''
    })
  })
  .catch(err => {
    debugger
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    })
  })
}

const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () =>{
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings:['pepperoni', 'veggies', 'pineapple', 'sardines'].filter(top => formValues[top]),
    request: formValues.request.trim(),
  }
  postNewOrder(newOrder)
}

useEffect(() =>{
  schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formValues])

  return (
    <div>
    <Switch>
      <Route path ='/pizza'>
        <PizzaForm
          values = {formValues}
          change = {inputChange}
          submit = {formSubmit}
          disabled = {disabled}
          errors = {formErrors}
         />
      </Route>

      <Route path='/'>
        <Home />
      </Route>
    </Switch>

      {
        order.map(index => {
          return(
            <PizzaOrder key={index.name} details={index} />
          )
        })
      }
    </div>
  );
};



