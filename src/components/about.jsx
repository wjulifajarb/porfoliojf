import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Hi, I am  Juliana Fajardo and proudly Colombian! I am currently a student of the professional career in Political Science at UNAD and the FULLSTACK program development program at Educamas.</p>
                    <p>I also developed a technologist in graphic design and advertising and art historian, I am passionate about information technologies, especially guided towards education and knowledge transfers.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">

                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites, App using and web systems using programming languages (HTML, CSS, JavaScript, Node.js, React, PHP and others).</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <div className="desc">
                    <h3>DATABASE</h3>
                    <p>I have experience in the creation of systems that allow to maintain, modify and consult information in an agile, safe way, I also have an introduction to database modeling.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <div className="desc">
                    <h3>Work Methodologies</h3>
                    <p>I have experience in the clear and efficient registration of the application process in the different stages of web development through agile methodologies and SCRUM.</p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}
