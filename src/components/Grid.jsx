import React, {useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
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
        <h2>MUI Grid</h2>
            <Grid container spacing={3}>
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
