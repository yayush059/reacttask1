import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function WordCounter(){
    const [count,setCount]=useState(0);
    const counter=(event)=>{
        const input=event.target.value;
        const words = input.split(/\s+/).filter(word => word !== '');
        setCount(words.length);
        console.log(words)
    }
    return(
        <div class="card shadow rounded-5 p-5 col-6 container my-5" data-bs-theme="light"> 
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea onChange={counter} class="p-3" style={{height:200}}></textarea>
            <p class="text-start my-3">Word Count: {count}</p>
        </div>
    )
}