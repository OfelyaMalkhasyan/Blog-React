import React from 'react';
import ButtonAppBar from './Header';
import SignIn from './LoginForm';

export default function Home() {
    return(
        <div className="home">
            <ButtonAppBar/>
            <SignIn/>
        </div>
    )
}