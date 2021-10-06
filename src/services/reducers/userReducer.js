import { defaultUser } from "../context/UserContext"

export default function userReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_STATE':
            return { ...state, ...action.payload }
        case 'PERFORM_LOGOUT':
            return { ...state, isLogged: false }
        case 'RESET_USER':
            localStorage.setItem('userState', JSON.stringify(defaultUser))
            return defaultUser
        case 'SAVE_STATE':
            localStorage.setItem('userState', JSON.stringify(action.payload))
            return action.payload;
        default:
            throw new Error();
    }
}