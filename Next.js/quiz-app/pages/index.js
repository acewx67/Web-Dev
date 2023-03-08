import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
function Index(props) {
  console.log(props.responsedata);
  const [data,setData] = useState(null)
  !data && setData(props.responsedata)
  const [options,setOptions] = useState({})
  console.log(options);
  return (
    <>
    <Navbar/>
    
    {data && data.map((obj,i)=>{
     
      return(
      <div className='main' key={obj.id}>
      <div className="question">
      {i+1+'. '}{obj.question}
      </div>
      
      <div className="options">
        {obj.options.map((option,i)=>{
          return (
            <>
              <input className="radioBtn" val={option} type="radio" name={obj.id} key={i} onChange={(e)=>{handleChange(e,option)}} />
              <label>{option}</label>
              <br />
            </>
          );
        })}
      </div>
      </div>
    )})
    }
    <div className="button"><div className='submitBtn'>Submit</div></div>

    </>
  )
  function handleChange(e,val) {
    console.log(val);
    // let id = e.target.name;
    // let t = {
    //   e['target']['name'] : val,
    // }
    // setOptions(...options,{e.target.name : val})
  }
}


export default Index

export async function getStaticProps(){
  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  try{
    console.log('workig');
  const url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
  const response = await fetch(url)
  const data = await response.json()
  const propsData = []
  if(data.response_code === 0){
    data.results.map((obj, i) => {
      // console.log(obj)
      propsData.push({
        options: shuffle([
          ...data.results[i].incorrect_answers,
          data.results[i].correct_answer
        ]),
        question: obj["question"],
        correct_answer: obj["correct_answer"],
        id: "" + Math.random().toString(16).slice(2),
    });
      
    });
  }
  // console.log(propsData);

  return{
    props: {
      responsedata:propsData,
    }
  }
  }
  catch(error){
    console.log('error in fetching data',error);
  }
}
