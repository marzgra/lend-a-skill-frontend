import React, {Component} from 'react';
import {Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem} from 'reactstrap';

import img1 from '../../images/carousel/carousel (1).jpg';
import img2 from '../../images/carousel/carousel (2).jpg';
import img3 from '../../images/carousel/carousel (3).jpg';
import img4 from '../../images/carousel/carousel (4).jpg';

import './MyCarousel.css';

const items = [
    {
        src: img1,
        header: 'Wymień się umiejętnościami',
        caption: 'Udziel korepetycji z matematyki w zamian za lekcje angielskiego!'
    },
    {
        src: img2,
        header: 'Praca w grupie',
        caption: 'Nic nie wpływa bardziej na kreatywność niż burza mózgów!'
    },
    {
        src: img3,
        header: 'Znajdź ludzi z podobnymi pasjami',
        caption: 'Masz nietypowe hobby? Tutaj napewno znajdziesz ludzi o podobnych zainteresowaniach!'
    },
    {
        src: img4,
        header: 'Myślisz, że niewiele wiesz?',
        caption: 'Dla kogoś początkującego na pewno będziesz wartościowym wsparciem!'
    }
];

export default class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render() {
        const {activeIndex} = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText}/>
                    <CarouselCaption captionText={item.caption} captionHeader={item.header}/>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>
        );
    }
}