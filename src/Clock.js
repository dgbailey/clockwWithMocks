import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';


function Clock(){

    const[formData,setFormData] = useState({})

    const[questions,setQuestions] = useState(3)

    const handleResponse = e => {
       
        
        let addition = {}
        let name = e.target.name
        let value = e.target.value
        addition[name] = value
        
        
        
        
        
        setFormData({...formData,...addition})
    }

    // const[hour,setHour] = useState(0)
    // const[minute,setMinute] = useState(0)
    // const[second,setSecond] = useState(0)

    // useEffect(()=>{
    //     let timeFetch = setInterval(()=>{
    //         let time = new Date()
    //         setHour(time.getHours())
    //         setMinute(time.getMinutes())
    //         setSecond(time.getSeconds())

            
    //     },1000)
    //     return () => {console.log('clearing');clearInterval(timeFetch)}
    // },[])//do I need an empty dependency array here?
    // //with the empty dep array useEffect is not called on re-render meaning cleanup is not called with prev closed state before useEffect with new State 

    // useEffect(()=>{
    //     function moveHands(hour,minute,second){
    //         let hourHand = document.querySelector('.hour-hand')
    //         let minuteHand = document.querySelector('.minute-hand')
    //         let secondHand = document.querySelector('.second-hand')
    //         let hDeg = hour *30
    //         let mDeg = minute * 6
    //         let sDeg = second * 6
    //         hourHand.style.cssText = `transform:rotate(${hDeg}deg)`
    //         minuteHand.style.cssText = `transform:rotate(${mDeg}deg)`
    //         secondHand.style.cssText = `transform:rotate(${sDeg}deg)`
    //     }
    //     moveHands(hour,minute,second)//seems that move hands should be in here

            
      
        
    // },[hour,minute,second])
    

    return(
        <StyledForm>
            <ProgressBar numberQuestions={questions} formData={formData}></ProgressBar>
            <div className="question">
                <p className = "q_text">Question 1</p>
                <input name = "resA" className = "response a" onChange={handleResponse}></input>
            </div>
            <div className="question">
                <p className = "q_text">Question 2</p>
                <input name = "resB" className = "response a" onChange={handleResponse}></input>
            </div>
            <div className="question">
                <p className = "q_text">Question 3</p>
                <input name = "resC" className = "response a" onChange={handleResponse}></input>
            </div>
            <button className = "submit">Submit</button>
        </StyledForm>
    )


}

const StyledForm = styled.form`
    margin:300px auto;
    height:300px;
    width:500px;
    padding:20px;
    display:flex;
    justify-content:center;
    align-content:center;
    border:1px solid black;
    border-radius:3px;
    flex-direction:column;

    .question{
        margin:20px;
        height:40px;
        width:200px;
        display:flex;
        justify-content:flex-start;
        padding:5px;
        flex-direction:column;
    }



    .q_text{
        margin:10px;
        text-align:left;
        font-size:18px;
    }

    input{
        width:200px;
    }



`

// const StyledClockBody = styled.div`
//     margin:200px auto;
//     height:300px;
//     width:300px;
//     border-radius:50%;
//     border:1px solid black;
//     position:relative;

//     .hand{
//         width:1px;
//         background:black;
//         position:absolute;
//         height:150px;
//         top:0px;
//         left:50%;
//         transform-origin:0px 150px
//     }

//     .hour-hand{
//         width:2px;
//     }

    

export default Clock;