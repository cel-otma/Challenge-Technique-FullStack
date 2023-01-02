import React, {  useState } from "react";
import { Card, Image } from 'antd';
import styled from "styled-components";
import { HeartOutlined, EyeOutlined, HeartFilled } from '@ant-design/icons';


const FooterStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    .likepart {
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

const CardElement = ({ data }: any) => {
    const [click, setClick] = useState(false);
    const [likes, setLikes] = useState(data.likes)
    return <Card
        style={{ width: 310, borderRadius: '10px' }}
    >
        <Image alt="example" width={'100%'} height={'220px'} className='image' src={data.urls.regular} />
        <div className="footercard">
            <FooterStyle>
                <div>
                    <img src={data.user.profile_image.small} style={{ borderRadius: '50%' }} alt="" />
                </div>
                <div>
                    {data.user.username}
                </div>
            </FooterStyle>
            <FooterStyle>
                <div className="likepart">
                    {
                        click ?
                            <HeartFilled onClick={() => {
                                setClick(!click)
                                setLikes(likes - 1)
                            }} />
                            :
                            <HeartOutlined onClick={() => {
                                setClick(!click)
                                setLikes(likes + 1)
                            }} />
                    }
                    <div>
                        {likes}
                    </div>
                </div>
            </FooterStyle>
        </div>
    </Card>
}

export default CardElement