import {useState} from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return [values, onChange];
};

export default useForm;
