import React from 'react';
import Filter from '../Filter';
import Search from '../Search';

const HeaderTwo = () => {
    return (
        <div className='header-two'>
            <div className='header-left'>
                <h3 >Complaints</h3>
            </div>

            <div className='header-right'>
                <Filter />
                <Search />
                <div>
                    <button>Add New Component</button>
                </div>
            </div>
        </div>
    );
}

export default HeaderTwo;