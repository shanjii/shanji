import React, { Component } from 'react';
import '../styles/intro.css'
import '../styles/arrow.css'
import Arrow from '../assets/arrow.svg'
import github from '../assets/github.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
var height = window.innerHeight

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

    componentDidMount = () => {
        var i = 0
        var interval = setInterval(() => {
            this.setState({ title: this.state.title + this.state.titleWords[i] })
            i++
            if (i === this.state.titleWords.length) {
                clearInterval(interval)
                this.fillSubtitle()
            }
        }, 100);
    }

    scrollToContent() {
        window.scrollTo(0, window.innerHeight)
    }

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
            <div style={{ height: (height + 'px'), width: '100%', position: 'fixed' }}>
                <div className="introTitles" style={{ position: 'absolute', top: '30vh' }}>
                    <h1 className="title">{this.state.title}</h1>
                    <h2 className="subtitle">{this.state.subtitle}</h2>
                </div>
                <div style={{ position: 'absolute', right: 0 }}>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/victor-galves-aro-4771611a4/"><img className="socialMediaIcons" alt="linkedin" style={{ padding: 5 }} src={linkedin} /></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Shanji_ra"><img className="socialMediaIcons" alt="twitter" style={{ padding: 5 }} src={twitter} /></a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/shanjii"><img className="socialMediaIcons" alt="github" style={{ padding: 5 }} src={github} /></a>
                </div>
                <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                    <img onClick={this.scrollToContent} alt="arrow" className="arrow" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} width={50} src={Arrow} />
                </div>
            </div>
        );
    }
}

export default Intro;
