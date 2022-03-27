import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container pt-4">
            <div className="jumbotron">
                <h1 className="display-4">О проекте</h1>
                <p className="lead">Здесь могло бы быть какое то описание</p>
                <hr className="my-4"/>
                    <p>Но к сожалению на данный момент в голову ничего не приходит</p>
                    <Link className="btn btn-primary btn-sm" to="/" role="button">Go back to the Map</Link>
            </div>
        </div>  
    );
} 

export default About;