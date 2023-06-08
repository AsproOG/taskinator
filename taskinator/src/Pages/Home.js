

import homeVideo from './video.mp4'
import logo from './TaskinatorWOL.png'
export default function Home(){
return (

<home className="homePage">
<video autoPlay muted loop className="background-video">
  <source src={homeVideo} type="video/mp4" />

</video>
<div className="content">
<h1> Our vision is to be the place for companies to find the best of the 
    best students through tasks listed by them.
     If a student can complete the rigorous tasks, they deserve to be hired.
     </h1>
  
  
     
      </div>
    </home>
  );
}