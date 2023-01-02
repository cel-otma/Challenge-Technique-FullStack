import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import styled from "styled-components";
import { notification } from 'antd';
import type { NotificationPlacement } from 'antd/es/notification';
import { useRouter } from "next/router";

const Formsttyle = styled.div`
    width: 400px;
    @media screen  and (max-width: 400px) {
        width: 300px;
    }
    .title{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        color: #141519;
        margin-bottom: 1rem;
    }
    .title2{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 17px;
        line-height: 30px;
        color: #BBBABF;
        margin-bottom: 2.5rem;
    }
    .test{
        height: 50px;
        border: 1.06461px solid #c4c4c4;
        border-radius: 6.38763px;
    }
    .ant-row {
        display: flex;
        flex-flow: row wrap;
        min-width: 0;
        flex-direction: column;
        align-items: flex-start;
    }
    .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before {
        display: none;
    }
    .ant-form-horizontal .ant-form-item-control {
        width: 100%;
    }
    .ant-form-item-label > label::after {
        content: '';
    }
    .ant-form-item-control-input-content {
        display: flex;
        justify-content: space-between;
    }
    .login-form-forgot{
        color: #141519;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #141519;
        cursor: pointer;
    }
    .login{
        width: 100%;
        .login-form-button{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .5rem;
            width: 100%;
            height: 50px;
            background-color: #111629;
            border: 0px solid #c4c4c4;
            border-radius: 6.38763px;
        }
    }
    .signup{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: .5rem;
        .signbotton{
            color: #141519;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            line-height: 20px;
            color: #141519;
            cursor: pointer;
        }
    }
`

const openNotification = (placement: NotificationPlacement) => {
    notification.info({
        message: ``,
        description:
            'This User Not Found.',
        placement,
    });
};

const openNotificationblock = (placement: NotificationPlacement) => {
    notification.info({
        message: ``,
        description:
            'This User Is blocked.',
        placement,
    });
};
const FormPart = (props: any) => {
    const router  = useRouter()
    const onFinish = async (values: any) => {
        let value: any = await props.context.getMain(values.username)
        if (value) {
            if (value.password == values.password)
            {
                if (value.isblock == true)
                {
                    openNotificationblock('top');
                }
                else {
                    localStorage.setItem('username',  values.username)
                    props.context.setIslogged(true)
                    router.push('/photos')
                }
            }
            else{
                openNotification('top');
            }
        }
        else {
            openNotification('top');
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <Formsttyle>
        <div className="form">
            <div className="title">
                Welcome back
            </div>
            <div className="title2">
                Welcome back! please enter your details.
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    label='Email'
                    rules={[{ required: true, message: 'Enter your email' }]}
                >
                    <Input bordered={false} className='test' placeholder="Username" />
                </Form.Item>
                <Form.Item
                    label='Password'
                    name="password"
                    rules={[{ required: true, message: 'Enter your Password' }]}
                >
                    <Input
                        type="password"
                        placeholder="Password"
                        bordered={false}
                        className='test'
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember for 30 days</Checkbox>
                    </Form.Item>
                    <div className="login-form-forgot">
                        Forgot password
                    </div>
                </Form.Item>
                <Form.Item className="login">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Sign in
                    </Button>
                </Form.Item>
                <Form.Item className="login" >
                    <Button type="primary" htmlType="submit" className="login-form-button" style={{ background: '#ffff', border: '1.06461px solid #c4c4c4', color: 'black' }} >
                        <img src="/google.svg" width={25} height={25} alt="" />
                        Sign in with google
                    </Button>
                </Form.Item>
                <div className="signup">
                    Don't have an account?
                    <div className="signbotton">
                        <div style={{ marginLeft: '1rem' }}>
                            Sign up for free
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    </Formsttyle>
}
export default FormPart