import { useAuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {

    const { error, setName, mensajeError, mensajeSuccess, success, createUser, 
        setEmail, setPassword, setPasswordValidation } = useAuthContext();

    return (
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>Ingrese sus datos para continuar con el registro.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <fieldset>
                    <form onSubmit={createUser} >
                        <label>Nombre</label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Nombre y Apellido'
                        />
                        <label>Email</label>
                        <input
                            value={email}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email'
                        />
                        <label>Contraseña</label>
                        <input
                            value={password}
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Contraseña'
                        />
                        <label>Verifique su contraseña</label>
                        <input
                            value={passwordValidation}
                            type="password"
                            onChange={(e) => setPasswordValidation(e.target.value)}
                            placeholder='Ingrese nuevamente su contraseña'
                        />
                        { error ? <p className='btn-danger'> {mensajeError} </p> 
                        : success ? <p className='btn-success'> {mensajeSuccess} </p> : null }
                        <button variant="outline-info" type="submit" className="mt-auto" >
                            Crear cuenta
                        </button>
                        <div>
                            <p>Si ya tenés cuenta<Link to='/Login'> Inicia sesión </Link></p>
                        </div>
                        <div><Link to='/LoginWithGoogle'>O ingresá con Google<FcGoogle /></Link></div>
                    </form>  
                </fieldset>
            </Modal.Body>
        </Modal>
    )
}

export default SignUp;