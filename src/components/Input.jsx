import Textfield from '@mui/material/TextField';
import Box from '@mui/material/Box';
const Inputs = ()=>{
    return(
        <Box>
            <Textfield
                //disabled
                // required
                label="Username"
                type="text"
                defaultValue="Default Value"
                autoComplete="username"
                InputProps={{
                    readOnly: true,
                    shrink: true,
                }}
                helperText="Something important"
                variant="filled" // or "standard"
            />
        </Box>
    );
}
export default Inputs;