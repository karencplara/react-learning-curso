import React, {Component} from 'react';
import './App.css';
import Title from './Title';
import Square from './square';
import Button from './button';
import LikeButton from './like-button';
import SearchButton from './search-button';
import Timer from './timer';

class App extends Component {
  constructor() {
     super()
     this.state = {
       color: 'green', 
       showTimer: true, 
       time : 0
     }
  }
  componentWillMount(){  //lado servidor
    console.log('componentWillMount app');
  }
  componentDidMount(){ //manipulação de dom - lado front-end
    console.log('componentDidMount app');
  }

  render() {
    return (
      <div className="container">
         <Timer time={this.state.time}/>}
         <button onClick={() => {
           this.setState({ time: this.state.time + 10})
         }}>Change props</button>

        {['blue', 'red', 'blue'].map((square, index) => (  //usar index para evitar problemas com a key, quando usar a mesma palavra.
            <Square key={index} color={square}/>
        ))}

        <div className='container' onClick={(e) => {
          alert('clicou')
        }}>
          <Square/>
        </div>
        <Square color={this.state.color} />
        {['red', 'blue', 'green'].map((color) => ( 
          <Button 
            key={color} 
            handleClick={() => this.setState({color})}>
            {color}
          </Button>
        ))}
      
        <LikeButton />
        <SearchButton />

        <div onClick={() => this.setState({
           text: 'Outro texto'
        })}>
          {this.state.text}
        </div>
        
        <Title name='Karen' age={23} />  
        <label htmlFor='input'>Input</label>
        <input type='text' id='input' />
       </div>
    );
  }
}

export default App;