import { googleAuthProvider } from "../firebase/firebaseConfig"
import { firebase } from "../firebase/firebaseConfig"
import { types } from "types/types"

export const statLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( login(email, password) )
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then(useCredentials => {
                console.log(useCredentials);
            })   
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}