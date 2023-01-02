import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { useState, useContext } from "react";
import { Level } from "level";


export const db = new Level('./db', { valueEncoding: 'json' })

const MyContext = React.createContext({}) as any;


export function useMyContext() {
    return useContext(MyContext);
}
export function MyProvider({ children }: any) {
    const [islogged, setIslogged] = useState(false);
    const createuser = async () => {
        const user1 = {
            username: 'muser1',
            password: 'mpassword1',
            isblock: false,
        }
        const user2 = {
            username: 'muser2',
            password: 'mpassword2',
            isblock: false,
        }
        const user3 = {
            username: 'muser3',
            password: 'mpassword3',
            isblock: true,
        }
        await db.put('muser1', JSON.stringify(user1));
        await db.put('muser2', JSON.stringify(user2));
        await db.put('muser3', JSON.stringify(user3));
    }
    const getuser = async (str: string) => {
        const value = await db.get(str);
        if (!value)
            setIslogged(false)
        else
            setIslogged(true)
        // return value
        return JSON.parse(value);
    }
    const Main = async () => {
        await createuser();
    }
    const getMain = async (str: string ) => {
        try{

            let value = await getuser(str);
            return value
        }
        catch (e) {
            return false
        }
    }
    Main()
    return (
        <MyContext.Provider value={{ db: db, islogged: islogged, getuser: getuser, getMain: getMain, setIslogged: setIslogged}}>
            {children}
        </MyContext.Provider>
    );
}
