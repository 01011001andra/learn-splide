import React, { useState } from "react";

function RichTextEditor() {
  const [audioSrc, setAudioSrc] = useState(null);

  // Fungsi untuk memainkan audio
  const playAudio = () => {
    if (audioSrc) {
      const audio = new Audio(`data:audio/mp3;base64,${audioSrc}`);
      audio.play();
    }
  };

  // Fungsi untuk menangani perubahan input file
  const handleAudioInputChange = (event) => {
    const audioFile = event.target.files[0];
    if (audioFile) {
      convertBlobToBase64(audioFile)
        .then((base64Audio) => {
          setAudioSrc(base64Audio);
          console.log(base64Audio);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Fungsi untuk mengonversi blob audio ke base64
  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(blob);
    });
  };

  return (
    <div>
      <input type="file" accept="audio/*" onChange={handleAudioInputChange} />
      <button onClick={playAudio}>Mainkan Audio</button>
    </div>
  );
}

export default RichTextEditor;
