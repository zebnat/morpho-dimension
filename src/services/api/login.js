import Api from "./api";

class LoginApi extends Api {
    async login(u, p, client_id, code, csrf) {
        const { errorCode, errorMessage, payload } = await this._post('/auth/', {
            username: u,
            password: p,
            client_id: client_id,
            code: code,
            state: csrf
        });

        const er = `${errorMessage} code: ${errorCode}`;
        switch (errorCode) {
            case 4004:
                throw new Error(er);
            case 4003:
                throw new Error(er);
            default:
        }
        return payload;
    }

    async testAuth(token){
        if(!token) {
            this.onForbidden();
            return;
        }

        return await this._get('/auth/', {}, token);
    }

    async logout(token){
        if(!token) {
            this.onForbidden();
            return;
        }

        return await this._delete('/auth/', {}, token);
    }
}



export default LoginApi;