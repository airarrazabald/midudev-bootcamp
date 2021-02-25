import './App.css';
import Mensaje from './Mensaje'

const Description = () => {
  return <p>Descripción</p>;
}

const App = () => {
  
  return (
    <div className="App">
      <Mensaje color='red' message='Estamo trabajando'/> 
      <Mensaje color='blue' message='en un curso'/> 
      <Mensaje color='yellow' message='de react'/> 
      <Description/>
    </div>
  );
}

export default App;
