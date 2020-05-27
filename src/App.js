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
       time : 0, 
       value: 'Valor inicial',
       checked: false
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
          {/* Formulário */}
         <div>
           <form>
               {/* defaultValue coloca um valor inicial e deixa alterar sem precisar o state */}
              <input  type='text' value={this.state.value} onChange={(e) => {
                  this.setState({
                      value: e.target.value
                  })
              }} />
             <label>
               <input 
                  type="checkbox" 
                  value='my-checkbox' 
                  checked={this.state.checked}
                  onChange={(e) => this.setState({
                    checked: !this.state.checked
                  })}
                  />
                Checkbox
             </label>
             <input type='radio' name='rd' value='1' defaultChecked/> Radio 1
             <input type='radio' name='rd' value='2'/> Radio 2
            </form>
         </div>

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

        <Button handleClick={() => console.log('clicou')}>Clique em mim</Button>

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