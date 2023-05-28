import * as Yup from 'yup';
import { useFormik } from 'formik';

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
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      console.log(values);
      // fetchSignup(values);
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
