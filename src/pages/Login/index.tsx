import './index.scss'
import { Card, Form, Input, Button, message } from 'antd'
import logo from '@/assets/logo.png'
import { fetchLogin } from '../../store/modules/user'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    async function onFinish(formValue: any) {
        await dispatch(fetchLogin(formValue) as any)//更改之后
        navigate('/')
        message.success('登录成功')
    }
    return (
        <div className="container">
            <div className="form_area">
                <p className="title">极客园</p>
                <Form action="" validateTrigger={['onBlur']} onFinish={onFinish}>
                    <Form.Item className="form_group"
                        name="mobile"
                        rules={[
                            { required: true, message: '请输入手机号' },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '手机号码格式不对'
                            }
                        ]}
                    >     <label className="sub_title" htmlFor="mobile">手机号</label>
                        <Input className="form_style" type="text" size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item className="form_group"
                        name="code"
                        rules={[
                            { required: true, message: '请输入验证码' },
                        ]}
                    >    <label className="sub_title" htmlFor="code">验证码</label>
                        <Input className="form_style" type="text" size="large" placeholder="请输入验证码" maxLength={6} />
                    </Form.Item>
                    <Form.Item>
                        <Button className="btn" type="primary" htmlType="submit" size="large" block>
                            SIGN UP
                        </Button>
                        <p>Have an Account? <a className="link" href="">Login Here!</a></p><a className="link" href="">
                        </a>
                    </Form.Item>
                    <a className="link" href="">
                    </a>
                </Form>
            </div>
            <a className="link" href="">
            </a>
            <button>
                <div className="main">
                    <div className="rings" id="ring1"></div>
                    <div className="rings" id="ring2"></div>
                    <div className="asteriods-large" id="asteriod1"></div>
                    <div className="asteriods-large" id="asteriod2"></div>
                    <div className="asteriods-large" id="asteriod3"></div>
                    <div className="asteriods-large" id="asteriod4"></div>
                    <div className="asteriods-large" id="asteriod5"></div>
                    <div className="asteriods-small" id="asteriod6"></div>
                    <div className="asteriods-small" id="asteriod7"></div>
                    <div className="asteriods-small" id="asteriod8"></div>
                    <div className="asteriods-small" id="asteriod9"></div>
                    <div className="asteriods-small" id="asteriod10"></div>
                    <div id="saturn"></div>
                    <div id="explore">Explore</div>

                </div>
            </button>

        </div>
    )
}

export default Login