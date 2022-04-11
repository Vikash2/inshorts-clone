import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <span className="name">Inshorts clone made by - {" "}<a href="https://www.linkedin.com/in/vikash1109/" target="__blank">
                Vikash Kumar Pandit
            </a></span>
            <hr style={{ width: "90%" }} />
            <a href="https://github.com/Vikash2" target="__blank">
                <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
            </a>
        </div>
    )
}

export default Footer