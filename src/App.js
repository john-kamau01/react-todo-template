import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h1>Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Best ReactJS Tutorials" />
      <Todo text="I enjoy learning React" />
    </div>
  );
};

export default App;
