import React from "react";
import { Form, Formik } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";
import { useMutation } from "urql";

interface registerProps {}

const REGISTER_MUT = `mutation Register($username: String!, $password: String!){
  register(options: { username: $username, password: $password}){
    errors{
      field
      message
    }
    user{
      id
      username
    }
  }
}`

const Register: React.FC<registerProps> = ({}) => {
  const [, register] = useMutation(REGISTER_MUT)
  return (
    <Wrapper variant={"small"}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => register(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              label="Username"
              placeholder="username"
            />
            <Box mt={4}>
              <InputField
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
              />
            </Box>
            <Button
              isLoading={isSubmitting}
              mt={4}
              type="submit"
              colorScheme="teal"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
