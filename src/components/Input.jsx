import Textfield from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Inputs = ()=>{
    return(
        <>
            {/* Typography
                variant values: h1-h6, subtitle1-subtitle2, body1-body2, button, caption, overline, ""
                display value: block, ""
                gutterBottom is a relative CSS marginBottom value
            */}
            <Typography variant='h3'>Input Demo</Typography> 
            <Box component={"form"} 
            sx={{// sx is for system overrides including CSS
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}>
                <Textfield
                    //disabled
                    // required
                    label="Username"
                    type="text"
                    defaultValue="Default Value" // placeholder text
                    autoComplete="username"
                    InputProps={{
                        readOnly: false, 
                        shrink: true,
                    }}
                    helperText="Something important" // under input label text
                    variant="filled" // or "standard" background colors for inputs
                    />
            </Box>
        </>
    );
}
export default Inputs;