import React, { useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Add question
  const addQuestion = () => {
    if (!currentQ.trim()) return;

    const newQuestion = {
      id: Date.now(),
      text: currentQ,
      options: options.filter((opt) => opt.trim() !== ""),
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQ("");
    setOptions(["", ""]);
  };

  // Delete question
  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  // Handle option change
  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  // Add more option field
  const addOptionField = () => {
    setOptions([...options, ""]);
  };

  // Handle answer selection
  const handleAnswer = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  // Submit quiz
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation: all questions answered
    for (let q of questions) {
      if (!answers[q.id]) {
        alert("Please answer all questions");
        return;
      }
    }

    setIsSubmitted(true);
  };

  // Retake quiz
  const handleRetake = () => {
    setAnswers({});
    setIsSubmitted(false);
  };

  // ===== RESULTS SCREEN =====
  if (isSubmitted) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>📊 Results</h2>

        {questions.map((q) => (
          <div key={q.id} style={{ marginBottom: "15px" }}>
            <h4>{q.text}</h4>
            <p>
              Your answer: <b>{answers[q.id]}</b>
            </p>
          </div>
        ))}

        <button onClick={handleRetake}>Retake Quiz</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Survey / Quiz Builder</h2>

      {/* ===== CREATE QUESTION ===== */}
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <input
          placeholder="Question text"
          value={currentQ}
          onChange={(e) => setCurrentQ(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <h4>Options</h4>

        {options.map((opt, i) => (
          <input
            key={i}
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={(e) => handleOptionChange(i, e.target.value)}
            style={{ display: "block", marginBottom: "5px", width: "100%" }}
          />
        ))}

        <button onClick={addOptionField}>Add Option</button>
        <button onClick={addQuestion} style={{ marginLeft: "10px" }}>
          Add Question
        </button>
      </div>

      {/* ===== QUESTION LIST ===== */}
      <h3 style={{ marginTop: "20px" }}>Questions</h3>

      {questions.map((q) => (
        <div
          key={q.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h4>{q.text}</h4>

          {q.options.map((opt, i) => (
            <label key={i} style={{ display: "block" }}>
              <input
                type="radio"
                name={q.id}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleAnswer(q.id, opt)}
              />
              {opt}
            </label>
          ))}

          <button onClick={() => deleteQuestion(q.id)}>Delete</button>
        </div>
      ))}

      {/* SUBMIT */}
      {questions.length > 0 && (
        <button onClick={handleSubmit}>Submit Quiz</button>
      )}
    </div>
  );
}

export default App;