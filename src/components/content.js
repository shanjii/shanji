import '../styles/content.css'
window.onresize = () => {
    document.getElementById("content").style.height = window.innerHeight + 'px'
}

export function Content() {
    return (
        <div id="content" style={{ height: '1000px', position: 'relative', top: window.innerHeight}}>
            
        </div>
    )
}