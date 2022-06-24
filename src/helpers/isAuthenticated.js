export const Authenticate = (token) => {
    console.log(token)
    if (typeof window != undefined) {
        window.localStorage.setItem('auth',JSON.stringify(token))
    }
}

export const isAuthenticated = () => {
    if(typeof window === undefined){
        return false
    }

    if (window.localStorage.getItem('auth')) {
        return JSON.parse(window.localStorage.getItem('auth'))
    }else{
        return false;
    }
}