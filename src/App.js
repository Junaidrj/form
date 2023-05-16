import  React from "react"
import Blockchain from "./components/Blockchain";
import Employer from "./components/employer";
import Expoler from "./components/expoler";
import Footer from "./components/footer";
import JobSeeker from "./components/jobSeeker";
import Lettalk from "./components/lettalk";
import Navbar from './components/navbar';
import Profile from "./components/profile";
import "./App.css"
function App() {
  return (
    <>
    <Navbar/>
    <Blockchain/>
    <Profile/>
     <JobSeeker/>
     <Employer/>
     <Expoler/>
     <Lettalk/>
     <Footer/>
    </>
    
  );
}

export default App;
