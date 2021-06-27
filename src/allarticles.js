import React, { Component } from 'react';

/* Import card so you will be able to use the card component*/
import {Card, CardDeck, CardImg, Carousel, CarouselItem} from "react-bootstrap";

/* Import the first article into the carousel*/
import Article1 from './article1'
import Article2 from "./article2";
import Article3 from "./article3"
import Article4 from "./article4"


class AllArticles extends Component{
    render(){
        return(
            <Carousel>
                {/* Display the first article in a carousel/slide*/}
                <CarouselItem>
                    <Article1></Article1>
                </CarouselItem>
                {/* Display the second article in a carousel/slide*/}
                <CarouselItem>
                <Article2></Article2>
                </CarouselItem>
                {/* Display the third article in a carousel/slide*/}
                <CarouselItem>
                    <Article3></Article3>
                </CarouselItem>
                <CarouselItem>
                    <Article4></Article4>
                </CarouselItem>

            </Carousel>

            );
    }
}

export default AllArticles;