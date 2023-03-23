import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [advice, setAdvice] = useState("")
  const [adviceId, setAdviceId] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdviceId(data.slip.id)
        setAdvice(data.slip.advice)
      } catch (error) {
        console.log("error")
      }
    };
    fetchData();
  }, [])

  const handleClick = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdviceId(data.slip.id)
      setAdvice(data.slip.advice)
    } catch (error) {
      console.log("error")
    }
  };

  return (
    <div className="flex-container">
      <div className="advice-id flex-item">
      <h3>ADVICE #<span>{adviceId}</span></h3>
      </div>
      <div className="advice flex-item">
        <p><q>{advice}</q></p>
      </div>
      <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
      <div className="dice-button flex-item" onClick={handleClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
      </div>
    </div>
  );
}

export default App;
