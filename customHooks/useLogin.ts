import { useState } from "react"
import { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "../config/firebase"
import { toast } from "react-toastify";
import { useRouter  } from "next/router";
import { useForm } from "react-hook-form";
export default function useLogin() {
const { register, handleSubmit, formState: { errors } } = useForm();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState(false)
  const router = useRouter();
const onSubmit=()=>{
  console.log('function chala');
  
}
const onSubmitHandler = async () => {
  
  try {
    setLoader(true)
    await signInWithEmailAndPassword(auth, email, password)
    // await createUserWithEmailAndPassword(auth, email, password)
    router.push('/AddEvent')
    
    toast.success('Successfully login!');
    } catch (e) {
      toast.error('Wrong Email or Passoword');
      console.log('====================================');
      console.log(e);
      console.log('====================================');
    }

    finally {
      setLoader(false)
    }
  }

  return {
    email,
    password,
    loader,
    setLoader,
    setEmail,
    setPassword,
    onSubmitHandler,
    onSubmit, register, handleSubmit, formState: { errors }
  }
}
