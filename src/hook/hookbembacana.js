import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getCepDB } from '../utils/cepdb';

async function Hookbembacana(e, setEndereco){
    const [ceps, setCEP] = useState({});
    const cep = e.target.value;
if(cep.length !=8){return }

 useEffect(() => { //aqui ele pega o "cep" e bota no lugar da API
    const getData = async () => {
      try {
        const res = await axios.get(`https://viacep.com.br/ws/${e}/json/`); //aqui ele busca o pokemon da api, usando o pokemon da url 
        setCEP(res.data);
        console.log("Sucesso:", res)
        setLoading(false);
      } catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false);
        setError(true);
      }    };
    getData();
    const getCache = async () => {
            const cachep = await getCepDB(e)
    if(!cachep){
      await getData()
    } else {
      setMyCEP(cachep)
      return setLoading(false);
    }
    };
}, [e]); 

return{ ceps };

}

export default Hookbembacana;