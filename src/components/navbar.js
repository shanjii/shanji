import avatar from '../assets/shanji.png'
import home from '../assets/home.png'
import code from '../assets/code.png'
import '../styles/navbar.css'

export function Sidebar() {
    return (
        <div className="sidebar" style={{position: 'fixed', height: '100vh', zIndex: 100 }}>
            <div style={{ marginLeft: 14, paddingTop: 20 }}>
                <img alt="avatar" style={{borderStyle: 'solid', borderRadius: 500, borderColor: 'white'}} className="avatar" src={avatar} />
            </div>
            <div style={{ position: 'fixed', top: '43vh' }}>
                <ul>
                    <li className="navButton" style={{ display: 'flex', paddingLeft: 23, paddingTop: 10, paddingBottom: 10, paddingRight: 64 }}><img alt="home" className="navIcon" width={60} src={home} /><p className="navButtonText" style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 30 }}>HOME</p></li>
                    <br />
                    <li className="navButton" style={{ display: 'flex', paddingLeft: 23, paddingTop: 10, paddingBottom: 10, paddingRight: 64 }}><img alt="projects" className="navIcon" width={60} src={code} /><p className="navButtonText" style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 30 }}>PROJECTS</p></li>
                </ul>
            </div>
        </div>
    )
}