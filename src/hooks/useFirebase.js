import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from 'axios';
import firebaseAuthentication from '../firebase/firebase.initialize';

firebaseAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        setLoading(true)
        const subscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setError();
                await findUser(user);
            } else {
                setUser({})
                setError();
            }
            setLoading(false)
        });
        return subscribe;
    }, [auth])

    const registration = (name, email, password) => {
        setLoading(true);
        setError();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(async () => {
                    const user = userCredential.user;
                    setError();
                    await saveUser(user.uid, user.displayName, user.email);
                    await findUser(user);
                    setSuccess(true);
                }).catch((error) => {
                    setError(error.message);
                })
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const login = (email, password) => {
        setLoading(true);
        setError();
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                setError();
                await findUser(user);
                setSuccess(true);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const googleSignIn = () => {
        setLoading(true);
        setError();
        signInWithPopup(auth, googleProvider)
            .then(async (result) => {
                const user = result.user;
                setError();
                await saveUser(user.uid, user.displayName, user.email);
                await findUser(user);
                setSuccess(true);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    async function saveUser(uid, name, email) {
        setError();
        const user = { uid, name, email, role: "user" }
        await axios.put('http://localhost:5000/users', {
            data: user
        }).then(response => setError())
            .catch(error => {
                setError(error)
            })
    }

    async function findUser(user) {
        await axios.get(`http://localhost:5000/users/${user.uid}`)
            .then(res => {
                user.role = res.data.role || "user";
                setUser(user)
            })
    }

    const logout = () => {
        setError();
        signOut(auth).then(() => {
            setUser();
            setError();
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        user,
        error,
        loading,
        registration,
        login,
        logout,
        googleSignIn,
        success,
        setSuccess,
        setError
    }
}
export default useFirebase;