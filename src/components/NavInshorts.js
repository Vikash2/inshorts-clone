import React from 'react'
import HamburgerDrawer from './HamburgerDrawer';

import "./NavInshorts.css"

const NavInshorts = ({ setCategory }) => {
    return (
        <div className='nav'>
            <div className="icon">
                <HamburgerDrawer setCategory={setCategory} />
            </div>
            <a href='https://vikash2.github.io/inshorts-clone/' className='home'>
                <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
                    height="80%" alt='logo'
                    style={{ cursor: "pointer" }} />
            </a>
        </div>
    )
}

export default NavInshorts;
