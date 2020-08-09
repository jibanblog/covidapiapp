import React, { useState, useEffect } from 'react';
import axios from 'axios';




const App = () =>{


    const [num, setNum] = useState(0);
    const [rajya, setRajya] = useState();
    const [district, setDistrict] = useState();
    const [condition, setCondition] = useState();
    const [rate, setRate] = useState();


    const ClickNow = () =>{
        setNum(num + 1);
    }
    
   

useEffect( () => {

    async function getData(){
        const response = await axios.get('https://api.covid19india.org/raw_data12.json');
        const count = response.data.raw_data.length;
         setRajya(response.data.raw_data[num].detectedstate);
         setDistrict(response.data.raw_data[num].detecteddistrict);
         setCondition(response.data.raw_data[num].currentstatus);
         setRate(response.data.raw_data[num].numcases);
         console.log(count);
         
        }
   

    getData();
} )




return(
    <>
    <div class='main'>
     <h1> Covid-19 Cases From July 23 To Aug 06 </h1>
    <p> Click on below button to check <br /> covid-19 cases district wise: </p>
    <div class="btn">
    <button onClick={ClickNow}> Click On </button>
    </div>
    
    <div class="covid-table">
    <table>
      <thead>
          <tr>
              <th> Id </th>
              <th> State </th>
              <th> District </th>
              <th> Status </th>
              <th> Cases </th>
          </tr>
      </thead>
      
         <tbody>
         <tr>
         <td> {num} </td>
          <td> {rajya} </td>
          <td> {district} </td>
          <td> {condition} </td>
          <td> {rate} </td>
          </tr>
          </tbody>
    
      
      </table>


    </div>
    </div>
    </>
)



}


export default App;