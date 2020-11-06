import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox } from '@material-ui/core'
import SaveIcon  from '@material-ui/icons/Save'
import DeleteIcon  from '@material-ui/icons/Delete'

function CheckboxExample() {
  const [state, setState] = useState(true)
  return (
    <div>
      <Checkbox 
        state={state}
        onChange={(e)=>setState(e.target.state)}
        inputProps = {{
          'area-label': 'secondary checkbox'
        }}
      />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className= "App-header">
      <CheckboxExample />
      <ButtonGroup variant='contained' color='primary'>
        <Button 
          size ='small' 
          variant ='contained' 
          
          startIcon = {<SaveIcon />}
         
          size = 'large'
        >

          Save

        </Button>
        <Button 
          size ='small' 
          variant ='contained' 
          
          startIcon = {<DeleteIcon />}
         
          size = 'large'
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
