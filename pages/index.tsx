import Head from 'next/head'
import Image from 'next/image'
import styled from "styled-components";
import { Rate } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import FormPart from '../components/FormPart';
import { useMyContext } from './Provider/Provider';
import { useEffect } from 'react';

const Gloabalcontent = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  background: #ffff;
  border-radius: 8px;
`

const Img = styled.div`
    @media screen  and (max-width: 900px) {
        display: none;
    }
    position: relative;
    height: 100%;
    width: 50%;
    background-image: url('/imnage.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    .subdiv{
      position: absolute;
      width: 100%;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
      bottom: 0;
      padding: 3rem;
      color: #ffffff;
      .blur{
        width: 100%;
        height: 100%;
        /* background-color: #B5B2AD; */
        background: rgba(255, 255, 255, 0.35);
        backdrop-filter: blur(15px);
        padding: 3rem 3rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .paragraphe{
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          font-size: 35px;
          line-height: 45px;
          color: #ffffff;
        }
        .secondepart{
          width: 100%;
          display: flex;
          justify-content: space-between;
          .secondepartleft{
            display: flex;
            flex-direction: column;
            justify-content: start;
            gap: .5rem;
            .name{
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 500;
              font-size: 30px;
              line-height: 40px;
              color: #ffffff;
            }
            .founder{
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 500;
              font-size: 20px;
              line-height: 30px;
              color: #ffffff;
            }
            .agencyname{
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 20px;
              color: #CBBEB5;
            }
          }
        }
      }
    }
`

const FormStyle = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen  and (max-width: 900px) {
    width: 100%;
  }
`

const SwitchBotton = styled.div`
  display: flex;
  gap: 2rem;
  .ant-btn-circle.ant-btn-lg {
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
  }
  .mybotton{
    background: transparent;
    color: #FFFF;
    
  }
`

const Secondepartright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 2rem;
  
`

const Global = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem 2.5rem 1rem 2.5rem;
  border-collapse: separate;
  border-radius: 8px;
  background: #E6E7EC;
  @media screen  and (max-width: 515px) {
    padding: 1rem .5rem 1rem .5rem;
  }
`

export default function Home() {
  let context = useMyContext()
  return (
    <Global>
      <Gloabalcontent>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <FormStyle>
          <FormPart context={context}/>
        </FormStyle>
        <Img>
          <div className='subdiv'>
            <div className='blur'>
              <div className='paragraphe'>
                "We've been using Untitled to kick start every new project and can't imagine working without it."
              </div>
              <div className='secondepart'>
                <div className='secondepartleft'>
                  <div className='name'>
                    Andi Lane
                  </div>
                  <div>
                    <div className='founder'>
                      Founder, Catalog
                    </div>
                    <div className='agencyname'>
                      Web Design Agency
                    </div>
                  </div>
                </div>
                <Secondepartright>
                  <div>
                    <Rate disabled defaultValue={0} />
                  </div>
                  <SwitchBotton>
                    <Tooltip title="Left">
                      <Button shape="circle" icon={<ArrowLeftOutlined />} className='mybotton' size="large" />
                    </Tooltip>
                    <Tooltip title="right">
                      <Button shape="circle" icon={<ArrowRightOutlined />} className='mybotton' size="large" />
                    </Tooltip>
                  </SwitchBotton>
                </Secondepartright>
              </div>
            </div>
          </div>
        </Img>
      </Gloabalcontent>
    </Global>
  )
}
