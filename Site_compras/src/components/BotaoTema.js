import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { TemaContext } from '../TemaContext';
import '../App.css';

function Botaotema() {
  const { tema, toggleTema } = useContext(TemaContext);

  return (
    <div className={`App ${tema === "escuro" ? "Tema-escuro" : ""}`}>
      <div className='corpo-botao'>
        <input 
          className='checkbox'
          type="checkbox" 
          id="chk" 
          onChange={toggleTema} 
          checked={tema === "escuro"}
        />
        <label className="label" htmlFor="chk">
          <i className='moon'><FontAwesomeIcon icon={faMoon} /></i>
          <i className='sun'><FontAwesomeIcon icon={faSun} /></i>
          <div className='ball'></div>           
        </label>
      </div>
    </div>
  );
}

export default Botaotema;
