import * as yup from 'yup'

export default yup.object().shape({
  name: yup.string()
    .required('name is required')
    .min(2, 'Name must be 2 chars or longer'),
    size: yup.string()
    .oneOf(['personal', 'small', 'medium', 'large'], 'Please select a pizza size'),

    //not required
    request: yup.string(),
    pepperoni: yup.boolean(),
    veggies: yup.boolean(),
    sardines: yup.boolean(),
    pineapple: yup.boolean(),

})