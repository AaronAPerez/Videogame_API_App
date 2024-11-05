import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast, Container, Stack, Heading, Box, FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, IconButton, Button, HStack, Divider, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signupSchema = loginSchema.extend({
  username: z.string().min(3, "Username must be at least 3 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Add your login logic here
      console.log(data);
      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials",
        status: "error",
        duration: 3000,
      });
    }
  };

  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6" textAlign="center">
          <Heading size={{ base: "xl", md: "2xl" }}>Log in to your account</Heading>
          <Text color="muted">
            Don't have an account? 
            <Link to="/signup">Sign up</Link>
          </Text>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing="6">
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

              <Button
                type="submit"
                colorScheme="green"
                size="lg"
                fontSize="md"
                isLoading={isSubmitting}
              >
                Sign in
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
                  aria-label="Sign in with Google"
                  icon={<Icon as={FaGoogle} />}
                  variant="outline"
                />
                <IconButton
                  aria-label="Sign in with GitHub"
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
};