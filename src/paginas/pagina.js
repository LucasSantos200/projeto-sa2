import React, { useState } from 'react'
import axios from 'axios';
import { saveCepDB } from '../utils/cepdb';
import './pagina.css';

function App() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function buscarCep(){
      if (cep.length !== 8) {
        alert('Digite um CEP válido (8 números)');
        return;
      }
  
      setLoading(true);
      setError(false);
  
      try {
        const res = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        if (res.data.erro) {
          setError(true);
          setEndereco(null);
        } else {
          setEndereco(res.data);
          await saveCepDB({
            nome,
            telefone,
            cep,
            rua: res.data.logradouro,
            bairro: res.data.bairro,
            cidade: res.data.localidade
          })
        }
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar API", err);
        setError(true);
        setLoading(false);
      }
    }
  
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
          <input className='esqueci2' type='text' value={nome} onChange={(e) => setNome(e.target.value)} placeholder='Digite seu Nome'/>
          <input className='esqueci2' type='number' value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder='Digite seu Telefone'/>
          <input className='esqueci2' type='text' value={cep} inputMode='numeric' pattern='[0-9]*' maxLength={8}  onChange={(e) => setCep(e.target.value.replace(/\D/g, ''))} 
          /*essa parte do setCep faz com que o "-" seja apagado e deixe só os numeros*/ placeholder='Digite seu CEP'/>
          
          <br/>
          <input className='esqueci' type='button' value='Enviar' onClick={buscarCep}/>
        </div>
      
      {loading && <p>Pegando CEP...</p>}
      {error && <p>o CEP não foi encontrado...</p>}

      <div className='box'>
        <p>Nome: <span>{nome}</span></p>
        <p>Telefone: <span>{telefone}</span></p>
        <p>CEP: <span>{cep}</span></p>
        <p>Rua: <span>{endereco?.logradouro}</span></p>
        <p>Bairro: <span>{endereco?.bairro}</span></p>
        <p>Cidade: <span>{endereco?.localidade}</span></p>
      </div>
      
      
      </div>
  );
}

export default App;