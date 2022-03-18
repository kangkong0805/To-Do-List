import React, { useEffect, useState } from 'react';
import Background from '../Components/Background/Background';
import Header from '../Components/Header/Header';
import Input from '../Components/InputLayer/WriteInput/WriteInput';

export default function HomePage() {

    return (
        <Background>
            <Header />
            
            <Input />
        </Background>
    );
}

