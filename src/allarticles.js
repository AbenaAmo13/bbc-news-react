import React, { Component } from 'react';

/* Import card so you will be able to use the card component*/
import {Card, CardDeck, CardImg, Carousel, CarouselItem} from "react-bootstrap";

/* Import the first article into the carousel*/
import Article1 from './article1'
import Article2 from "./article2";
import Article3 from "./article3"
import Article4 from "./article4"
import Article5 from "./article5";
import MediaCard from "./testArticle";
import {Box, Grid, Typography, Tabs, Tab} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";




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
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                            <Tab label="Item Three" {...a11yProps(2)} />
                            <Tab label="Item Four" {...a11yProps(3)} />
                            <Tab label="Item Five" {...a11yProps(4)} />

                        </Tabs>
                    </Grid>
                    <Grid item xs={9}>
                        <TabPanel value={value} index={0}>
                            <MediaCard></MediaCard>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Four
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            Item Five
                        </TabPanel>




                    </Grid>

                </Grid>
            </div>

            );
}

