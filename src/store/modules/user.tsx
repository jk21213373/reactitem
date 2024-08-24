import { createSlice } from '@reduxjs/toolkit'
import { loginAPI, getProfileAPI } from '../../apis/user'
import { getToken, setToken as _setToken, clearToken } from '../../utils/token'
const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token: getToken() || ''
    },
    // 同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state: any, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state: any) {
            state.token = ''
            state.userInfo = {}
            clearToken()
        }
    }
})

// 解构出actionCreater
const { setUserInfo, setToken, clearUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm: any) => {
    return async (dispatch: any) => {
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token))
    }
}

//获取个人用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch: any) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}
export { fetchLogin, fetchUserInfo, setToken, clearUserInfo }

export default userReducer