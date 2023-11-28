import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import buttonimg from './assets/rope.png'

function App() {
  const [count, setCount] = useState(0);
  const [def,setdef]=useState(false);
  const[view,setview]=useState(false)
  const [time,settime]=useState("00 : 00 : 00");
  const [btntop,setbtntop]=useState(55)

  useEffect(() => {
    if (!def) {
      
      const intervalId = setInterval(() => {


        // Update the time every second
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const currentTime = `${hours} : ${minutes} : ${seconds}`;
        settime(currentTime);
      }, 1000);

      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }
    
  }, [def]);

  const startClock=async()=>{
    if(btntop===55){
      setbtntop(65)
    }
    if(btntop===65){
      setbtntop(55)
    }
    if(view){
      setview(false)
    }
    if(!view){
      setview(true)
    }
  }

  return (
    <div className='app'>
      <div className="canvas" style={{border:`${(!view)? "10px gray solid":"10px yellowgreen solid"}`,boxShadow: `${!view ? "":"0 0 10px yellowgreen"}`}}>
        {(!view)?<p id='def-clock'>00 : 00 : 00</p>:
        <span id='clock'><p>{time}</p></span>}
        

      </div>
      <img src={buttonimg} style={{ width:"50px",height:"200px",position:"absolute", zIndex:"0",top:`${btntop}vh`,left:"90%",cursor:"pointer"}} alt="button"  onClick={startClock}/>
      
    </div>
  )
}

export default App
