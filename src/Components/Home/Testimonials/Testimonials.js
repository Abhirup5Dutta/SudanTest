import React, { useState } from 'react'
import './Testimonials.css';
import Carousel from 'react-bootstrap/Carousel';
import { IconButton } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Testimonials() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const prevSlide = () => {
        setIndex(index === 0 ? 1 : index - 1);
    }

    const nextSlide = () => {
        setIndex(index === 1 ? 0 : index + 1);
    }

    return (
        <div className='testimonials'>
            <h1 className="testimonials__heading">
                Testimonials
            </h1>
            <Carousel fade activeIndex={index} onSelect={handleSelect} controls={false} indicators={false}>
                <Carousel.Item interval={4000}>
                    <div className="testimonials__body">
                        <div className="testimonials__people">
                            <div className="testimonials__peoplebgHexagon">
                                <div className="testimonials__peopleHexagonIn">
                                    <div className="testimonials__peopleHexagonBG">

                                    </div>
                                </div>
                            </div>
                            <div className="testimonials__peoplebgHexagonImg">
                                <div className="testimonials__peopleHexagonInImg" >
                                    <div className="testimonials__peopleHexagonImg" style={{ backgroundImage: 'url("https://sudans.tech/static/media/priyanka.3c910cb9.jpg")', backgroundSize: '100% 60%' }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials__message">
                            <p className="testimonials__view">
                                "I had participated in Hack The Mountains it was a great hackathon. I really enjoyed working here with talented people, good friends, nice place, strong team and the best support I ever got. It's their support and encouragement that I can manage my work and give my best. The whole experience has been a great learning for me. Thanks to the whole team for this wonderful experience."
                            </p>
                            <h3 className='testimonials__name'>
                                Priyanka Mogga
                            </h3>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <div className="testimonials__body">
                        <div className="testimonials__people">
                            <div className="testimonials__peoplebgHexagon">
                                <div className="testimonials__peopleHexagonIn">
                                    <div className="testimonials__peopleHexagonBG">

                                    </div>
                                </div>
                            </div>
                            <div className="testimonials__peoplebgHexagonImg">
                                <div className="testimonials__peopleHexagonInImg">
                                    <div className="testimonials__peopleHexagonImg" style={{ backgroundImage: 'url("https://sudans.tech/static/media/supriya%20(2).deb5a68d.jpg")', backgroundSize: '117% 60%' }}>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials__message">
                            <p className="testimonials__view">
                                "I'm very glad to participate in the htm qubits in association with sundantech. They are doing great. It is helpful and great to learn from well-experienced mentors. I'm very much interested in open cv and cloud, the qubits helped me to gain some knowledge and hands-on experience. I want to thanks hack the mountains and looking forward to more sessions."
                            </p>
                            <br />
                            <h3 className='testimonials__name'>
                                Supriya
                            </h3>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="testimonials__controls">
                <IconButton>
                    <ArrowBackIosIcon style={{ color: 'white' }} className='testimonials__prev' fontSize='large' onClick={prevSlide} />
                </IconButton>
                <IconButton>
                    <ArrowForwardIosIcon style={{ color: 'white' }} className='testimonials__next' fontSize='large' onClick={nextSlide} />
                </IconButton>
            </div>
        </div>
    )
}

export default Testimonials
