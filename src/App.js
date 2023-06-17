import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import ProfilePic from "./components/ProfilePic"
import AboutMe from "./components/AboutMe"
import WorkShowcase from "./components/WorkShowcase"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Header></Header>
      <ProfilePic></ProfilePic>
      <AboutMe></AboutMe>
      <WorkShowcase></WorkShowcase>
      <Footer></Footer>
    </>)
}

export default App;
