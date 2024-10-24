/*import { useState } from 'react'
import './App.css'

function App() {
  const [newItem,setNewItem]=useState("");
  const [items,setItems] = useState([]);
  function addItem(){

    if(!newItem){
      alert("görev gir");
      return;
    }

    const item = {
      id: Math.floor(Math.random()*1000),
      value : newItem
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
    console.log(items)

  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <>
      <div className='App'>
        <h1>Todo List App</h1>

        <input  type="text"
        placeholder='yapılacaklar ekle'>
        
        </input>
        <button onClick={()=>addItem()}> Görev Ekle</button>
        <ul>
          <li>Uyanılacak</li>
          <li>Ofise Gelinecek </li>
          <li>Verilen Ödevler Yapılacak</li>
          <li>Eve Dönülecek</li>
        </ul>
        
      </div>
     
    </>
  )
}

export default App*/

import React ,{useState} from 'react';
import './App.css';

function App() {

  const [newItem,setNewItem]=useState("");
  const [items,setItems] = useState([]);


  function addItem(){

    if(!newItem){
      alert("görev gir");
      return;
    }

    const item = {
      id: Math.floor(Math.random()*1000),
      value : newItem
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
    console.log(items)

  }

  function deleteItem(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
   <div className="App">
      <h1>Todo List App</h1>
      <form onSubmit={(e)=> {
        e.preventDefault();
        addItem();
      }}>
      <input 
      type="text"
      placeholder='görev ekle'
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />
      </form>
      <button onClick={(e) => addItem()}>ekle</button>

      <ul>
       {items.map(item => {
        return <li key={item.id}> {item.value} <button onClick={e => deleteItem(item.id)}>X</button>  </li>
       })}
      </ul>
    </div>
  );
}

export default App;