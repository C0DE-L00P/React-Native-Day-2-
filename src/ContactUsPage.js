import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

export default function ContactUsPage() {
  return (
    <View>
      <Formik
        enableReinitialize
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string().required("Required"),
          message: Yup.string().required("Required"),
        })}
        onSubmit={async (values, actions) => {
          handleSubmit({
            name: values.name,
            email: values.email,
            message: values.message,
          });
          actions.resetForm({
            values: {
              name: "",
              email: "",
              message: "",
            },
          });
        }}
      >
        {(props) => (
          <View>
            <TextInput
              value={props.values.name}
              onChangeText={props.handleChange("name")}
              placeholder="Name"
              style={{
                ...inputStyle,
                borderColor:
                  props.touched.name && props.errors.name ? "red" : "#ccd6df",
              }}
            />
            <TextInput
              value={props.values.email}
              onChangeText={props.handleChange("email")}
              placeholder="Email"
              style={{
                ...inputStyle,
                borderColor:
                  props.touched.email && props.errors.email ? "red" : "#ccd6df",
              }}
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              value={props.values.message}
              onChangeText={props.handleChange("message")}
              placeholder="How could we help?"
              style={{
                ...inputStyle,
                borderColor:
                  props.touched.message && props.errors.message ? "red" : "#ccd6df",
              }}
            />
            <Button
              color={"blue"}
              onPress={props.handleSubmit}
              title={"Submit"}
              style={{ marginTop: 16, transitionDuration: ".4s" }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#fff",
    elevation: 16,
    shadowColor: "black",
    textAlign: "center",
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 8,
    outlineColor: "grey",
    marginBottom: 8,
  },
});
