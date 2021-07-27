import React from 'react';
import HeaderBar from '../Home/Header';
import SignIn from './LoginForm';

export default function Home() {
    return(
        <div className="login">
            <HeaderBar/>
            <SignIn/>
        </div>
    )
}