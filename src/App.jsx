import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  const btnn = (real) => {
    display.value+=real
  }
const equal = ()=>{
  try{
    display.value = eval(display.value)
  }catch{
    display.value = "Error"
    setTimeout(() => {
      display.value=""
    }, 1500);
  }
}
const Allclear = ()=>{
  display.value = ""
}


  return (
    <>
      <div className='bg-slate-400 h-screen'>
        <div className='flex justify-center p-10'>
          <h1 className='text-5xl font-[900] uppercase'>Basic Calculator</h1>
        </div>
        <div className='flex justify-center'>
          <div className="bg-[#000] w-[370px] rounded-xl">
            <div className='p-5 w-full'>
              <input  readOnly type="text" id="display" className="w-full border p-2 text-end rounded-md focus:border-blue-500 focus:bg-gray-100 bg-white text-4xl" placeholder="0"
            /></div>
            <div className="grid grid-cols-4 space-y-4 w-min-screen px-9 pb-10 pt-0">
              <button onClick={()=>  btnn("+")} className="bg-[#FF9500] text-white rounded-full text-4xl font-[600] w-15 h-15 pb-2 flex items-center justify-center hover:bg-[#FFA836]" >+</button>
              <button onClick={() => btnn("7")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >7</button>
              <button onClick={() => btnn("8")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >8</button>
              <button onClick={() => btnn("9")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >9</button>
              <button onClick={() => btnn("-")} className="bg-[#FF9500] text-white rounded-full text-4xl font-[600] w-15 h-15 pb-2 flex items-center justify-center hover:bg-[#FFA836]" >-</button>
              <button onClick={() => btnn("4")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >4</button>
              <button onClick={() => btnn("5")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >5</button>
              <button onClick={() => btnn("6")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >6</button>
              <button onClick={() => btnn("*")} className="bg-[#FF9500] text-white rounded-full text-4xl font-[600] w-15 h-15 pb-1 flex items-center justify-center hover:bg-[#FFA836]" >X</button>
              <button onClick={() => btnn("1")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >1</button>
              <button onClick={() => btnn("2")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >2</button>
              <button onClick={() => btnn("3")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >3</button>
              <button onClick={() => btnn("/")} className="bg-[#FF9500] text-white rounded-full text-5xl font-[600] w-15 h-15 pb-2 flex items-center justify-center hover:bg-[#FFA836]" >÷</button>
              <button onClick={() => btnn("0")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 flex items-center justify-center hover:bg-[#D4D4D2]" >0</button>
              <button onClick={() => btnn("/")} className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 pb-5 flex items-center justify-center hover:bg-[#D4D4D2]" >.</button>
              <button onClick={equal}  className="bg-[#505050] text-white rounded-full text-4xl font-[600] w-15 h-15 pb-2 flex items-center justify-center hover:bg-[#FFA836]" >=</button>
              <button onClick={Allclear} className="bg-[#FF9500] text-white rounded-full text-4xl font-[600] w-15 h-15 p-3 flex items-center justify-center hover:bg-[#FFA836]" >C</button>

            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App



// import { useState } from 'react'
// import './App.css'
// 
// function App() {
// const [screen, setScreen] = useState("")
// 
// const display = (value) => {
// setScreen(screen => screen + value)  // can also use (screen+value) but first taking what in screen into variable screen then updating it is better even  in case occur async operations
// }
// const clearAll = () => {
// setScreen("")
// }
// const backSpace = () => {
// setScreen(screen => screen.slice(0, -1))
// }
// const evalExpr = () => {
// try {
// setScreen(eval(screen).toString())
// } catch (error) {
// setScreen("ERROR")
// }
// }
// 
// return (
// <>
{/* <div className="d-flex justify-content-center align-items-center vh-100"> */ }
{/* <div className="col-lg-5 col-md-1 "></div> */ }
{/* <div className="col-lg-3 col-md-11 container bg-dark p-4 mt-2 rounded-4 border border-white" style={{ boxShadow: "3px 7px 10px black" }} > */ }
{/* <h1 className="text-center text-white fw-semibold" >CASIO.</h1> */ }
{/* <div> */ }
{/* <input value={screen} className="form-control bg-dark text-white py-4 fs-3" type="text" readOnly /> */ }
{/* </div> */ }
{/* <div className="row mt-4 ms-2"> */ }
{/* <div className="col-3"><button onClick={clearAll} className="btn btn-success rounded-circle" >AC</button></div> */ }
{/* <div className="col-3"><button onClick={backSpace} className="btn btn-success rounded-circle" >⌫</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("%")} className="btn btn-light rounded-circle">%</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("/")} className="btn btn-light rounded-circle">÷</button></div> */ }
{/* </div> */ }
{/* <div className="row mt-3 ms-2"> */ }
{/* <div className="col-3"><button onClick={() => display("7")} className="btn btn-light rounded-circle">7</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("8")} className="btn btn-light rounded-circle">8</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("9")} className="btn btn-light rounded-circle">9</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("*")} className="btn btn-light rounded-circle">x</button></div> */ }
{/*  */ }
{/* </div> */ }
{/* <div className="row mt-3 ms-2"> */ }
{/* <div className="col-3"><button onClick={() => display("4")} className="btn btn-light rounded-circle">4</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("5")} className="btn btn-light rounded-circle">5</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("6")} className="btn btn-light rounded-circle">6</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("+")} className="btn btn-light rounded-circle">+</button></div> */ }
{/* </div> */ }
{/* <div className="row mt-3 ms-2"> */ }
{/* <div className="col-3"><button onClick={() => display("1")} className="btn btn-light rounded-circle">1</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("2")} className="btn btn-light rounded-circle">2</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("3")} className="btn btn-light rounded-circle">3</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("-")} className="btn btn-light rounded-circle">-</button></div> */ }
{/* </div> */ }
{/* <div className="row mt-4 ms-2 mb-5 me-"> */ }
{/* <div className="col-3"><button onClick={() => display(".")} className="btn btn-light rounded-circle">.</button></div> */ }
{/* <div className="col-3"><button onClick={() => display("0")} className="btn btn-light rounded-circle">0</button></div> */ }
{/* <div className="col-6"><button onClick={evalExpr} className="btn btn-warning rounded-3 " style={{ width: "80%"}}>=</button></div> */ }
{/* </div> */ }
{/* </div> */ }
{/* <div className="col-lg-5 col-md-1"></div> */ }
{/* </div> */ }
{/* </> */ }
// )
// }
// 
// export default App