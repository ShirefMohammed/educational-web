import './App.css';
import './styles/all.min.css'
import './styles/normalize.css'
import Home from './component/Home/Home.jsx'
import About from './component/About/About'
import Courses from './component/Courses/Courses'
import Offerings from './component/Offerings/Offerings';
import News from './component/News/News'
import Locations from './component/Locations/Locations';
import Manage from './component/Manage/Manage'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <>
      <Home/>
      <About/>
      <Courses/>
      <Offerings/>
      <News/>
      <Locations/>
      <Manage/>
      <Footer/>
    </>
  );
}

export default App;
