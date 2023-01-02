import React from "react";
import styled from "styled-components";
import { Button, Select } from 'antd';
import { Tabs } from 'antd';

const Headerstyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .select{
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        border-radius: 4px;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
    .tabs{
        .ant-tabs-top > .ant-tabs-nav::before, .ant-tabs-top > div > .ant-tabs-nav::before {
            display: none;
        }
        .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar, .ant-tabs-top > div > .ant-tabs-nav .ant-tabs-ink-bar {
            display: none;
        }
        .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
            color: #515055;
            background: #DDDDDD;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            /* font-family: 'Poppins'; */
            /* font-style: normal; */
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }
        .ant-tabs-tab-btn {
            outline: none;
            transition: all 0.3s;
            padding: 3px 6px 3px 6px;
            font-family: 'Roboto', sans-serif;
            /* font-family: 'Poppins'; */
            /* font-style: normal; */
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }
        .ant-tabs-tab + .ant-tabs-tab {
            margin: 0 0 0 15px;
        }
    }
`

const Header = (props: any) => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const onChange = (key: string) => {
        props.setData([])
        props.setToSearch(key);
    };
    return <Headerstyle>
        <div className="tabs">
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                    {
                        label: `All`,
                        key: 'All',
                        children: ``,
                    },
                    {
                        label: `Animation`,
                        key: 'Animation',
                        children: ``,
                    },
                    {
                        label: `Branding`,
                        key: 'Branding',
                        children: ``,
                    },
                    {
                        label: `Illustration`,
                        key: 'Illustration',
                        children: ``,
                    },
                    {
                        label: `Mobile`,
                        key: 'Mobile',
                        children: ``,
                    },
                    {
                        label: `Print`,
                        key: 'Print',
                        children: ``,
                    },
                    {
                        label: `Product design`,
                        key: 'Product design',
                        children: ``,
                    },
                    {
                        label: `Typography`,
                        key: 'Typography',
                        children: ``,
                    },
                    {
                        label: `Web Design`,
                        key: 'Web Design',
                        children: ``,
                    },
                ]}
            />
        </div>

    </Headerstyle>
}

export default Header