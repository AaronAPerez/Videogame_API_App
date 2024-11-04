import { useToast, Container, Stack, Heading, Box, useColorModeValue, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, IconButton, Button, HStack, Divider, Icon, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FaEyeSlash, FaEye, FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

export const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();
    const {
      handleSubmit,
      register,
      formState: { errors, isSubmitting },
    } = useForm<SignupFormData>({
      resolver: zodResolver(signupSchema),
    });
  
    const onSubmit = async (data: SignupFormData) => {
      try {
        // Add your signup logic here
        console.log(data);
        toast({
          title: "Account created successfully",
          status: "success",
          duration: 3000,
        });
        navigate("/login");
      } catch (error) {
        toast({
          title: "Signup failed",
          description: "Please try again",
          status: "error",
          duration: 3000,
        });
      }
    };
  
    return (
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
          <Stack spacing="6" textAlign="center">
            <Heading size={{ base: "xl", md: "2xl" }}>Create an account</Heading>
            <Text color="muted">
              Already have an account? 
              <RouterLink to="/login">Log in</RouterLink>
            </Text>
          </Stack>
          <Box
            py={{ base: '0', sm: '8' }}
            px={{ base: '4', sm: '10' }}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={{ base: 'none', sm: 'md' }}
            borderRadius={{ base: 'none', sm: 'xl' }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing="6">
                <FormControl isInvalid={!!errors.username}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    {...register("username")}
                  />
                  <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
                </FormControl>
  
                <FormControl isInvalid={!!errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    {...register("email")}
                  />
                  <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
                </FormControl>
  
                <FormControl isInvalid={!!errors.password}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...register("password")}
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                </FormControl>
  
                <FormControl isInvalid={!!errors.confirmPassword}>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      {...register("confirmPassword")}
                    />
                    <InputRightElement>
                      <IconButton
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                        variant="ghost"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
                </FormControl>
  
                <Button
                  type="submit"
                  colorScheme="green"
                  size="lg"
                  fontSize="md"
                  isLoading={isSubmitting}
                >
                  Create account
                </Button>
  
                <HStack>
                  <Divider />
                  <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                    or continue with
                  </Text>
                  <Divider />
                </HStack>
  
                <HStack spacing="4" justify="center">
                  <IconButton
                    aria-label="Sign up with Google"
                    icon={<Icon as={FaGoogle} />}
                    variant="outline"
                  />
                  <IconButton
                    aria-label="Sign up with GitHub"
                    icon={<Icon as={FaGithub} />}
                    variant="outline"
                  />
                </HStack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    );