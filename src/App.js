import Intro from './components/intro';
import { Sidebar } from './components/navbar'
import { Content } from './components/content'
import './styles/global.css'

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
