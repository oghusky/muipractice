import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const GridTemp = ()=>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users",{
            method:"GET"
        })
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err));
    },[])
    return(
        <>
        {/* Typography
                variant values: h1-h6, subtitle1-subtitle2, body1-body2, button, caption, overline, ""
                display value: block, ""
                gutterBottom is a relative CSS marginBottom value
            */}
        <Typography variant='h2'>MUI Grid</Typography>
        {/* spacing prop handles  spacing between children*/}
            <Grid 
            container 
            spacing={3} //row and column spacing in on prop can also be done separately. shown below
            // columnSpacing={{xs: 1, sm: 2, md: 3}}
            // rowSpacing={{sm:1}}
            >
                {users.map(u =>(
                    <Grid item xs={4} key={u.id} justifyContent={"center"} alignItems={"center"}>
                        <Box style={{padding: "20px"}}>
                            <p><b>Username:</b> {u.username}</p>
                            <p><b>Name:</b> {u.name}</p>
                            <p><b>Email:</b> {u.email}</p>
                            <Button>Click Here</Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
export default GridTemp;
