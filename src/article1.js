import React, { Component } from 'react';
import data from "./data/article-1.json";
import {Card} from "react-bootstrap";

const title = data.title;

const body = data.body

class Article1 extends Component{
    render(){
        return(
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    </Card.Body>
                </Card>

            </div>
            );
    }
}

export default Article1;