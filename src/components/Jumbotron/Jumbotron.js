import React from 'react';

import { Jumbotron } from 'reactstrap';

import './Jumbotron.css';

const NYTJumbotron = (props) => {
    return (
        <div className="header">
            <Jumbotron className="text-center jumbotron">
                <h1 className="display-3">New York Times React Search</h1>
            </Jumbotron>
        </div>
    );
};

export default NYTJumbotron;

