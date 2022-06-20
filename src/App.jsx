import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (event) => event.target.value;

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div>
        <input
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>未完了</p>
        <ul>
          {incomleteTodos.map((todo) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}

          <div>
            <li>いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>未完了</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo}>
                <li>うううう</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
