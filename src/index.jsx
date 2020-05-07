import * as $ from 'jquery'; // импорт библиотеки jquery - *(импортировать все) as(в) $(переменную)
import Post from '@models/Post'; // импорт файла Post
import './styles/styles.css'; // импорт стилей
import json from './assets/json'; // импорт json
import WebpackLogo from './assets/webpack-logo'; // импорт картинок
import xml from './assets/data.xml'; // импорт xml
import csv from './assets/data.csv'; // импорт csv
import './styles/less.less'; // импорт стилей less
import './styles/scss.scss'; // импорт стилей scss
import './babel.js'; // импорт и подключение babel.js
import React from 'react'; // импорт React
import {render} from 'react-dom';


const post = new Post('Webpack Post Title', WebpackLogo);

$('pre').addClass('code').html(post.toString());

const App = () => (
    <div className="container">
        <h1>Webpack</h1>

        <hr />
        <div className="logo"></div>

        <hr />

        <pre></pre>

        <hr />

        <div className="box">
            <h2>LESS</h2>
        </div>

        <hr />

        <div className="card">
            <h2>SCSS</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'));

// console.log('Post', post);

// console.log('JSON', json);

// console.log('XML', xml);

// console.log('CSV', csv);
