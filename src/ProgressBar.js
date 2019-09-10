import React from 'react';
import styled from 'styled-components';

function ProgressBar(props){


   
    let keys = Object.keys(props.formData)
    let tally = 0
    keys.forEach(key => {
        if(props.formData[key].length > 0){
            tally++
        }
        
    })
   
    let percentage = tally/props.numberQuestions*100

    console.log(percentage)
    let styled = {"width":`${percentage}%`}
    return(
        <StyledProgressBar>
            <div className="meter" style={styled}><span className="percentage-complete">{Math.floor(percentage)}</span></div>
            
        </StyledProgressBar>
    )
}

const StyledProgressBar = styled.div`
    width:100%;
    height:40px;
    border:1px solid gray;
    .meter{
        height:40px;
        transition:.15s;
        background:green;
    }
   
`

export default ProgressBar;