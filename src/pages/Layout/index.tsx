import { Layout, Menu, Popconfirm } from 'antd'
import { Outlet, useNavigate } from "react-router-dom"
import { fetchUserInfo, clearUserInfo } from '../../store/modules/user'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'

const { Header, Sider } = Layout

const items = [
    {
        label: '首页',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: '文章管理',
        key: '/article',
        icon: <DiffOutlined />,
    },
    {
        label: '创建文章',
        key: '/publish',
        icon: <EditOutlined />,
    },
]

const GeekLayout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUserInfo() as any)
    }, [dispatch])
    //用户信息改变时刷新组件
    const navigate = useNavigate()
    const menuClick = (route: any) => {
        navigate(route.key)
    }
    const onConfirm = () => {
        console.log('确认')
        dispatch(clearUserInfo())
        navigate('/login')
    }
    //@ts-ignore
    const name = useSelector(state => state.user.userInfo.name)
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <div className="user-info">
                    <span className="user-name">{name}</span>
                    <span className="user-logout">
                        <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm}>
                            <LogoutOutlined /> 退出
                        </Popconfirm>
                    </span>
                </div>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme="dark"
                        onClick={menuClick}
                        defaultSelectedKeys={['/']}
                        items={items}
                        style={{ height: '100%', borderRight: 0 }}></Menu>
                </Sider>
                <Layout className="layout-content" style={{ padding: 20 }}>
                    <Outlet></Outlet>
                </Layout>
            </Layout>
        </Layout>
    )
}
export default GeekLayout