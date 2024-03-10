import React, { useRef, useState } from 'react'
import './Class.css'
import { Button } from 'bootstrap'
import { data } from '../data';

function Class() {

  let [index,setIndex] = useState(0);
  let [question,setQuestion] = useState(data[index]);
  let [lock,setLock] = useState(false);
  let [score,setScore] =useState(0)
  let [result,setResult] =useState(false)

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionArray = [Option1,Option2,Option3,Option4];

  const checkAns = (e,ans)=>{
      if(lock === false){
          if(question.ans===ans){
              e.target.classList.add("Correct");
              setLock(true);
              setScore(prev=>prev+1)
          }else{
              e.target.classList.add("Wrong");
              setLock(true);
              optionArray[question.ans-1].current.classList.add("Correct");
          }
      }
  }

  const next = () =>{
      if(lock===true){
          if (index===data.length-1) {
              setResult(true)
              return 0

          }
          setIndex(++index)
          setQuestion(data[index])
          setLock(false)
          optionArray.map((option)=>{
              option.current.classList.remove("Wrong")
              option.current.classList.remove("Correct")
              return null
          })
      }
  }

  const reset = ()=>{
      setIndex(0)
      setQuestion(data[0])
      setScore(0)
      setLock(false)
      setResult(false)
  }










  return (


    
    <>
<div className='container w-50 c1 '>
<h1 className='ms-5' style={{fontFamily:'-moz-initial',fontSize:'60px'}}>Quiz App</h1>
<hr />
{result?<></>:<><h2 className='ms-5' style={{fontFamily:'-moz-initial',fontSize:'50px'}}>{index+1}. {question.question}</h2>
<ul className='ms-5 display-flex  p-5' style={{fontFamily:'-moz-initial',fontSize:'20px'}}>
    <li ref={Option1} onClick={(e)=>{checkAns(e,1)}} className='p-2' style={{border:'1px solid grey',borderRadius:'10px'}}>{question.option1}</li>
    <li ref={Option2} onClick={(e)=>{checkAns(e,2)}} className='p-2  mt-2' style={{border:'1px solid grey',borderRadius:'10px'}}>{question.option2}</li>
    <li ref={Option3} onClick={(e)=>{checkAns(e,3)}} className='p-2  mt-2' style={{border:'1px solid grey',borderRadius:'10px'}}>{question.option3}</li>
    <li ref={Option4} onClick={(e)=>{checkAns(e,4)}} className='p-2  mt-2' style={{border:'1px solid grey',borderRadius:'10px'}}>{question.option4}</li>
    </ul>
<div className=' text-center '>
      <button  onClick={next}  style={{borderRadius:'20px',width:'250px',fontFamily:'-moz-initial'}} className='btn btn-light mt-4 float-left'><h5>NEXT</h5></button>
  
</div>
    <div className="classname  text-center" style={{color:'green'}}><h4>{index+1} of {data.length} questions</h4></div>
</>}



{result?
                <>
                    <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
                        <h2 className='mt-5'>You Scored {score} out of {data.length}</h2>
                        <div><button onClick={reset}  style={{color:'green',height:'50px',width:'100px',fontFamily:'-moz-initial'}} className='button1 border rounded d-flex justify-content-center align-items-center'><h4>Reset</h4></button></div>
                    </div>
                </>
                :
                <></>
                }
</div>


    </>
  )
}


export default Class

