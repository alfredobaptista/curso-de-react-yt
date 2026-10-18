import { useState } from 'react';
import Input from './Input';


function AddTask({ onAddTaskClick }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            
   
            <Input
                type="text" 
                placeholder="Digite o título da tarefa" 
                value={title} onChange={(e) => setTitle(e.target.value)}>
            </Input>

            <Input 
                type="text" 
                placeholder="Digite a descrição da tarefa" 
                value={description} onChange={(e) => setDescription(e.target.value)}>
            </Input>
            
            <button className="bg-slate-950 text-white px-4 py-2 rounded-md" onClick={() => {
                
                if(!title.trim() || !description.trim()) {
                    return alert("Por favor, preencha todos os campos!");
                }

                onAddTaskClick(title, description);
                setTitle("");
                setDescription("");
            }}>
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;