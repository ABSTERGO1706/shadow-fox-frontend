import './Home.css'
import GITHUB from './assets/github-white-icon.webp'
function Home() {
  return (
    <main className="home">
        <section className="home-banner">
    </section>
    <section className="home-content">
        <div className="content">
        <h1>Welcome to the ultimate fanboy </h1>
        <h1>page of the Chennai Super Kings</h1>
        <p>Welcome to my fanboy page dedicated to the Chennai Super Kings. This page is more than just a website, it represents my passion and emotional connection with one of the most iconic teams in the Indian Premier League. My craze for CSK started when I first watched MS Dhoni lead the team with unmatched calmness and confidence. His leadership, combined with the team’s fighting spirit, made me fall in love with CSK instantly.

Over the years, every match, every victory, and even the tough losses strengthened my loyalty toward this team. The energy of the Yellow Army, the unforgettable comebacks, and the never-give-up attitude truly inspired me. That inspiration is the reason behind creating this page. I wanted a space where I could express my admiration, relive memorable moments, and share my passion with fellow fans. This page stands as a tribute to CSK’s legacy and the emotions it creates.</p> 
        </div>
</section>
<section className='home-footer'>
    <h1>Contact Us</h1>
    <br/>
    <br/>
    <div className='home-footer-left'>
    <a href="https://github.com/ABSTERGO1706" target="_blank">
    <img src={GITHUB} width="100px" height="100px"/>   </a>
             <a href="https://www.linkedin.com/in/hari-roshan-629790333/" target="_blank">
                
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" width="100px" height="100px" />

            </a>
    </div>
    <div className='home-footer-right'>
            <p><b>Mail:</b> hariroshan17@gmail.com</p>
    </div>
</section>
    </main>
  );
}

export default Home;