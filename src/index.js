import React from "react";
import ReactDOM from "react-dom";


class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date = new Date()
    }
  }

  render(){
  return(
    <div>
      <h1>Ejemplo del Reloj de la documentación de React</h1>
      <h2>La Hora es: { this.state.date.toLocateTimeString}</h2>
    </div>
  )} 
}
const renderizar = <Clock />;

ReactDOM.render(renderizar, document.getElementById("root"));
