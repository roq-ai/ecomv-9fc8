import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  product_id: yup.string().nullable(),
});
