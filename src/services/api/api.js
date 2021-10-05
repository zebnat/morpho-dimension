import axios from 'axios'

class Api {
    constructor(onForbidden, onError) {
        this.base = `https://www.macrojuegos.com/apiv3`;

        this.onForbidden = onForbidden;
        this.onError = onError;
    }

    _get(path, params = {}, token = false) {
        const headers = token ? {
            'ragapiv3': token
        } : {};

        const preparedGetParams = this._prepareParams(params).toString();
        const urlGetParams = preparedGetParams.length > 0 ? '?' + preparedGetParams : '';
        console.log(this.base + path + urlGetParams);

        return axios({
            method: 'get',
            url: this.base + path + urlGetParams,
            headers: headers
        }).then((res) => {
            if (res.status === 200) return res.data;

            if (res.status === 403) {
                if (this.onForbidden !== null) {
                    this.onForbidden();
                    return res.data;
                }
            }

            if (this.onError !== null) {
                this.onError('Get Request returned status ' + res.status);
                console.error('Get Request returned status ' + res.status);
            }
        })
            .catch((err) => {
                if (err.response.status === 403) {
                    if (this.onForbidden !== null) {
                        this.onForbidden();
                        return err.response.data;
                    }
                }


                if (this.onError !== null) {
                    this.onError(err.message);
                    console.error(err.message);
                }
            })
    }

    _post(path, params = {}, token = false) {
        const headers = token ? {
            'ragapiv3': token,
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        } : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        };

        return axios({
            method: 'post',
            url: this.base + path,
            data: this._prepareParams(params),
            headers: headers
        }).then((res) => {
            if (res.status === 200) return res.data;

            if (res.status === 403) {
                if (this.onForbidden !== null) {
                    this.onForbidden();
                    return res.data;
                }
            }

            if (this.onError !== null) {
                this.onError('ERROR: Post Request returned status ' + res.status);
                console.error('ERROR: Post Request returned status ' + res.status);
            }
        })
            .catch((err) => {
                if (err.response.status === 403) {
                    if (this.onForbidden !== null) {
                        this.onForbidden();
                        return err.response.data;
                    }
                }

                if (this.onError !== null) {
                    this.onError(err.message);
                    console.error(err);
                }
            })
    }

    _delete(path, params = {}, token = false) {
        const headers = token ? {
            'ragapiv3': token
        } : {};

        return axios({
            method: 'delete',
            url: this.base + path,
            data: this._prepareParams(params),
            headers: headers
        }).then((res) => {
            if (res.status === 200) return res.data;

            if (res.status === 403) {
                if (this.onForbidden !== null) {
                    this.onForbidden();
                    return res.data;
                }
            }

            if (this.onError !== null) {
                this.onError('ERROR: DELETE Request returned status ' + res.status);
                console.error('ERROR: DELETE Request returned status ' + res.status);
            }
        })
            .catch((err) => {
                if (err.response.status === 403) {
                    if (this.onForbidden !== null) {
                        this.onForbidden();
                        return err.response.data;
                    }
                }

                if (this.onError !== null) {
                    this.onError(err.message);
                    console.error(err);
                }
            })
    }

    _prepareParams(params) {
        const paramsObj = new URLSearchParams();

        for (let x in params) {
            paramsObj.append(x, params[x]);
        }

        return paramsObj;
    }
}

export default Api;