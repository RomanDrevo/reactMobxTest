import auth0 from 'auth0-js'

const LOGIN_SUCCESS_PAGE = '/admin'
const LOGIN_FAILURE_PAGE = '/'

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'romulushund.auth0.com',
        clientID: 'PGqDtN26hynYEkfbI6AbnYYK2pzS7sq0',
        redirectUri: 'http://localhost:3000/callback',
        // audience: 'romulushund.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid read:alldata'
    })

    // constructor(){
    //     this.login = this.login.bind(this)
    // }

    login = () => {
        this.auth0.authorize()
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            console.log('authResults: ', authResults)
            if(authResults && authResults.accessToken && authResults.idToken){
                let expiresAt = JSON.stringify(authResults.expiresIn) * 1000 * new Date().getTime()
                localStorage.setItem('access_token', authResults.accessToken)
                localStorage.setItem('id_token', authResults.idToken)
                localStorage.setItem('expires_at', expiresAt)
                window.location.hash = ''
                window.location.pathname = LOGIN_SUCCESS_PAGE
            }
            else if (err){
                window.location.pathname = LOGIN_FAILURE_PAGE
                console.log('Login error! ', err)
            }
        })
    }

    isAuthenticated = () =>{
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
        console.log('expiresAt: ', expiresAt)
        console.log(new Date().getTime() > expiresAt)
        return expiresAt && new Date().getTime() < expiresAt
    }

    logout = () =>{
        localStorage.removeItem('access_token')
        localStorage.removeItem('id_token')
        localStorage.removeItem('expires_at')
        window.location.pathname = LOGIN_FAILURE_PAGE
    }
}

export default Auth