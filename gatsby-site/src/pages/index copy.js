import React from "react"
import './index.css'
import {  graphql, Link } from "gatsby" //pulling graphql
import Title from './title1';
import 'C:/Users/sunilkumara.v.j/Desktop/Gatsby-Beer-Suni/gatsby-site/public/main.css';



const IndexPage = () => (   //here we are going to get data
  <div className="bodyCont">
    
    <h1 align="center" className="beer">Beer Store</h1>
    <div className="header">
    <div className="logo"><Link to="/"><img className="i" src="https://media.glassdoor.com/sqll/152333/the-beer-store-squarelogo-1573434493086.png"></img></Link></div>
      
      <div className="ytube"><Link to="/Products">Beer Products</Link></div>
      <div className="home"><Link to="/Blovers">Beer Lovers</Link></div>
      
      <div className="quot"><a href="https://www.google.com/search?rlz=1C1GCEA_enIN880IN880&sxsrf=ALeKk02dv5au-pR6Wcf2nY_TY-Zfu5UbUw:1583316252797&q=beershop&npsic=0&rflfq=1&rlha=0&rllag=12982838,77627964,8232&tbm=lcl&ved=2ahUKEwi9psLWyIDoAhWy4zgGHaSlAz4QtgN6BAgLEAU&tbs=lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:10&rldoc=1#rlfi=hd:;si:;mv:[[13.0295591,78.05989029999999],[12.484804299999999,77.5254686]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:10">Nearby Beer Stores</a></div>
      <div className="gif"><img src="https://i.imgur.com/OOsfinU.jpg"></img></div>
    </div>
    <div className="mainimg">
    <div> <img className="suvani" src="https://www.thebeerstore.ca/wp-content/uploads/2019/12/banner-2.jpg" alt=""></img></div>
     <div>
       <p className="quote">“Beer is proof that God loves us and wants us to be happy. 
        “Work is the curse of the drinking classes. 
        I look up at the sky, wondering if I'll catch a glimpse of kindness there, 
        but I don't. Never underestimate how much assistance, how much satisfaction, how much comfort, 
        how much soul and transcendence there might be in a well-made taco and a cold bottle of beer" </p>

      <h2 className="h21">Did You Know?</h2>
      <div className="img3">
     
       <div><p>“From man’s sweat and God’s love, beer came into the world.”
― Saint Arnoldus</p> 
<p>“Some people wanted champagne and caviar when they should have had beer.”
― Dwight D. Eisenhower</p> 
<p>“Why is American beer served cold?
So you can tell it from water.”
― David Moulton</p> 
<p>“You from within our glasses, you lusty golden brew, whoever imbibes takes fire from you. The young and the old sing your praises. Here’s to beer, here’s to cheer, here’s to beer.”
― Bedrich Smetana</p> </div>

<div><img className="expimg" src="https://thumbs.gfycat.com/LikableMarriedArizonaalligatorlizard-small.gif"></img></div> 

  </div>
         
     </div> 
<h2 className="h22">Have Fun With Beers...</h2>
<div className="div">
  
  <div ><img className="img2" src="https://thumbs.gfycat.com/SparklingPositiveIcefish-small.gif"></img></div>
  <div className="desc1">
<p>“Whoever drinks beer, he is quick to sleep; whoever sleeps long, does not sin; whoever does not sin, enters Heaven! Thus, let us drink beer!”
― Martin Luther</p>
<p>“A fine beer may be judged with only one sip, but it’s better to be thoroughly sure.”
― Czech Proverb</p>
<p>“In a study, scientists report that drinking beer can be good for the liver. I’m sorry, did I say ‘scientists’? I meant Irish people.”
― Tina Fey</p>
<p>“As to the way of life of the English, they are somewhat impolite, for they belch at the table without shame. They consume great quantities of beer.”
― Father Etienne Perlin</p>
    </div>

</div>
     </div>
     
        <Title />
        <Link  to="/Products">
          <div>
          <img className="bottle" src="https://cdn.dribbble.com/users/31348/screenshots/2322395/paris800.gif"/>
          <p align="center" className="bp">Click on Bottle for Beer Products</p>
          </div>

          </Link>
         

</div>
)

export default IndexPage