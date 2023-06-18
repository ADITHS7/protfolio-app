import React from "react"
import "./About.css"
import  Me1 from "../../Images/me1.jpg"
import Award from "../../Images/award.png"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me1} alt=""className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia laboriosam aliquid distinctio necessitatibus earum quasi dolorem incidunt. Vitae!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam impedit quos voluptates dignissimos illum sed ab exercitationem, quia laborum, modi laboriosam aperiam cumque aliquid nisi, odit ratione facilis eligendi? Aut magnam ullam impedit dignissimos at.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img"/>
          <div className="a-award-texts">
            <h4 className="a-award-title">International Cricketer Award 2020</h4>
            <p className="a-award-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit beatae aliquid maiores adipisci quia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About