import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    
    const { email, setEmail, password, setPassword, login, loginGoogle } = useAuthContext();

    return (
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Inicia sesión.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={login} >
                        <label>Correo electrónico</label>
                        <input
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Correo electrónico'
                        />
                        <label>Contraseña</label>
                        <input
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Contraseña'
                        />
                        <div>
                            <button className='' type='submit'>Ingresar</button> 
                        </div>
                        <div>
                            <button className='google--btn' onClick={loginGoogle}>
                                Iniciar sesión con Google <FcGoogle />
                            </button>
                        </div>
                        <div>
                            ¿No tienes cuenta? <Link to='/CrearCuenta'>¡Regístrate! </Link>
                        </div>    
                    </form>  
                </fieldset>
            </Modal.Body>
        </Modal>
    )
}

export default Login;