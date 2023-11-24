import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import NoPage from "./pages/NoPage";
import Tasks from "./pages/Tasks";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks />}>
            <Route path="task1" element={<Task1 />} />
            <Route path="task2" element={<Task2 />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
