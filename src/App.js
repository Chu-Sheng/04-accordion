import React from 'react';
import data from  './data';
import SingleQuestion from './Question' 
function App() {
  // const [questions, setQuestions] = useState(data);
  const questions = data;
  
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        {questions.map((question) => {
          return (
            <section className="info">
              <SingleQuestion key={question.id} {...question}/>
            </section>
          )
        })}
      </div>
    </main>
  )
}

export default App