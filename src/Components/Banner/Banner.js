import React, { useState } from 'react'
import "./banner.css"
import { Button } from "@material-ui/core";
import Search from "../Search/Search";
import { useHistory } from "react-router-dom";



export default function Banner() {
    const history = useHistory()
    const [showsearch, setshowsearch] = useState(false)

    return (


        <div className="banner">

            <div className="banner__search">

                {showsearch && <Search />}


                <Button

                    onClick={() => {
                        setshowsearch(!showsearch)
                    }}
                    className="banner__searchButton" variant="outlined">Explore Nearby</Button>

            </div>




            <div className="banner__info">
                <h1>Get out and Streach your imagination</h1>
                <h5>
                    Plan a different kind os gateway to uncover the hidden gems newr you </h5>
                <Button
                    variant="outlined" onClick={() => history.push('/search')}>Explore Nearby</Button>


            </div>
        </div >
    )
}
