import Intro from './components/intro';
// import { Sidebar } from './components/navbar'
import { Content } from './components/content'
import './styles/global.css'
window.onresize = () => {
  document.getElementById("introBox").style.height = window.innerHeight + 'px'
  document.getElementById("introTitles").style.height = window.innerHeight / 2.7 + 'px'
  document.getElementById("content").style.top = window.innerHeight + 'px'
}

function App() {
  return (
    <div className="background">
      {/* <Sidebar /> */}
      <div>
        <Intro />
        <Content />
      </div>
    </div>
  );
}

export default App;
