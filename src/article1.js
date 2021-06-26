import React, { Component } from 'react';
import data from "./data/article-1.json";
import {Card} from "react-bootstrap";

const title = data.title;

const body = data.body
const bodyModel = body.map((bodyModelDetails, key)=>{
    return(

            bodyModelDetails.model
    )})




class Article1 extends Component{
    render(){
        return(
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        {body.map((bodyDetail, key)=>{
                        return (
                            <div key={0}>
                            {
                                bodyDetail.type
                            }
                                {bodyModel.map((bodyDetail, key)=>{
                                    return(
                                        <div key={key}>
                                            {
                                                bodyDetail.text

                                            }
                                        </div>

                                    );
                                })}
                        </div>

                        );
                    })}
                       <div>
                           {body[5].type}
                           {bodyModel[5].type}
                       </div>




                    </Card.Body>
                </Card>

            </div>
            );
    }
}

export default Article1;