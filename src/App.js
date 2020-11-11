import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import SaveIcon  from '@material-ui/icons/Save'
import DeleteIcon  from '@material-ui/icons/Delete'

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
    <div className="App">
      <header className= "App-header">
      <TextField 
        variant='filled'
      />
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
  );
}

export default App;
