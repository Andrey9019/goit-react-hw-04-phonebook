import { Formik } from 'formik';
 import * as Yup from 'yup';
import { ButtonForm, FormContainer,PhoneForm,StyledField ,FormErrorMes} from './Phonebook.style';
import { Label  } from 'components/Filter/Filter.style';

 const phonebookSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Name is required'),
     number: Yup.string()
       .matches(
  '[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}',
         'Enter valid symbols format xxx-xxx-xx-xx'
      )
     .required('Number is required'),
 });

export const Phonebook = ({onAdd}) => (
  <FormContainer>
    <h1>Phonebook</h1>
    <Formik
      initialValues={{
        firstName: '',
        number: '',
            }}

            validationSchema={phonebookSchema}
            
      onSubmit={ (values, action) => {
        // new Promise((r) => setTimeout(r, 500));
        //   alert(JSON.stringify(values, null, 2));
          console.log(values);
          onAdd(values)
          action.resetForm()
      }}>
      <PhoneForm>
        <Label >Name
                <StyledField name="firstName" />
                <FormErrorMes component="p" name="firstName" />
        </Label>
                
        <Label >Number
                <StyledField  type="tel" name="number" />
                <FormErrorMes component="p" name="number" />
        </Label>
        
        <ButtonForm  type="submit">Add Coontact</ButtonForm>
      </PhoneForm>
    </Formik>
  </FormContainer>
);