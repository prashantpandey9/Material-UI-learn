import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, Container } from '@material-ui/core'
import SaveIcon  from '@material-ui/icons/Save'
import DeleteIcon  from '@material-ui/icons/Delete'
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange } from '@material-ui/core/colors'
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE688B, #FF8E53)',
    border: 0,
    marginBottom: 13, 
    borderRadius: 15, 
    color: 'white',
    padding: '5px 30px',
  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 50,
    }
  },
  palette: {
    secondary: {
      main: orange[400]
    },
    primary: {
      main: '#19857b'
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.root}>This is my Button</Button>
    </div>
  )
}


function CheckboxExample() {
  const [state, setState] = useState(true)
  return (
    <FormControlLabel 
      control={
        <Checkbox 
        state={state}
        icon={<SaveIcon />}
        checkedIcon={<SaveIcon />}
        onChange={(e)=>setState(e.target.state)}
        inputProps = {{
          'area-label': 'secondary checkbox'
        }}
      />
      }
      label='Testing'
    />
      
    
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xs'>
        <div className="App">
          <header className= "App-header">
            <Typography variant='h2'>
            Heading 2
            </Typography>
            <Typography variant='subtitle1'>
              Subtitle1
            </Typography>
            <Typography variant='body1'>
              Body 1
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item>
                <Paper style={{height: 75, width: 50,}} />
              </Grid>
              <Grid item>
                <Paper style={{height: 75, width: 50,}} />
              </Grid>
              <Grid item>
                <Paper style={{height: 75, width: 50,}} />
              </Grid>
              
            </Grid>
            {/* <TextField 
              variant='outlined'
              color='secondary'
              type='email'
              label='The Time'
              placeholder='email.com'
            /> */}
            <CheckboxExample />
            <ButtonGroup variant='contained' color='primary'>
              <Button 
                variant ='contained' 
                
                startIcon = {<SaveIcon />}
              
                size = 'large'
              >

                Save

              </Button>
              <Button 
                size ='large' 
                variant ='contained' 
                startIcon = {<DeleteIcon />}
              >

                Discard 

              </Button>
            </ButtonGroup >
              <img src={logo} className="App-logo" alt="logo" />
            
          </header>
        </div>
      </Container>
    </ThemeProvider> 
  );
}

export default App;
