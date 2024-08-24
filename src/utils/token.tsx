// 封装存取方法

const TOKENKEY = 'token_key'

function setToken(token: any) {
    return localStorage.setItem(TOKENKEY, token)
}

function getToken() {
    return localStorage.getItem(TOKENKEY)
}

function clearToken() {
    return localStorage.removeItem(TOKENKEY)
}

export {
    setToken,
    getToken,
    clearToken
}