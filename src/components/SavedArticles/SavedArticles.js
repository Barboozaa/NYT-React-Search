import React from "react";
import { Card, CardHeader, CardBody } from 'reactstrap';

const SavedArticles = props => (
    <Card className="saved-articles main-content-section" id="articles">
        <CardHeader>
            <h2 class="card-header">Saved articles</h2>
        </CardHeader>
        <CardBody>
            <ul className="list-group search-results">
                {props.results.map(result => (
                    <li key={result} className="list-group-item">
                        <h3>{ props.title }</h3>
                        <p>{ props.snippet }</p>
                        <p>Published on { props.date }</p>
                        <a rel="noreferrer noopener" target="_blank" href={ props.url }>
                            <button className="btn btn-primary">Continue reading</button>
                        </a>
                    </li>
                ))}
            </ul> 
        </CardBody>
    </Card>
);

export default SavedArticles;
