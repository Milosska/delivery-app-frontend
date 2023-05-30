import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useGlobal } from '../../GlobalContext';
import { fetchAddOrder } from '../../helpers/fetchAPI';
import {
  FormContainer,
  FormTitle,
  LabelThumb,
  Label,
  Input,
  MakeOrderBtn,
  InputErrorMessage,
} from './OrderForm.styled';

export const OrderForm = ({ total, currentOrder, setCurrentOrder }) => {
  const { phone: userPhone, address: userAddress } = useGlobal();

  const RegisterSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
        message: 'Invalid phone',
        excludeEmptyString: true,
      })
      .required('Required'),
    address: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      phone: userPhone,
      address: userAddress,
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, { resetForm }) => {
      const correctedProductData = currentOrder.map(
        ({ product_data, quantity }) => ({
          product_data: [
            {
              product_id: product_data[0].product_id,
              name: product_data[0].name,
              img: product_data[0].img,
            },
          ],
          quantity,
        })
      );

      const formedOrder = {
        products: [...correctedProductData],
        delivery_data: values,
        total_price: total,
      };
      fetchAddOrder(formedOrder);
      setCurrentOrder([]);
      resetForm({ phone: '', address: '' });
    },
  });

  // [{ product_data: [{product_id: '', name: '', img: '', price: ''}], quantity: 1 }];
  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <FormTitle>Set my delivery data</FormTitle>
      <LabelThumb>
        <Label>
          Phone number
          <Input
            type="tel"
            name="phone"
            placeholder="+380112223344"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.errors['phone']}
          />
          {formik.touched['phone'] && (
            <InputErrorMessage>{formik.errors['phone']}</InputErrorMessage>
          )}
        </Label>
        <Label>
          Address
          <Input
            type="text"
            name="address"
            placeholder="Kyiv, Volodymyrska str.1"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.errors['address']}
          />
          {formik.touched['address'] && (
            <InputErrorMessage>{formik.errors['address']}</InputErrorMessage>
          )}
        </Label>
      </LabelThumb>
      <MakeOrderBtn type="submit">Make my order</MakeOrderBtn>
    </FormContainer>
  );
};
