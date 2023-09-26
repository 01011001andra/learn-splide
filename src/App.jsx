import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import RichTextEditor from "./pages/novel";
import NovelPage from "./pages/novel";
import PreTest from "./pages/pre-test";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pre-test" element={<RichTextEditor />} />
    </Routes>
  );
};

export default App;
