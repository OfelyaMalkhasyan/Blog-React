import React from 'react';
import ButtonAppBar from './Header';
import BodyBar from './Body';

export default function Home() {
    return(
        <div className="home">
            <ButtonAppBar/>
            <BodyBar/>
        </div>
    )
}

