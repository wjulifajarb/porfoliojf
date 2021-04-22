import React, { Component } from 'react'


export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpeg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Wendy Juliana Fajardo </a></h1>
              <span className="email"><i className="icon-mail"></i> juliana.fajardo92@gmail.com</span>
              <span className="movil"><i className="icon-phone"></i> 57+ 1 3054359526</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#porfolio" data-nav-section="porfolio">Porfolio</a></li>
                  {/*<li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                  
                </ul>
              </div>
            </nav>

            <div className="colorlib-footer">

              <p><small>Made with love and inspiration</small></p>
              <p><small>¡Suelta y Confía!</small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
