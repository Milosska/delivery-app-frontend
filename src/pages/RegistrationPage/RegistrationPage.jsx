import * as Yup from 'yup';
import { useFormik } from 'formik';

import { fetchSignup } from '../../helpers/fetchAPI';

import { AuthLayout } from 'components/AuthLayout/AuthLayout';
import { Button } from '../../components/Button/Button';
import {
  FormContainer,
  LabelThumb,
  Label,
  Input,
  InputErrorMessage,
} from './RegistrationPage.styled';

const RegistrationPage = () => {
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/, {
        message: 'Invalid name',
        excludeEmptyString: true,
      })
      .required('Required'),
    email: Yup.string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, {
        message: 'Invalid email',
        excludeEmptyString: true,
      })
      .required('Required'),
    password: Yup.string()
      .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
        message:
          'Password should contain minimum eight characters, at least one letter and one number',
        excludeEmptyString: true,
      })
      .required('Required'),
    phone: Yup.string()
      .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
        message: 'Invalid phone',
        excludeEmptyString: true,
      })
      .required('Required'),
    address: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: (values, { resetForm }) => {
      fetchSignup(values);
      resetForm({ name: '', email: '', password: '', phone: '', address: '' });
    },
  });

  return (
    <AuthLayout layout="register">
      <FormContainer onSubmit={formik.handleSubmit}>
        <LabelThumb>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              placeholder="John Dou"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors['name']}
            />
            {formik.touched['name'] && (
              <InputErrorMessage>{formik.errors['name']}</InputErrorMessage>
            )}
          </Label>
          <Label>
            Email
            <Input
              type="email"
              name="email"
              placeholder="johndou@mail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.errors['email']}
            />
            {formik.touched['email'] && (
              <InputErrorMessage>{formik.errors['email']}</InputErrorMessage>
            )}
          </Label>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              placeholder="Enter your password here"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.errors['password']}
            />
            {formik.touched['password'] && (
              <InputErrorMessage>{formik.errors['password']}</InputErrorMessage>
            )}
          </Label>
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
        <Button type="submit">Submit</Button>
      </FormContainer>
    </AuthLayout>
  );
};

export default RegistrationPage;
