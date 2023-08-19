import { Box, Button, Input } from "@mui/material";
import Stack from "@mui/material/Stack";
import AddCardIcon from "@mui/icons-material/AddCard";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Tictket = () => {
  return (
    <>
      <Box 
      sx={{
        border:"1px solid",
        padding:"10px",
        width:"400px",
        boxShadow:"rgba(0, 0, 0, 0.05);"
      }}
      > 
        <h2>Ödəniş üçün</h2>

        <Stack flexDirection="row" gap="10px">
          <Stack>
            <Button
              variant="contained"
              sx={{
                gap: "10px",
              }}
              disabled
              style={{ width: "200px" }}
            >
              <AddCardIcon />
              Credit Card
            </Button>
          </Stack>
          <Button style={{ width: "200px" }} variant="contained">
            Contained
          </Button>
        </Stack>

        <p>Email Address</p>

        <input
          type="text"
          style={{
            borderRadius: "10%",
            border: "1px solid",
            padding: "11px",
            width: "300px",
            height: "21px",
          }}
        />
      <Checkbox></Checkbox>

      <p>Surname</p>
      <input
          type="text"
          style={{
            borderRadius: "10%",
            border: "1px solid",
            padding: "11px",
            width: "300px",
            height: "21px",
          }}
        />
      <Checkbox></Checkbox>

      <p>Address*</p>
      <input
          type="text"
          style={{
            borderRadius: "10%",
            border: "1px solid",
            padding: "11px",
            width: "300px",
            height: "21px",
          }}
        />

        <Stack flexDirection="row" gap="10px">


<Box>
    <p>City/State*</p>
    <input
          type="text"
          style={{
            borderRadius: "10%",
            border: "1px solid",
            padding: "11px",
            width: "100px",
            height: "21px",
          }}
        />
</Box>


<Box>
    <p>Potal Code*</p>
    <input
          type="text"
          style={{
            borderRadius: "10%",
            border: "1px solid",
            padding: "11px",
            width: "100px",
            height: "21px",
          }}
        />
</Box>


<Box>
    <p>Country*</p>
    <input
          type="text"
          style={{
            borderRadius: "10%",
            border: "1px solid",
            padding: "11px",
            width: "100px",
            height: "21px",
          }}
        />

        <ArrowDropDownIcon></ArrowDropDownIcon>

</Box>
        </Stack>






<Stack flexDirection="row" gap="10px">
<Checkbox></Checkbox>
<p>I agree to the Term and conditions and Privacy Policy</p>
</Stack>

<Stack flexDirection="row" gap="10px">
<Checkbox></Checkbox>
<p>I want to receive event recommendations via email</p>
</Stack>

<Button style={
    {
        width:"400px"
    }
} variant="contained">Contained</Button>



      </Box>
    </>
  );
};

export default Tictket;
