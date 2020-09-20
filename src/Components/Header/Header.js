import React from 'react';
import './Header.css';
import Background from '../../image/image-analysis.png';
import MiniBackground from '../../image/img_forest.jpg';

const Header = () => {
    const makeStyle = { 
        height: '700px',
        backgroundImage: `url(${Background})`
     }
    return (
        <div style={makeStyle} className="header">
            <div className="coxbazar">
                <h2>COX'S BAZAR</h2>
                <button>Book Now</button>
            </div>
            <div style={{backgroundImage:`url(${MiniBackground})`}}  className="sreemangal">
                <h2>SREEMANGAL</h2>
                <button>Book Now</button>
            </div>
            <div className="sundarban">
                <h2>SUNDARBAN</h2>
                <button>Book Now</button>
            </div>
        </div>
    );
};

export default Header;