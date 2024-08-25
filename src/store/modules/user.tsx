import { createSlice } from '@reduxjs/toolkit'
import { loginAPI, getProfileAPI } from '../../apis/user'
import { getToken, setToken as _setToken, clearToken } from '../../utils/token'
const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        //Token持久化，redux存一份，localStorage存一份
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state) {
            state.token = ''
            state.userInfo = {}
            clearToken()
        }
    }
})

// 解构出 actionCreater

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

// 异步方法 完成登录获取token
const fetchLogin = (loginForm: any) => {
    return async (dispatch: any) => {
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fetchUserInfo = () => {
    return async (dispatch: any) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}

// 获取 reducer函数

const userReducer = userStore.reducer

export { fetchLogin, fetchUserInfo, setToken, clearUserInfo }

export default userReducer 