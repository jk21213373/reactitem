import { getToken } from '../utils/token'
import { Navigate } from 'react-router-dom'

//路由鉴权实现
//@ts-ignore
const AuthRoute = ({ children }) => {
    const isToken = getToken()
    if (isToken) {
        return <>{children}</>
    } else {
        return <Navigate to="/login" replace />
    }
}

export default AuthRoute