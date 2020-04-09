import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

            <Content>
            <p>Hello - I'm Walt. I'm an experienced MERN developer (MySQL, Express.js, React.js, and Node.js). I also know Javascript, TDD, CLI, and Linux.</p>

            <p>Take a look at <a href="http://projects.waltrib.com" target="_blank" rel="noopener noreferrer">my projects</a> or <a href="http://certs.waltrib.com" target="_blank" rel="noopener noreferrer">my certifications</a>.</p>

            </Content>
        </div>
    );

}

export default AboutPage;