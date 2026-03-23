import './Squad.css'
import { useEffect,useState } from 'react';
function Squad()
{

    const [data, useData] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:8080/players")
          .then(res => {
            if (!res.ok) throw new Error('Fetch Failed');
            return res.json();
          })
          .then(result => useData(result))
          .catch(err => console.log(err));
      }, []);

        return(
            <main className='Squad-main'>
            <section className='Squad-banner'>
            </section>
            <section className='Squad-Content'>
                    <div className='card-container'>
                        {
                            data.map(item=>(
                                <div key={item.id} className='card-section'>
                                    <img src={`http://localhost:8080/images/${item.imageUrl}`} alt="player" />
                                    <h1>{item.name}</h1> 
                                    <div className='card-content-left'>
                                        <h4>Role</h4>
                                        <h5>{item.role}</h5>
                                        </div> 
                                    <div className='card-content-left'> 
                                        <h4>Matches</h4>
                                        <h5>{item.matches}</h5>
                                        </div> 
                                    <div className='card-content-left'> 
                                        <h4>Runs</h4>
                                        <h5>{item.runs}</h5>
                                        </div>   
                                    <div className='card-content-left'> 
                                        <h4>Wickets</h4>
                                        <h5>{item.wickets}</h5>
                                        </div>   
                                    <div className='card-content-left'> 
                                        <h4>Strike Rate</h4>
                                        <h5>{item.strikeRate}</h5>
                                        </div>  
                                    <div className='card-content-left'> 
                                        <h4>Years Active</h4>
                                        <h5>{item.yearsActive}</h5>
                                        </div>
                                        

                                      
                                    
                                
                                </div>
                            ))
                        }
            
                    </div>
                    </section>
            
            </main>
        );
}

export default Squad;