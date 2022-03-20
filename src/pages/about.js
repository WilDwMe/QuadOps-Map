import React from "react";

const About = () => {
    return (
        <div className="container pt-4">
            <div className="jumbotron">
                <h1 className="display-4">Привед!</h1>
                <p className="lead">Здесь могло бы быть какое то описание</p>
                <hr className="my-4"/>
                    <p>Но к сожалению на данный момент в голову ничего не приходит</p>
                    <a className="btn btn-primary btn-sm" href="/" role="button">Go back to the Map </a>
            </div>
        </div>  
    );
}

export default About;