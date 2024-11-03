import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from '@chakra-ui/react';

// import { useLocalStorage } from '../hooks/UselocalStorage';
// import { getLoggedInUser, login } from '../services/DataService';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

// // Zod schema for form validation
// const schema = z.object({
//   username: z.string().min(2, 'Username is required'),
//   password: z
//     .string()
//     .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
//       message:
//         'Password must be at least 8 characters, include at least one uppercase letter, one lowercase letter, one number, and one special character',
//     }),
// });

// type FormData = z.infer<typeof schema>;

// interface LoginProps {
//   onLogin: (userInfo: any) => void;
// }

const Login = () => {
// const Login = ({ onLogin }: LoginProps) => {
  // const { setItem: setUserLocalStorage } = useLocalStorage('user');
  // const navigate = useNavigate();
  // const [passwordVisible, setPasswordVisible] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<FormData>({ resolver: zodResolver(schema) });

  // const onSubmit = async (data: FormData) => {
  //   try {
  //     const token = await login(data);
  //     if (token.token !== null) {
  //       localStorage.setItem('Token', token.token);
  //       const userInfo = await getLoggedInUser(data.username);
  //       setUserLocalStorage(userInfo);
  //       onLogin(userInfo);
  //       navigate('/Dashboard');
  //     } else {
  //       console.error('Login failed. Please check your credentials.');
  //     }
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     console.error('An error occurred during login. Please try again.');
  //   }
  

  return (
    <Container maxW="lg" py={{ base: 10, md: 20 }}>
      <Card className="LoginCard">
        <CardHeader className="text-center h5">Login</CardHeader>
        <CardBody>
          <form >
            <FormControl >
              <FormLabel>Username</FormLabel>
              <Input type="text" />
             
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                 
                />
                <InputRightElement>
                  <Button
                    variant="link"
                  
                  >
                 
                  </Button>
                </InputRightElement>
              </InputGroup>
            
            </FormControl>
            <VStack spacing={4} mt={4}>
              <Button variant="outline-success" type="submit">
                Login
              </Button>
              <Button
                variant="outline-primary"
             
              >
                Create Account
              </Button>
            </VStack>
          </form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
