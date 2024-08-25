import { createSlice } from '@reduxjs/toolkit'
import { request } from '../../utils/request'
import { getToken, setToken } from '../../utils/token'
const userStore = createSlice({
    name: 'user',
    // 数据
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        setUserToken(state, action) {
            state.token = action.payload
            // 存入本地
            setToken(state.token)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        }
    }
})

// 解构出actionCreater
const { setUserToken, setUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

const fetchLogin = (loginForm: any) => {
    return async (dispatch: any) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setUserToken(res.data.token))
    }
}


const fetchUserInfo = () => {
    return async (dispatch: any) => {
        const res = await request.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}

export { fetchLogin, fetchUserInfo }

export default userReducer