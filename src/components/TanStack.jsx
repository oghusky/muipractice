import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Posts = [
    {id:1, title: "Post 1"},
    {id:2, title: "Post 2"},
]

const TanStackEx = ()=>{
    const queryClient = useQueryClient();
    // grabs current posts
    const postQuery = useQuery({
        queryKey:["posts"], // always takes an array, querykey to identify qeury
        queryFn:()=> wait(1000).then(()=> [...Posts]) // takes async function
    })
    // creates new post
    const newPostMutation = useMutation({
        mutationFn: title => wait(50).then(()=> Posts.push({id:crypto.randomUUID(),title:`New title ${crypto.randomUUID()}`})),// takes function,  also with out the wait the function takes forever to trigger
        onSuccess:(data, variables, context)=>{
            queryClient.setQueryData(["posts", data.id], data) // sets data instanteously
            queryClient.invalidateQueries(["posts"])// says what to do if action is successful.
            console.log({data,variables,context})
        },
        onMutate: (variables)=>{ // triggers before mutationFN and sets context
            return {hi:"Hello"}
        },
        retry: 1, // mutation on tries once unless this property is given a numeric value
    })

    if(postQuery.isLoading) return <h1>...Loading</h1>
    if(postQuery.error) return <code>{JSON.stringify(postQuery.error)}</code>
    if (postQuery.isFetched) return(
        <>
        <Typography variant='h3'>React Query Demo</Typography>
        <Grid container spacing={3}>
                {postQuery.data.map( item => 
                (<Grid item sm={6} key={item.id}>
                    <Box>
                    <h3>ID: {item.id}</h3>
                    <p>Title: {item.title}</p>
                    </Box>
                    </Grid>)
                    )}
        </Grid>
        <Button onClick={() => newPostMutation.mutate()}>New Post</Button>
        </>
    )
}
function wait(duration){
    return new Promise(resolve => setTimeout(resolve, duration));
}
export default TanStackEx;