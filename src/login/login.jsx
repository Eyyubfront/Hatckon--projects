import { Stack,Box } from "@mui/material"
import img6 from "../img/Interior-Design-BKSK-Architects-Center-for-Fiction-bookstore-wall.jpg"
import { blue } from "@mui/material/colors"
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
const Login=()=>{
return(
<>


<Stack flexDirection="row" justifyContent="center " >

    <Box     
  
     >



<img style={{
    width:"500px",
    height:"600px"
}} src={img6} alt="" />
    </Box>


    <Box 
    style={{
   
        border: "1px solid",
        padding: "16px",
        width: "335px",
        height: "563px",
      }}
    >

        <h2>Sign In </h2>

<Stack flexDirection="row" gap="10px">
    <p>New user?</p>
    <p style={{
        color:"blue"
    }}>Create an acount </p>
</Stack>
<p>Email Address</p>

<input    style={{
            borderRadius: "10%",
            border: "1px solid",
            padding: "11px",
            width: "300px",
            height: "21px",
          }} type="text" />

<p>Password</p>
<input    style={{
            borderRadius: "10%",
            border: "1px solid",
            padding: "11px",
            width: "300px",
            height: "21px",
          }} type="text" />

<Stack flexDirection="row" gap="40px">

<Stack flexDirection="row" gap="10px">
<Checkbox/>
<p>Remember me?</p>
</Stack>

<p>Forgot password?</p>
</Stack>

<Button style={{
    width:"300px"
}} variant="contained">Contained</Button>


<p  style={{
    textAlign:
    "center"
}}>or</p>


<Button style={{
    border:"1px solid",
    textDecoration:"none"
}}><a  sx={
    {
        textDecoration:"none"
    }
} href="https://www.google.com/"> <GoogleIcon/> Sign in with Google</a></Button>

    </Box>






</Stack>




</>

)


}

export default Login