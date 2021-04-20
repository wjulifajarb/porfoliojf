import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import Galery from './components/porfolio'
import About from './components/about'
import Timeline from './components/timeline'
import Porfolio from './components/porfolio';

class App extends Component {
    render() {
        return ( <
            div id = "colorlib-page" >
            <
            div id = "container-wrap" >
            <
            Sidebar > < /Sidebar> <
            div id = "colorlib-main" >
            <
            Introduction > < /Introduction> <
            About > < /About> 

            <
            Galery > < /Galery>

            <
            Timeline > < /Timeline> < /
            div > <
            /div>  < /
            div >
        );
    }
}

export default App;