import React, { Component } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


/* Import card so you will be able to use the card component*/
import {Card, CardDeck, CardImg, Carousel, CarouselItem} from "react-bootstrap";

/* Import the first article into the carousel*/



import MediaCard from "./article-1";
import data from "./data/article-1.json";
import article2 from "./data/article-2.json";
import article3 from "./data/article-3.json";
import article4 from "./data/article-4.json";
import article5 from "./data/article-5.json";

import {Box, Grid, Typography, Tabs, Tab} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import MediaCard2 from "./article-2";
import MediaCard3 from "./article-3";
import MediaCard4 from "./article-4";
import MediaCard5 from "./article-4";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow : 1,

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));
export default  function AllArticles() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                        >
                            <Tab label={data.title} {...a11yProps(0)} />
                            <Tab label={article2.title} {...a11yProps(1)} />
                            <Tab label={article3.title} {...a11yProps(2)} />
                            <Tab label={article4.title} {...a11yProps(3)} />
                            <Tab label={article5.title} {...a11yProps(4)} />

                        </Tabs>
                    </Grid>
                    <Grid item xs={9}>
                        <TabPanel value={value} index={0}>
                            <MediaCard></MediaCard>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <MediaCard2></MediaCard2>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <MediaCard3></MediaCard3>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <MediaCard4></MediaCard4>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <MediaCard5></MediaCard5>
                        </TabPanel>




                    </Grid>

                </Grid>
            </div>

            );
}

