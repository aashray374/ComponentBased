import React from "react";
import './home.css'
import Card from './card.jsx'

function Homepage(){
    return(
        <>
        <h1 className='heading'><b>WELCOME TO OUR WEBSITE</b></h1>
        <div className="main">
        <div className="coontent">    
        <div className="heading-content">
          <p className="text">
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat ratione dolores tempore harum
            itaque. Animi assumenda libero non architecto ipsam tenetur est eos, quas at nam, placeat id excepturi.
            Aspernatur, provident neque illum officiis quidem similique, dolorum vel ullam assumenda quibusdam suscipit
            repellat cum mollitia consectetur inventore earum nam eaque iure incidunt! Quos alias vel soluta et natus
            quae! In hic eaque veniam vero atque, suscipit laboriosam quidem at soluta, eligendi recusandae similique
            animi est eius consectetur veritatis neque quam pariatur iure cumque alias necessitatibus labore rem? Illo,
            quaerat! Adipisci, maxime saepe! Soluta modi, quo debitis sequi accusantium dolores eum, accusamus,
            obcaecati quibusdam cumque at ullam ea voluptates! Nostrum fuga quibusdam impedit dolorum, est itaque! Quo
            delectus eveniet sequi? Eos, a ab voluptate eveniet obcaecati repellat consequuntur facilis porro esse
            quis illum sapiente reprehenderit soluta
          </p>
      </div>
      <div className="left">
        <img className="typewriter" src="/src/images/laptop.jpg " alt="typewriter" />
      </div>
        </div>
      <div class="services">
        <h1 className="subheading">OUR SERVICES</h1>
        <div className="cards">
        <Card
        link= '/src/images/web.png'
        text1='Web Development'
        text2='HTML, JS, React'
        />
        <Card
        link= '/src/images/phone.jpg'
        text1='App Development'
        text2='Android Studio'
        />
        <Card
        link= '/src/images/design.png'
        text1='Web Design'
        text2='Canva, Figma'
        />
        </div>
      </div>
        </div>
        </>
    )
}

export default Homepage