import { Component } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    let username = e.target.username.value;
    let password = e.target.password.value;

    let body = {
      username: username,
      password: password
    }

    fetch('https://boiling-sands-27766.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(data => {
      console.log(data)
    })
  }

  render() {
    return <Grid container>
      <Grid item xs={12}>
        <h1>Login Page</h1>
      </Grid>
      <Grid item xs={8}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              name="username"
              id="username"
              label="Username"
              variant="outlined" />
          </div>
          <div>
            <TextField
              name="password"
              type="password"
              id="password"
              label="Password"
              variant="outlined" />
          </div>
          <div>
            <Button type="submit" variant="contained">Submit</Button>
          </div>
        </form>
      </Grid>
    </Grid>
  }
}

export default Login;