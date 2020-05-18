import React from 'react';

const Title = ({name, lastname}) => (
   <h1>Olá {`${name} ${lastname}`}</h1>     
);

// class Title extends React.Component {
//     constructor(props) {
//       super(props);
//     }

 
//     // render() {
//     //   return (
//     //     <div className="container">Olá meu nome é {this.props.name + ' ' + this.props.lastname} , tenho {this.props.age}</div>
//     //   );
//     // }
// }


//tratar caso não for informado o name lá no <Title>
  
Title.defaultProps = {
    name: 'Desconhecido', 
    lastname: 'Sem sobrenome'
};
  
  export default Title;