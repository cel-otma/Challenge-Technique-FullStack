import { Spin } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Cards from "../../components/photos/Cards";
import Header from "../../components/photos/Header";
import { getImages, getImagesfiltred } from "../../api/axios";
import { useMyContext } from "../Provider/Provider";
import { Button, Result } from 'antd';
const GlobalContent = styled.div`
    width: 100vw;
    height: 100vh;
    padding: .5rem 3rem 0rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-x: hidden;
`

const Photos = () => {
    const componentRef = useRef<any>();
    const [dataphotos, setData] = useState<any>([])
    const [loading, setLoader] = useState(false)
    let offset = 1;
    const [toSearch, setToSearch] = useState('All')
    const getImg = async () => {
        setLoader(true)
        const res: any = await getImages(25, offset);
        if (res?.data) {
            setData((prev: any) => [...prev, ...res.data]);
            setLoader(false)
            offset += 1;
        }
        else {
            setLoader(false)
        }
    }
    const getImgfilter = async () => {
        setLoader(true)
        const res: any = await getImagesfiltred(25, offset, toSearch);
        if (res.data) {
            setData((prev: any) => [...prev, ...res.data.results]);
            setLoader(false)
            offset += 1;
        }
        else {
            setLoader(false)
        }
    }
    const handleScroll = (event: any) => {
        event.preventDefault()
        if (
            componentRef.current.offsetHeight + componentRef.current.scrollTop + 1 >
            componentRef.current.scrollHeight
        ) {
            if (toSearch == 'All') {
                getImg();
            }
            else
                getImgfilter()
        }

    };
    const router = useRouter()
    let context: any = useMyContext()
    useEffect(() => {
        if (!localStorage.getItem('username'))
            router.push('/')
        else {
            if (toSearch == 'All') {
                getImg();
                componentRef.current.addEventListener("scroll", handleScroll);
            }
            else {
                getImgfilter();
                componentRef.current.addEventListener("scroll", handleScroll);
            }
        }
    }, [toSearch])
    return <GlobalContent ref={componentRef}>
        <Header setToSearch={setToSearch} setData={setData} />
        {
            dataphotos.length > 0 &&
            <div >
                <Cards data={dataphotos} />
            </div>
        }
        {
            loading &&
            <Spin size="large" style={{ margin: '5rem' }} />
        }
        {
            !loading && dataphotos.length == 0 &&
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
            />
        }
    </GlobalContent>
}
export default Photos