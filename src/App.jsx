import React, { useState } from "react";
import ToDOList from "./ToDOList";

const App = () =>{
    const [list, setList] = useState("");
    const [Items, setItems] = useState([]);

    const onChangeList = (event) =>{
        setList(event.target.value)
    }

    const listItems = () =>{
        setItems((oldList) => {
            return [...oldList, list]
        })
        setList("");
    }
    const deleteList = (id) =>{
        setItems((oldList) => {
            return oldList.filter((arrayElem, index) => {
                return index !== id; 
            })
        })
    }

    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>React Todo App</h1>
                <br/>
                <input type="text" placeholder="Add a item" value={list} onChange={onChangeList}/>
                <button onClick={listItems}> + </button>
                <ol>
                    {/* <li>{list}</li> */}
                    {Items.map((itemVal, index) => {
                        return <ToDOList text={itemVal}
                            key={index}
                            id={index}
                            onSelect={deleteList}
                        />
                    })}
                </ol>
            </div>
        </div>
        </>
    );
};

export default App;