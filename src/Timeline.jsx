import './Timeline.css'
import { useState, useEffect } from 'react';
import CSKLOGO from './assets/csk_icon.png';


function Timeline() {
  const [data, useData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Timeline")
      .then(res => {
        if (!res.ok) throw new Error('Fetch Failed');
        return res.json();
      })
      .then(result => useData(result))
      .catch(err => console.log(err));
  }, []);

  return (
    <main className='Timeline-main'>
      <section className='Timeline-banner'></section>

      <section className='Timeline-content'>
        <div className='Timeline-block'>

          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={item.id}
                className={`Timeline-block-container ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-card">
                    <img src={`http://localhost:8080/images/${item.imageUrl}`} alt={item.title} className="timeline-image"/>
                  <h1 className="year">{item.year}</h1>
                  <h1 className="title">{item.title}</h1>
                  <p className="desc">{item.description}</p>
                  <p className="category">Category: {item.category}</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#000" }}>Loading timeline...</p>
          )}

        </div>
      </section>
    </main>
  );
}

export default Timeline;