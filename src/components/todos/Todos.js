import axios from "axios";
import React from "react";
import useRequest from "../../hooks/useRequest";

const Todos = () => {
  const [todos, loading, error] = useRequest(fetchTodos);
  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
   return <h1>Something wrong...</h1>;
  }
  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} style={{ padding: 30, border: "1px solid black" }}>
            {todo.id} | {todo.title}
          </div>
        ))}
    </div>
  );
};

export default Todos;
