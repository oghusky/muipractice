import Textfield from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Inputs = ()=>{
    return(
        <>
                <Typography variant='h3'>Input Demo</Typography>
            <Box component={"form"} 
            sx={{// does sx mean style?
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}>
                <Textfield
                    //disabled
                    // required
                    label="Username"
                    type="text"
                    defaultValue="Default Value"
                    autoComplete="username"
                    InputProps={{
                        readOnly: false,
                        shrink: true,
                    }}
                    helperText="Something important"
                    variant="filled" // or "standard"
                    />
            </Box>
        </>
    );
}
export default Inputs;