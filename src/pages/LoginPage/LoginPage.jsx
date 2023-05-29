import * as Yup from 'yup';
import { useFormik } from 'formik';

import { useGlobal } from '../../GlobalContext';
import { fetchLogin } from '../../helpers/fetchAPI';

import { AuthLayout } from 'components/AuthLayout/AuthLayout';
import { Button } from '../../components/Button/Button';
import {
  FormContainer,
  LabelThumb,
  Label,
  Input,
  InputErrorMessage,
} from './LoginPage.styled';

const LoginPage = () => {
  const { logIn } = useGlobal();

  const LoginSchema = Yup.object().shape({
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
  });

  const formik = useFormik({
    initialValues: {
      email: 'abba@baab.com',
      password: 'qwe12345',
    },
    validationSchema: LoginSchema,
    onSubmit: async values => {
      const { _id, name, email, phone, address, refresh_token } =
        await fetchLogin(values);
      logIn(_id, name, email, phone, address, refresh_token);
    },
  });
  return (
    <AuthLayout layout="login">
      <FormContainer onSubmit={formik.handleSubmit}>
        <LabelThumb>
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
        </LabelThumb>
        <Button type="submit">Submit</Button>
      </FormContainer>
    </AuthLayout>
  );
};

export default LoginPage;
