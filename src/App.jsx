import { useEffect, useState, useRef } from "react";
import Header from "./compenents/Header"
import "./index.css"
import Feedbackitem from "./compenents/Feedbackitem";
import FeedbackForm from "./compenents/FeedbackForm";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./compenents/Footer";

function App() {

  const toast = useRef(null);
  useEffect(() => {
    const storedFeedback = localStorage.getItem("item");
    if (storedFeedback) {
      setFeedBack(JSON.parse(storedFeedback));
    }
  }, []);
  

  const [feedback, setFeedBack] = useState([]);

  useEffect(() => {
    localStorage.setItem("item",JSON.stringify(feedback))
  },[feedback])

  // delete function 
  const handleDelete = (id) => {
    setFeedBack ( feedback.filter((item) => (item.id!==id) )) // entha id match aagalayo antha id matum display pannnum
  }

  // add function
  const addToFeedBack = (text) => {
    const uid = uuidv4();
    setFeedBack([...feedback, {
      id:uid,
      text:text,
    }]);
  }

  return (
    <>
     <Router>
        <Header text="Word Vault " bgColor="blue" txtColor="white"/>
        <Routes>
          <Route path="/" element={
           <div className="container">
             <FeedbackForm onItemAdd={addToFeedBack}/> {/** onItemAdd ithu namma vaikura name athula addToFeedBack func aa pass panrom */}
             <Feedbackitem feedback={feedback} onDelete={handleDelete}/>
           </div>
          }>
          </Route>
        </Routes>
        <Footer/>
     </Router>
    </>
  )
}

export default App
