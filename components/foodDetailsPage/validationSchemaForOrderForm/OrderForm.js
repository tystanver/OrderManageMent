import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  First_name: Yup.string()
    .required('First Name is required'),
  Last_name: Yup.string()
    .required('Last Name is required'),
  Phone_number: Yup.string()
    .required('Phone Number is required'),
  // Email_address: Yup.string()
  //   .email('Invalid email address')
  //   .required('Email Address is required'),
  address: Yup.string()
    .required('Address is required'),
  note: Yup.string(),
});

export default validationSchema;
