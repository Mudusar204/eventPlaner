import useLogin from "../customHooks/useLogin";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Box, Center ,Text,Button ,Input} from "@chakra-ui/react";
// import styles from '../styles/Home.module.css'
export default function Login() {
    const { 
      email,
      password,
      loader,
      setLoader,
      setEmail,
      setPassword,
      onSubmitHandler , 
      onSubmit,
      register, handleSubmit, formState: { errors }} = useLogin();
  
    return (
      <div>
        <Center>
          <Box mt='100px' border={'2px solid'} borderColor='purple' p='20' borderRadius='20px' bg='whiteSmoke'>

        <Text fontSize={'4xl'} color='purple' fontWeight={'extrabold'}>Login Form</Text>
        <br />
        <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <br />
        <br />
        <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
        <br />
        <br />
        {loader ? <button >Loading...</button> :
      <Button bg='purple' color='white' onClick={onSubmitHandler} >Login</Button>}
       <Button bg='purple' ml='10px' color='white' ><Link href={'/signup'}>SIGN UP</Link></Button>
      </Box>
      </Center>
      </div>
    )
  }
