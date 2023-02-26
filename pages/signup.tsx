import useSignUp from "../customHooks/useSignUp"
import { Box, Center, Text, Button, Input } from "@chakra-ui/react";


export default function SignUp() {
  const {
    userName,
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setUserName,
    setPassword,
    onSubmitHandler, login } = useSignUp();

  return (
    <div>
      <Center>
        <Box mt='100px' border={'2px solid'} borderColor='purple' p='20' borderRadius='20px' bg='whiteSmoke'>


          <Text fontSize={'4xl'} color='purple' fontWeight={'extrabold'}>SignUp Form</Text>
          <br />

          <Input size={'lg'} value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter your name" />
          <br />
          <br />
          <Input size={'lg'} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />
          <br />
          <br />
          <Input size={'lg'} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" />
          <br />
          <br />
          {loader ? <button >Loading...</button> :
            // <button onClick={onSubmitHandler} >SignUp</button>
            <Button mr='20px' bg='purple' color='white' onClick={onSubmitHandler} >SignUp</Button>}


          {/* <button onClick={login}>Login</button> */}
          <Button bg='purple' color='white' onClick={onSubmitHandler} >Login</Button>

        </Box>
      </Center>
    </div>
  )
}