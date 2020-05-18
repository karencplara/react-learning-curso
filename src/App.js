import React, {Component} from 'react';
import './App.css';
import Title from './Title';
import Square from './square';
import Button from './button';

class App extends Component {
 
  render() {
    return (
      <div className="container">
        {['blue', 'red', 'blue'].map((square, index) => (  //usar index para evitar problemas com a key, quando usar a mesma palavra.
            <Square key={index} color={square}/>
        ))}

        <div className='container' onClick={(e) => {
          alert('clicou')
        }}>
          <Square/>
        </div>

        <Button>Texto Children</Button>
        
        <Title name='Karen' age={23} />  
        <label htmlFor='input'>Input</label>
        <input type='text' id='input' />
       </div>
    );
  }
}

export default App;