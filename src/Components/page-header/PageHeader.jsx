import React from 'react';

import './page-header.scss';

import bg from '../../assets/footer-bg.jpg';

const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2 className='text-3xl font-bold'>{props.children}</h2>
        </div>
    );
}


export default PageHeader;
