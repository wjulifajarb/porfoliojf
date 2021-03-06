import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage : 'url(images/img_bg.png )'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Hi, I'm Juli! <br /> Full Stack Developer</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/drive/folders/1whqEyW9WqtdrkuyR8tEhW3rtkhQRBVBz?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg2.png)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1> And <br />Graphic designer</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/wjulifajarb?tab=repositories" target="_blank" rel="noopener noreferrer">View Projects</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
               
              <li style={{backgroundImage: 'url(images/img_bg3.png)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1> And <br/>Political scientist </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001763383" target="_blank" rel="noopener noreferrer">View CVlac </a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/img_bg3.png)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1> And <br/>Political scientist </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://orcid.org/0000-0003-1894-6526" target="_blank" rel="noopener noreferrer">View OrcID</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
