import React from 'react'
import "./Cardssearch.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default function Cardssearch() {
    return (
        <div className="search_contents">

            <div className="contianer_img">
                <img class="home_img" src={require("../../Assests/home2.jpg")} alt="..." />
            </div>

            <div className="contents_home">

                <div className="content_header">
                    <h5>Private Room in center of london</h5>
                    <FavoriteBorderIcon />
                </div>
                <h3>Stay at this spacious Edwardian House</h3>
                <br />
                <p>
                    1 guest - 1 beadroom - 1 bed - 1.5 shared bathrooms - wifi - kitchen - free parking - washing Machine
                </p>

                <div className="content_footer">
                    <h2>$500</h2>
                </div>
            </div>
        </div>
    )
}
