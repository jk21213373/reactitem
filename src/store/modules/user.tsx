import { createSlice } from '@reduxjs/toolkit'
import { request } from '../../utils'
import { getToken, setToken } from '../../utils/token'
const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token: getToken() || ''
    },
    // 同步修改方法
    reducers: {
        setUserInfo(state: any, action) {
            state.userInfo = action.payload
            setToken(state.token)//存入本地
        }
    }
})

// 解构出actionCreater
const { setUserInfo } = userStore.actions

// 获取reducer函数
const userReducer = userStore.reducer

// 异步方法封装
const fetchLogin = (loginForm: any) => {
    return async (dispatch: any) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setUserInfo(res.data.token))
    }
}

export { fetchLogin }

export default userReducer