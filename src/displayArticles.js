import React, { Component } from 'react';
//import data from
// Import the filesystem module
//requiring path and fs modules

//'use strict';

const fs = require('fs');
const path = require('path');

const dir = './data';

function init() {
    return fs.readdirSync(dir)
        .filter(name => path.extname(name) === '.json')
        .map(name => require(path.join(dir, name)));
}

//const dataTitle = data.title
class DisplayArticles extends Component {
    render() {
        return (
            <div>
                <h3>

                </h3>
            </div>


        )

    }
}
export default  DisplayArticles;