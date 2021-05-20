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
              <span className="email">juliana.fajardo92@gmail.com</span>
              <span className="movil"> 57+ 1 3054359526</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
              <p><a className="btn btn-primary1 btn-learn" href="https://drive.google.com/file/d/1mT7M_d65yXoaqYuUotsy_qXIxTVFf1pi/view?usp=sharing" target="_blank" rel="noopener noreferrer"> ViewCV</a></p>
              <p><a className="btn btn-primary2 btn-learn" href="https://github.com/wjulifajarb?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></p>
              <p><a className="btn btn-primary3 btn-learn" href="https://www.linkedin.com/in/julianafajardo/" target="_blank" rel="noopener noreferrer">LinkedIN</a></p>
            </nav>
            <p><small>¡!</small></p>
            
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
