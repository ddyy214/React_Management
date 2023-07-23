import './App.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function App() {

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
           marginTop: 8,
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
        }}
        >
       <Avatar sx={{ m: 2, bgcolor: "gray.main"}}>
        <LockOutlinedIcon />
        </Avatar>
       <Typography component="h1" variant="h5">
            Sign in
          </Typography>
      <TextField margin="normal" label="Email Address" required fullWidth name="email" autoComplete="email"/>
      <TextField label="Password" type="password" required fullWidth name="password" />
      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>
      <Button type="submit" fullWidth variant="contained" sx={{mt:3, mb:2 }}>Sign in</Button>
      <Grid container>
        <Grid item xs>
           <Link>Forgot Password?</Link>
        </Grid>
        <Grid item>
           <Link>Sign up</Link>
        </Grid>
     </Grid>
    </Box>
    </Container>
  )
}