import React from 'react'
import "./header.css"
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="header">

            <Link to="/" >
                <img className="header__icon" src={require('../../Assests/logo.png')} alt="..." />
            </Link>


            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div >
    )
}

