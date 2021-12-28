import { useState, useEffect, createContext, useContext } from 'react';
import { auth, google } from '../service/getFirestore.js';

export const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({children}) => {
    
    const [ wishList, setWishList ] = useState([]);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordValidation, setPasswordValidation ] = useState('');
    const [ user, setUser ] = useState('');
    const [ photo, setPhoto ] = useState(null);
    const [ displayName, setDisplayName ] = useState(null);
    const [ error, setError ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState('');
    const [ success, setSuccess ] = useState(false);
    const [ successMsg, setSuccessMsg  ] = useState('');
    const [ loading, setLoading ] = useState(true);

    /*-------SingUp Functions------*/

    const createUser = (e) => {
        e.preventDefault();
        if(password !== passwordValidation) {
            setError(true);
            setErrorMsg('La contraseña no coincide.');
        } else if (password.length < 8) {
            setError(true);
            setErrorMsg('La contraseña debe tener más de 8 caracteres');
        } else if (email.includes("@" && ".")){
            auth
                .createUserWithEmailAndPassword(email, password)
                .then((res) =>
                    setSuccessMsg('¡Tu cuenta fue creada con éxito!'),
                    setError(false),
                    setSuccess(true)
                )
        } else {
            setError(true);
            setErrorMsg('El email ingresado no es válido');
        }
    };

    /*-------Login Functions-------*/

    const login = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password);
    }

    const loginGoogle = (e) => {
        e.preventDefault();
        auth
            .signInWithPopup(google)
            .then((res) => {
                setUser(res.user);
                setPhoto(res.user.photoURL);
                setDisplayName(res.user.displayName)
            })
            .catch((err)=> {
                setErrorMsg('Los datos ingresados no son válidos.')
            });
    };

    const logOut = () => {
        auth.signOut();
        setPhoto(null);
        setUser(null);
        setWishList([]);
    };

    /*-----WishList Functions------*/

    const addToWishlist = (item) => {
        const index = wishList.findIndex((i) => i.id === item.id);
        if(index > -1) {
            setWishList([...wishList]);
        } else {
            setWishList([...wishList, item]);
        }
    };

    const deleteFromWishList = (id) => {
        setWishList(wishList.filter((i) => i.id !== id));
    }

    useEffect(() => {
        const unsuscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
        return unsuscribe;
    }, [wishList]);

    return (
        <>
            <AuthContext.Provider value={{
                user,
                setUser,
                password,
                setPassword,
                setPasswordValidation,
                setEmail,
                name,
                setName,
                error,
                setError,
                errorMsg,
                success,
                successMsg,
                photo,
                setPhoto,
                displayName,
                setDisplayName,
                setLoading,
                wishList,
                setWishList,
                createUser,
                login,
                loginGoogle,
                logOut,
                addToWishlist,
                deleteFromWishList,
            }}>
                {!loading && children}
            </AuthContext.Provider>
        </>
    )
}