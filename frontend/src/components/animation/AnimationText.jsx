import { Typography } from '@mui/material';
import {useState, useEffect } from 'react';

const fadeInterval = 1750;
const wordChangeInterval = fadeInterval * 2;

export const AnimationText = ({WordsToAnimate }) => {
    const [fade, setFade] = useState('fade-in');
    const [wordOrder, setWordOrder] = useState(0);

    useEffect(
        () => {
            const fadeTimeout = setInterval(
                () => {
                    setFade((prevFade) => (prevFade === 'fade-in' ? 'fade-out' : 'fade-in'));
                }, fadeInterval);

                return () => clearInterval(fadeTimeout);
                }, []);

    useEffect(
        () => {
            const wordTimeout = setInterval(() => {
                setWordOrder((prewordOrder) => (prewordOrder + 1) % WordsToAnimate.length);
            }, wordChangeInterval);
                    
                return () => clearInterval(wordTimeout);
            }, []);

                return (
                    <span style={{color:'#297cde'}} className={fade}>{WordsToAnimate[wordOrder]}</span> 
                );
    };