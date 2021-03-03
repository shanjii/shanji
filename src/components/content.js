import '../styles/content.css'
window.onresize = () => {
    document.getElementById("content").style.height = window.innerHeight + 'px'
}

export function Content() {
    return (
        <div id="content" style={{ height: window.innerHeight, position: 'relative', top: '100vh'}}>
            
        </div>
    )
}