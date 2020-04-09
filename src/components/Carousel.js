import React from 'react';

import Card from '../components/Card';

import seasonImage from '../assets/images/browser-4-season-all-app.gif';
import phlaskImage from '../assets/images/browser-4-phlask.gif';
import arduinoImage from '../assets/images/browser-4-arduino.gif';
import directoryImage from '../assets/images/browser-4-react-user-search.png';
import pianoImage from '../assets/images/browser-4-piano.gif';
import weatherImage from '../assets/images/browser-4-weather-api.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Season All',
                    subTitle: 'Full stack app where users can discover and track new hiking trails',
                    imgSrc: seasonImage,
                    link: 'https://github.com/waltribeiro/season-all-app',
                    link2: 'http://waltrib.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Phlask',
                    subTitle: 'Civic Tech project that is mapping all the water fountains in Philadelphia',
                    imgSrc: phlaskImage,
                    link: 'https://github.com/waltribeiro',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Music Theremin',
                    subTitle: '32-bit ARM microcontroller using light to create sound',
                    imgSrc: arduinoImage,
                    link: 'https://github.com/waltribeiro',
                    selected: false
                },
                {
                    id: 3,
                    title: 'React.js Directory',
                    subTitle: 'A searchable user directory built with React.js, Redux, and Router',
                    imgSrc: directoryImage,
                    link: 'https://github.com/waltribeiro',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Playable Piano',
                    subTitle: 'A piano that can be played on a phone, desktop, or MIDI keyboardYouTube channel',
                    imgSrc: pianoImage,
                    link: 'http://piano.waltrib.com',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Weather App',
                    subTitle: 'A weather forecast using 2 nested ajax calls on Open Weather\'s API',
                    imgSrc: weatherImage,
                    link: 'https://github.com/waltribeiro',
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;