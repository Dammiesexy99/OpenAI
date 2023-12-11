import React from 'react'
import {IoIosLogIn} from 'react-icons/io'
import { Box , Typography,Button} from '@mui/material'
import Customizedinput from '../component/shared/Customizedinput';
import {toast} from 'react-hot-toast'
import { useAuth } from '../contex/AuthContex';



const Login = () => {
  const auth = useAuth()
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email  = formData.get("email") as string;
    const password  = formData.get("password") as string;
    try {
      toast.loading("signing In",{id: "Login"});
      await auth?.login(email,password);
      toast.success("signed In successfully",{id: "Login"});
    } catch (error) {
      console.log(error);
      toast.error("signing in failed",{id: "Login"});
    }
  
  };
  return (
    <Box width={'100%'} height={'100%'} display="flex" flex={1}>
      <Box padding={8} mt={8} display={{md:"flex",sm:"none",xs:"none"}}>
        <img src="Ai-robot.jpg" alt="image" style={{width:"300px"}} />
       </Box>
      <Box display={'flex'}
       flex={{xs:1, md:0.5}} 
       justifyContent={'center'}
        alignItems={"center"}
         padding={2}
          ml={'auto'}
           mt={16}
           >
            <form
            onSubmit={(handlesubmit)}
             style={{
              margin:'auto',
               padding:'30px',
                boxShadow:"10px 10px 20px #000",
                 borderRadius:'10px',
                  border:"none",
                  }}
                  >
                    <Box sx={{
                      display:'flex',
                      flexDirection:"column",
                       justifyContent:"center",
                       }}
                       >
                        <Typography variant='h4' textAlign="center" padding={2} fontWeight={600}>Login</Typography>
                        <Customizedinput type='email' name='email' label='Email'/>
                        <Customizedinput type='password' name='password' label='Password'/>
                        <Button type='submit' sx={{
                          px:2,
                          py:1,
                          width:"400px",
                          borderRadius:2,
                          bgcolor:"blue",
                          ":hover":{
                            bgcolor:"white",
                            color:"black",
                          },
                          }}
                          endIcon={<IoIosLogIn />}
                          >Login</Button>
                       </Box>
                  </form>
         </Box>
      </Box>
  );
};

export default Login