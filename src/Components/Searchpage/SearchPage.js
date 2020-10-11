import { Button } from '@material-ui/core'
import React from 'react'
import Cardssearch from "../CardsSearch/Cardssearch";
import "./searchpage.css"
// import HouseIcon from '@material-ui/icons/House';


export default function SearchPage() {
    return (


        <div className="searchpage">

            <div className="search__info">


                <p>62 stays . 26 august to 30 . 2 guest</p>
                <h1>STAYS NEARBY</h1>

                <div className="tags">
                    <Button variant="outlined">
                        Cancellation Flexibility
                </Button>
                    <Button variant="outlined">
                        Type of pice
                </Button>
                    <Button variant="outlined">
                        Price
                </Button>
                    <Button variant="outlined">
                        Rooms and beds
                </Button>
                    <Button variant="outlined">
                        More filters
                </Button>
                </div>


                <div className="listbnb">
                    <Cardssearch />
                    <Cardssearch />
                    <Cardssearch />
                    <Cardssearch />
                </div>
            </div>



        </div>
    )
}
