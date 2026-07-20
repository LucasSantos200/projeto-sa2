import './App.css';

function App() {
  return (
      <div className="App">
        
        <div className='header'>
          Seja Bem Vindo à 
          <br/>
          LevaComigo!
        </div>
        
        
        <div className='pagina'>
          Insira as Informações
        </div>
        <div>
          <input className='esqueci2' type='text' placeholder='Digite seu Nome'/>
          <input className='esqueci2' type='text' placeholder='Digite seu Telefone'/>
          <input className='esqueci2' type='text' placeholder='Digite seu CEP'/>
          <br/>
          <input className='esqueci' type='submit'/>
        </div>
      
      <div className='box'>
        <p>Nome:</p>
        <p>Telefone: <span>{}</span></p>
        <p>CEP: <span>{}</span></p>
        <p>Rua: <span>{}</span></p>
        <p>Bairro: <span>{}</span></p>
        <p>Cidade: <span>{}</span></p>
      </div>
      
      
      </div>
  );
}

export default App;
