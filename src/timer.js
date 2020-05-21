import React, {Component} from 'react';

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            time: 0
        }
    }
    componentWillReceiveProps (nextProps) {  //só quando recebe novas propriedades
        console.log('componentWillReceiveProps timer', this.props, nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {  //toda vez que atualiza algo sem renderizar
        console.log('shouldComponentUpdate timer', this.state, nextState);
        return this.props.time !== nextProps.time;
       //se retornar false, não atualiza no dom.
    }
    componentWillUpdate(nextProps,nextState) {  //quando ele for novamente renderizado.Ultimo ponto antes da renderização
      console.log('componentWillUpdate timer', this.props, nextProps);
    }
    componentDidUpdate (prevProps, prevState) {
      console.log('componentDidUpdate', this.props, prevProps);
    }
    componentDidMount () {   // executa apenas uma unica vez
      this.timer = setInterval(() => {
           this.setState({
               time : this.state.time + 1
           })
       }, 1000)
    }
    componentWillUnmount () {  //destroi o que foi criado
       clearInterval(this.timer)  // parar o timer.
    }
    render() {
        return <div>Timer: {this.state.time}</div>
    }
}

export default Timer
