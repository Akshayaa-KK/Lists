import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export default function App(){

  const [userInput,setuserInput]=useState(" ")
  const [fruitList,setfruitList]=useState([])


   useEffect(()=>{
     
    axios.get("http://localhost:5000/fruits")
    .then((data)=>{
      console.log(data.data)
      setfruitList(data.data)
    })

   },[])

   let addFruit=()=>{
    axios.post("http://localhost:5000/addfruits",{newfruit:userInput})
    setfruitList([...fruitList,{name:userInput}])
    setuserInput(" ")

   }

   let handleUserInputChange=(event)=>{
    setuserInput(event.target.value)
   }


  return(
  <div>
    <input value={userInput} onChange={handleUserInputChange}></input>
    <button onClick={addFruit}>Add</button>
    {
      fruitList.map((item,index)=>{
        return(<h4 key={index}>{item.name}</h4>)
      })
    }
  </div>)
}