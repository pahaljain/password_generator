import { useState } from 'react'

function App() {
  const [text,setText] = useState("Password");

  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0987654321';
  const special = "!@#$%^&*()_+-={}[]|\:;<>,.?/~";

  const generate = () => {
    let len = document.getElementsByClassName("len")[0].value;

    // console.log(len);
    const number = document.getElementsByClassName("number")[0].checked;
    const chars = document.getElementsByClassName("character")[0].checked;
    let temp = "";
    let pass = "";

    if(chars && number){
      temp = characters + special + numbers;
    }
    else if(chars){
      temp = characters + special;
    }
    else if(number){
      temp = characters + numbers;
    }
    else{
      temp = characters;
    }

    //generating password
    for(let i=0 ; i<len ; i++){
      pass += temp.charAt(Math.floor(Math.random() * temp.length));
    }

    // console.log(pass);
    setText(pass);
  }

  const copyText = () => {

    navigator.clipboard.writeText(text);
    alert(`${text} is copied`);
  }

  return (
    <div className="container">
      <div className="box">
        <div style={{display: "flex"}}>
          <p className='field'>{text}</p>
          <button onClick={copyText}>Copy</button>
        </div>

        <div style={{display: "flex", margin:"35px"}}>
          <input type="range" className='len' onChange={generate} min={8} max={20}/>
          length ({text.length})
          <input type="checkbox" name='number' className='number'/>
          Number
          <input type="checkbox" name='character' className='character'/>
          Character
        </div>
      </div>
    </div>
  )
}

export default App