import Button from "./components/Button";
import {useState} from 'react';
import evaluate from "./components/efficientScript";
export default function App(){
  const [displayStr, setDisplayStr] = useState('');
  
  function handleClick(e){
    switch(e.target.value){
      case '=': setDisplayStr(evaluate(displayStr));
      break;
      case 'CE':
        case 'C': setDisplayStr('');
      break;
      case '%': setDisplayStr(+displayStr/100);
      break;
      case '<' : setDisplayStr(displayStr.substring(0, displayStr.length-1));
      break;
      case '1/x': setDisplayStr(Math.pow(+displayStr,-1));
      break;
      case 'x^2': setDisplayStr(Math.pow(+displayStr,2));
      break;
      case 'sqrt': setDisplayStr(Math.sqrt(+displayStr));
      break;
      case '+/-' : setDisplayStr(-1 * +displayStr);
      break;
      default : setDisplayStr(displayStr + e.target.value);
      break;
    }
  }

  return (
    <>
      <link rel="stylesheet" href="index.css" />
      <title>Calculator</title>
      <div className="wrapper">
        <div className="calc">
          <div className="display">{displayStr}</div>
          <div className="buttons" onClick={(e) => {
            handleClick(e)
          }}>

            <Button id="clearEntry" value={'CE'}/>
            <Button id="percentage" value={'%'} />
            <Button id="clear" value={'C'} />
            <Button id="backspace" value={'<'} />
            <Button id="inverse" value={'1/x'} />
            <Button id="square" value={'x^2'} />
            <Button id="sqrt" value={'sqrt'} />
            <Button id="buttonDiv" value={'/'} />
            <Button id="button7" value={7} />
            <Button id="button8" value={8} />
            <Button id="button9" value={9} />
            <Button id="buttonMul" value={'*'} />
            <Button id="button4" value={4} />
            <Button id="button5" value={5} />
            <Button id="button6" value={6} />
            <Button id="buttonSub" value={'-'} />
            <Button id="button1" value={1} />
            <Button id="button2" value={2} />
            <Button id="button3" value={3} />
            <Button id="buttonAdd" value={'+'} />
            <Button id="plusMinus" value={'+/-'} />
            <Button id="button0" value={0} />
            <Button id="decimal" value={'.'} />
            <Button id="equals" value={'='} />
            
          </div>
        </div>
      </div>
    </>
  );
}

























// import {useState} from 'react';
// // Sharing data between components
// export default function App() {
//   const [count , setCount] = useState(0);
//   function handleClick(){
//     if(count >= 40) setCount(0);
//     else setCount(count + 1);
//   }
//   return (
//     <div className="container">
//       <h1>Updating counter</h1>
//       <MyButton count={count} onclick={handleClick}/>
//       <MyButton count={count} onclick={handleClick}/>
//     </div>
//   );
// }

// function MyButton({count , onclick}){

//   return (
//     <button onClick={onclick}>clicks abc: {count} times</button>
//   );

// }




























// //UseState Example
// import {useState} from 'react';
// export default function App() {

//   return (
//     <div className="container">
//       <h1>Updating counter</h1>
//       <MyButton />
//     </div>
//   );
// }

// function MyButton(){
//   const [count , setCount] = useState(0);

//   function handleClick(){
//     if(count >= 40) setCount(0);
//     else setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>clicks abc: {count} times</button>
//   );

// }



