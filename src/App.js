import { useState } from "react";

function App() {

  const [check, setCheck] = useState(false)

  const [todos, setTodos] = useState([])

  const [text, setText] = useState('')

  function toggleCheck(e){
    setCheck(e.target.checked)
  }

  function handlerChange(e){
    setText(e.target.value)
  }

  function handlerBtn(){
    setTodos([
      {
        text: text,
        check: check
      },
      ...todos
    ])
  }
  return (
    <div className="App">

      <div className="inputs">
        <input className="text" type='text' placeholder="Введите сообщение..." value={text} onChange={handlerChange}/>
        <input className="checkbox" type='checkbox' checked={check} onChange={toggleCheck}/>
        <button className="btn" onClick={handlerBtn}>→</button>
      </div>

      {todos.map(item =>{
        return(
        <li>
          <div className="test">
          {item.check ?  <>
            {item.text}
            <input className="checkboxTodo" type='checkbox' checked={item.check} />
          </> : item.text}
          </div>
        </li>
        )
      })}
    </div>
  );
}

export default App;