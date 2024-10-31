import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);

        localStorage.setItem('devburguer:userData', JSON.stringify(userInfo));
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('devburguer:userData');
        localStorage.removeItem('token');
    };

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('devburguer:userData');
        const tokenLocalStorage = localStorage.getItem('token');

        if (userInfoLocalStorage && tokenLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
    }, []);

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be a valid context');
    }

    return context;
};
