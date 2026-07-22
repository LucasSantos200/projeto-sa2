import './pagina.css';

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
          <input className='esqueci2' type='number' placeholder='Digite seu Telefone'/>
          <input className='esqueci2' type='number' placeholder='Digite seu CEP'/>
          <br/>
          <input className='esqueci' type='button'/>
        </div>
      
      <div className='box'>
        <p>Nome: <span id=''></span></p>
        <p>Telefone: <span id=''></span></p>
        <p>CEP: <span id=''></span></p>
        <p>Rua: <span id=''></span></p>
        <p>Bairro: <span id=''></span></p>
        <p>Cidade: <span id=''></span></p>
      </div>
      
      
      </div>
  );
}

export default App;