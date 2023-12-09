import { useState } from "react"

const Counter = () =>{
    const [no,setNo] = useState(0)
    const increment =() =>{
        setNo(no + 1)
    }
    const decrement =() =>{
        if(no>0){
            setNo(no - 1)
        }
    }
    const Resetno = ()=>{
        setNo(0 )
    }
    return(
        <>
            <center style={{marginTop : "50px"}}>
                    <h1>Counter App</h1>
                    <button style={{margin : "5px" , border:"0" , backgroundColor:"green" , color:"white" , fontSize:"20px" , padding:"10px" , marginRight:"20px"  , paddingLeft : "30px" , paddingRight : "30px"}} onClick={ () => increment()}>+</button>

                    <span style={{backgroundColor:"pink",fontSize:"16px",fontWeight:"bold",padding:"11px", paddingLeft : "25px" , paddingRight : "25px"}}>{no}</span>

                    <button style={{margin : "5px" , marginLeft:"20px" , border:"0" , backgroundColor:"green" , color:"white" , fontSize:"20px" , padding:"10px" , paddingLeft : "30px" , paddingRight : "30px"}} onClick={ () => decrement()}>-</button>
                    
                    <br></br>

                    <button style={{marginTop:"15px", border:"0" , backgroundColor:"green" , color:"white" , fontSize:"20px" , padding:"5px" , paddingLeft : "30px" , paddingRight : "30px"}} onClick={Resetno}>Reset</button>
                </center>
        </>
    )
}
export default Counter