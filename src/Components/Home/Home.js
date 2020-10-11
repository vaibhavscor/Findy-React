import React from 'react'
import "./home.css";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

function Home() {
    return (
        <div>
            <Banner />

            <div className="home__section">
                <Card src={require("../../Assests/home.jpg")}
                    title="Home1" description="Best homes in the losangles" price="$255" />
                <Card src={require("../../Assests/home2.jpg")}
                    title="Home1" description="Best homes in the losangles" price="$255" />
                <Card src={require("../../Assests/home3.jpg")}
                    title="Home1" description="Best homes in the losangles" price="$255" />
            </div>


            <div className="home__section">
                <Card src={require("../../Assests/home4.jpg")}
                    title="Home1" description="Best homes in the losangles" price="$255" />
                <Card src={require("../../Assests/home5.jpg")}
                    title="Home1" description="Best homes in the losangles" price="$255" />
                <Card src={require("../../Assests/home6.jpg")}
                    title="Home1" description="Best homes in the losangles" price="$255" />
            </div>

        </div>
    )
}

export default Home
