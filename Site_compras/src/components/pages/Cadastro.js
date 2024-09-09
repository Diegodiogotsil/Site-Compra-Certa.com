import './Cadastro.css';
import lixeira from '../../imagens/lixeira.jpg';
function Cadastro (){
    return (
        <div>
            <form>
                <h1>Cadastro de Usuarios</h1>
                <input name='nome' type='text'/>
                <input name='idade' type='number'/>
                <input name='e-mail' type='email'/>
                <button type='button'>Cadastrar</button>
            </form>
            <div>
                <div>

                </div>
                <button>
                    <img src={lixeira}/>
                </button>
            </div>
        </div>
    )
}


export default Cadastro
