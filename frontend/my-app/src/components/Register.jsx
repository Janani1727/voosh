import React from "react";
import {
  Flex,
  Box,
  FormControl,
  Input,
  Text,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const Register = () => {
  return (
    <Flex
      minH="90vh"
      align="center"
      justify="center"
      bg={useColorModeValue("gray.50", "gray.800")}
      p={4}
    >
      <Stack
        width={{ base: "90%", sm: "80%", md: "60%", lg: "40%", xl: "35%" }}
        
        spacing={6}
      >
        {/* Heading Section */}
        <Heading fontSize="3xl" color="#3770ec" textAlign="left">
          Signup
        </Heading>

        {/* Form Section */}
        <Box
          rounded="lg"
          bg={useColorModeValue("white", "gray.700")}
          boxShadow="lg"
          p={8}
          border="3px solid #3770ec"
        >
          <Stack spacing={4}>
            <FormControl id="first">
              <Input type="text" placeholder="First Name" />
            </FormControl>
            <FormControl id="last">
              <Input type="text" placeholder="Last Name" />
            </FormControl>
            <FormControl id="email">
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl id="password">
              <Input type="password" placeholder="Password" />
            </FormControl>
            <FormControl id="confirm-password">
              <Input type="password" placeholder="Confirm Password" />
            </FormControl>
            <Stack spacing={6}>
            <Button
                bg="#3770ec"
                color="white"
                _hover={{ bg: "blue.500" }}
              >
                Sign up
              </Button>
              <Flex
                direction={{ base: "column", sm: "row" }}
                margin={"auto"}
                // justify="space-between"
              >
                <Text>Already Have an Account?</Text>
                <Link color="#3770ec">Login</Link>
              </Flex>
              
              <Button
              width={"40%"}
              padding={"3px"}
              margin={"auto"}
                bg="#3770ec"
                color="white"
                _hover={{ bg: "blue.500" }}
              >
                Signup with Google
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
