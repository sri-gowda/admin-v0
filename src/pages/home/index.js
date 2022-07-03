import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const contentRef = useOutletContext();
    return (
        <div className='content' id="content" ref={contentRef}>
            <h1>I'm home page</h1>
        </div>
    );
}

export default Home;