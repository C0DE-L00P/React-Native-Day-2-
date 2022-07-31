import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

import { withFormik,Formik} from 'formik';
import * as Yup from 'yup';
import { Snackbar } from 'react-native-paper';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

export default function ContactUsPage() {
  //snack bar state
  
  const [visible, setVisible] = React.useState(false);

  return (
    <View style={{flex: 1, padding: 16}}>
      <Formik
        enableReinitialize
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2,'Name can\'t be less than 2 chars').required('Required'),
          email: Yup.string().matches(/^\w+@\w+.com$/,'Email is not in the right format').required('Required'),
          message: Yup.string().required('Message Can\'t be empty'),
        })}
        onSubmit={async (values, actions) => {
          console.log({
            name: values.name,
            email: values.email,
            message: values.message,
          });
          actions.resetForm({
            values: {
              name: '',
              email: '',
              message: '',
            },
          });
        }}>
        {(props) => (
          <View style={{flex: 1}}>
            <TextInput
              value={props.values.name}
              onChangeText={props.handleChange('name')}
              placeholder="Name"
              style={{
                backgroundColor: '#fff',
                elevation: 16,
                shadowColor: 'black',
                textAlign: 'center',
                minHeight: 40,
                borderWidth: 1,
                borderRadius: 8,
                outlineColor: 'grey',
                marginBottom: 8,
                borderColor:
                  props.touched.name && props.errors.name ? 'red' : '#ccd6df',
              }}
            />
            <TextInput
              value={props.values.email}
              onChangeText={props.handleChange('email')}
              placeholder="Email"
              style={{
                backgroundColor: '#fff',
                elevation: 16,
                shadowColor: 'black',
                textAlign: 'center',
                minHeight: 40,
                borderWidth: 1,
                borderRadius: 8,
                outlineColor: 'grey',
                marginBottom: 8,
                borderColor:
                  props.touched.email && props.errors.email ? 'red' : '#ccd6df',
              }}
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              value={props.values.message}
              onChangeText={props.handleChange('message')}
              placeholder="How could we help?"
              style={{
                backgroundColor: '#fff',
                elevation: 16,
                shadowColor: 'black',
                textAlign: 'center',
                minHeight: 40,
                borderWidth: 1,
                borderRadius: 8,
                outlineColor: 'grey',
                marginBottom: 8,
                borderColor:
                  props.touched.message && props.errors.message
                    ? 'red'
                    : '#ccd6df',
              }}
            />
            <Button
              color={'#fb5244'}
              onPress={()=> {setVisible(true);props.handleSubmit()}}
              title={'Submit'}
              style={{ marginTop: 32, transitionDuration: '.4s' }}
            />

      <Snackbar
        visible={props.touched && (props.errors.message || props.errors.email || props.errors.name) && visible}
        onDismiss={setVisible.bind(this,false)}
        color='red'
        action={{
          label: 'Close',
          onPress: () => {
            setVisible(false)
          },
        }}>
        {props.touched.name && props.errors.name? 'Name is less than 2 chars / ':''} 
        {props.touched.email && props.errors.email? 'Email is not in the right format .com / ':''}
        {props.touched.message && props.errors.message? 'Message is empty ':''}      
      </Snackbar>

          </View>

        )}
      </Formik>
    </View>
  );
}
