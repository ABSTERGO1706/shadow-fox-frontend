import './Achievements.css'
import { useState,useEffect } from "react";
import MSD_ach from './assets/MSD_ach.jpg';
import SR from './assets/Suresh Raina.jpg';
import BRAVO from './assets/DJ Bravo.jpg';
import FDP from './assets/Faf du Plessis.png';
import RJ from './assets/Ravindra Jadeja.jpg';
function Achievements()
{
    const[data,useData]=useState([]);
    useEffect(()=>{fetch("http://localhost:8080/Achievements")
        .then(res=>{
            if(!res.ok) throw new Error('Fetch Failed');
            return res.json();
        })
        .then(result=>useData(result))
        .catch(err=>console.log(err));
    },[]);
    
    return (
    <main className="Achievements-main">
        <section className='Achievements-banner'>
        </section>
        <div className="cards-wrapper">
            <section className='Achievements-content-left'>
        <br/>
        <br/>
        <div className="card-container-left">
            <h2>Mahendra Singh Dhoni</h2>
            <div className='player_ach_img'>
        <div className='player_ach_img'>
  <img src={MSD_ach} className="player_ach_img" alt="MS Dhoni" />
</div>
    </div>
           {data
  .filter(item => item.player_name === "MS Dhoni")
  .map(item => (
    <div key={item.id} className='player_ach_container'>
        
      <h4>{item.year} - {item.achievement}</h4>
      <p>{item.explanation}</p>
    </div>
))}

        </div>
        </section>
        <section className='Achievements-content-right'>
        <br/>
        <br/>
        <div className="card-container-right">
            <h2>Suresh Raina</h2>
            <div className='player_ach_img'>
        <div className='player_ach_img'>
  <img src={SR} className="player_ach_img" alt="SR" />
</div>
    </div>
           {data
  .filter(item => item.player_name === "Suresh Raina")
  .map(item => (
    <div key={item.id} className='player_ach_container'>
        
      <h4>{item.year} - {item.achievement}</h4>
      <p>{item.explanation}</p>
    </div>
))}

        </div>
        </section>
        <section className='Achievements-content-left'>
        <br/>
        <br/>
        <div className="card-container-left">
            <h2>Dwayne Bravo</h2>
            <div className='player_ach_img'>
        <div className='player_ach_img'>
  <img src={BRAVO} className="player_ach_img" alt="DJBravo" />
</div>
    </div>
           {data
  .filter(item => item.player_name === "Dwayne Bravo")
  .map(item => (
    <div key={item.id} className='player_ach_container'>
        
      <h4>{item.year} - {item.achievement}</h4>
      <p>{item.explanation}</p>
    </div>
))}

        </div>
        </section>
        <section className='Achievements-content-right'>
        <br/>
        <br/>
        <div className="card-container-right">
            <h2>Faf du Plessis</h2>
            <div className='player_ach_img'>
      <div className='player_ach_img'>
  <img src={FDP} className="player_ach_img" alt="FDP" />
</div>
    </div>
           {data
  .filter(item => item.player_name === "Faf du Plessis")
  .map(item => (
    <div key={item.id} className='player_ach_container'>
        
      <h4>{item.year} - {item.achievement}</h4>
      <p>{item.explanation}</p>
    </div>
))}

        </div>
        </section>
        <section className='Achievements-content-left'>
        <br/>
        <br/>
        <div className="card-container-left">
            <h2>Ravindra Jadeja</h2>
            <div className='player_ach_img'>
        <div className='player_ach_img'>
  <img src={RJ} className="player_ach_img" alt="RJ" />
</div>
    </div>
           {data
  .filter(item => item.player_name === "Ravindra Jadeja")
  .map(item => (
    <div key={item.id} className='player_ach_container'>
        
      <h4>{item.year} - {item.achievement}</h4>
      <p>{item.explanation}</p>
    </div>
))}

        </div>
        </section>
</div>
        
      
    </main>
);
    


}

export default Achievements;