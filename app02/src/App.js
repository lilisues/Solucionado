import React, { Component } from 'react';



// PROPS POR DEFECTO

// class Title extends Component {
//   render(){
//     return <h1>{this.props.text}</h1>
//   }
// }

// Title.defaultProps = {
//   text: 'Título por defecto'
// }

// class App extends Component {
//   render(){
//     return (
//       <div className = "App">
//       <Title text = 'Otro título desde props' />
//       </div>
//     )
//   }
// }



  // COMPONENTE CON ESTADO 
  // CONTADOR SE INDICA DECLARATORIAMENTE QUE CAMBIOS DEBE REALIZAR
  //  SOLO SE PUEDE ACTUALIZAR USANDO EL MÉTODO SETSTATE Y ES ASINCRONO
  // FLUJO DE DOS UNIDIRECCIONAL (DE PADRES A HIJOS)

class Contador extends Component {
  constructor (){
    super()
    this.state = { contador: 1 }
    setInterval (() => {
      this.setState({contador: this.state.contador + 1})
    }, 1000)
  }
  render(){
    
    return <ContadorNumero numero= {this.state.contador} />
  }
}

// CLASS FIELD - aqui no se hace necesario hacer uso del constructor
 
// class Contador extends Component {
//   state = {contador: 1};

//   render(){
//     return <span>{this.state.contador}</span>
//   }
// }

class ContadorNumero extends Component {
  render(){
    console.log ('ContadorNumero render()')
    return <span>{this.props.numero}</span>
  }
}


class App extends Component {
  render(){
    return(
      <div className = "App">
      <p>Propagando el state de nuestros componentes</p>
      <Contador />
      </div>
    )
  }
}

export default App;
