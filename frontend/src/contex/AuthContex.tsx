import { ReactNode, createContext, useContext, useEffect, useState} from 'react';
import {  checkAuthStatus, loginUser } from '../helpers/api-communicator';

type User ={
    name: string;
    email: string;
};
type UserAuth = {
    isLoggedIn: boolean;
    User: User | null;
    login: (email:string, password:string) => Promise<void>;
    signup: (name:string, email:string, password:string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

 export const AuthProvider = ({children}: {children: ReactNode} ) => {
 const [User ,setUser ] = useState<User | null>(null);
 const [isLoggedIn, setISLoggedIn] = useState(false);

    useEffect(() => {
        // fetch if the user cookie are vaild then skip  login
        async function checkStatus() {
            const data = await checkAuthStatus();
            if(data){
                setUser({email: data.email,name:data.name });
                setISLoggedIn(true);
        }
    }
    checkStatus();

    }, []);
    const login =async (email:string, password:string ) => {
        const data = await loginUser(email,password);
        if(data){
            setUser({email: data.email,name:data.name });
            setISLoggedIn(true);
        }
    };
    const  signup =async ( name:string, email:string, password:string) => {};
    const logout =async () => {};

    const value ={
        User,
        isLoggedIn,
        login,
        logout,
        signup,
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
 };
 

 export const useAuth = () => useContext(AuthContext);