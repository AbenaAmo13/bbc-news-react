import React, { Component } from 'react';

/* Import card so you will be able to use the card component*/
import {Card, CardDeck, CardImg, Carousel, CarouselItem} from "react-bootstrap";

/* Import the first article into the carousel*/
import Article1 from './article1'
import Article2 from "./article2";



class AllArticles extends Component{
    render(){
        return(
            <Carousel>
                <CarouselItem>
                    <Article1></Article1>
                </CarouselItem>
                <CarouselItem>
                <Article2></Article2>
                </CarouselItem>


            </Carousel>

            );
    }
}

export default AllArticles;