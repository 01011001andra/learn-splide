import React, { useState } from "react";
import useBearStore from "../../store";
import questions from "../../utils/pertanyaan";

const PreTest = () => {
  const [currentSoal, setCurrentSoal] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);
  const { addResult } = useBearStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const selectedValue = formData.get(currentSoal);

    if (selectedValue === null) {
      alert("Pilih jawaban sebelum melanjutkan.");
      return;
    }

    setSelectedValue({ currentSoal: selectedValue });

    // Inkremenkan currentSoal di sini jika perlu
    if (currentSoal < questions.length - 1) {
      setCurrentSoal((prev) => prev + 1);
      setSelectedValue({ answer: selectedValue });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <span>{questions[currentSoal]?.question}</span>
          {questions[currentSoal]?.options?.map((item) => {
            return (
              <div className="flex gap-3 items-center" key={item.id}>
                <input
                  type="radio"
                  id={item.id}
                  name={currentSoal}
                  value={item.text}
                  checked={selectedValue === item.text}
                  onChange={() => setSelectedValue(item.text)}
                />
                <label htmlFor={item.id}>{item.text}</label>
              </div>
            );
          })}
          <button className="btn btn-primary" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreTest;
