import React from "react";
import styled from "styled-components";
import CardElement from "./cardElemet";

const Globalcontent = styled.div`
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    .ant-card-body {
        padding: 0px;
        border-radius: 10px;
    }
    .ant-card-bordered {
        border: 0px solid #f0f0f0;
    }
    .footercard{
        padding: .5rem;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .image{
        object-fit: cover;
        border-radius: 10px;
    }
    .ant-image-mask{
        border-radius: 10px;
    }
`

const Cards = ({ data }: any) => {
    return <Globalcontent>
        {
            data.map((stat: any, key: any) => {
                return (
                    <CardElement data={stat} key={key}/>
                )
            })
        }
    </Globalcontent>
}

export default Cards