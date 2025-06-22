import { useState } from "react";


export function NewTodoForm({ onSubmit }) { // Recebe o props que foi deinido em app.jsx para resgatar o novo item 
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return // Interrompe a função caso a String seja vazia 

        onSubmit(newItem) // chama a função que é herdada de app.jsx e recebe como parâmetro um novo item e executa a função addTodo

        setNewItem("")
    }
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}