import React, { Component } from 'react';
import '../styles/intro.css'
import '../styles/arrow.css'
import Arrow from '../assets/arrow.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'

class Intro extends Component {
    constructor() {
        super();
        this.state = {
            titleWords: '<Victor_Aro/>'.split(''),
            subtitleWords: 'Software Developer'.split(''),
            title: '',
            subtitle: ''
        }
    }

    // componentDidMount = () => {
    //     var i = 0
    //     var interval = setInterval(() => {
    //         this.setState({ title: this.state.title + this.state.titleWords[i] })
    //         i++
    //         if (i === this.state.titleWords.length) {
    //             clearInterval(interval)
    //             this.fillSubtitle()
    //         }
    //     }, 100);
    // }

    fillSubtitle() {
        var i = 0
        var interval = setInterval(() => {
            this.setState({ subtitle: this.state.subtitle + this.state.subtitleWords[i] })
            i++
            if (i === this.state.subtitleWords.length) {
                clearInterval(interval)
                this.titleLoop()
            }
        }, 50);
    }

    titleLoop() {
        var i = 0
        setInterval(() => {
            if (i === 0) {
                this.setState({ subtitle: 'Software Developer.' })
                i = 1
            } else {
                this.setState({ subtitle: 'Software Developer. |' })
                i = 0
            }
        }, 600);
    }

    render() {
        return (
            <div id="introBox" style={{ width: '100%', position: 'fixed', height: window.innerHeight, transition: 'ease-in, 200ms' }} >
                <div id="introTitles" style={{ position: 'absolute', top: window.innerHeight / 2.7 }}>
                    <h1 className="title">asdasd</h1>
                    <h2 className="subtitle">asd</h2>
                </div>
                <div style={{ position: 'absolute', right: 0 }}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/victor-galves-aro-4771611a4/"><img className="socialMediaIcons" alt="linkedin" style={{ padding: 5 }} src={linkedin} /></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Shanji_ra"><img className="socialMediaIcons" alt="twitter" style={{ padding: 5 }} src={twitter} /></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/shanjii"><img className="socialMediaIcons" alt="github" style={{ padding: 5 }} src={github} /></a>
                </div>
                <div className="arrowBox" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <a href="#content">
                        <img alt="arrow" className="arrow" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} width={50} src={Arrow} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Intro;
