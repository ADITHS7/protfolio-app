
import "./Contact.css"
import Phone from "../../Images/phone.png"
import Email from "../../Images/email.png"
import Adress from "../../Images/address.png"




const Contact = () => {
  
  

  
  
    
  
  return (
    <div className='c'>
      <div className="c-bg">
       
      </div>
   <div className="c-wrapper">
    <div className="c-left">
      <h1 className="c-title">Lets discuss your Project</h1>
      <div className="c-info">
        <div className="c-info-item">
        <img src={Phone} alt="" className='c-icon'/>
         +91999999999
        </div>

        <div className="c-info-item">
        <img src={Email} alt="" className='c-icon'/>
         virat@gmail.com
        </div>

        <div className="c-info-item">
        <img src={Adress} alt="" className='c-icon'/>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

      </div>
    </div>
    <div className="c-right">
      <p className="c-desc">
        <b>Whats Your story</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus voluptate, repellendus quia explicabo quae nostrum iusto.
      </p>
      <form  >
        <input type="text" placeholder="Name" name=""/>
        <input type="text" placeholder="Subject" name=""/>
        <input type="text" placeholder="Email" name=""/>
        <textarea rows="5" placeholder="type your message here"/>
        <button onClick={alert("You Submitted Succesfully")}>Submit</button>

      </form>
    
    
    </div>
   </div>
    </div>
  )
}

export default Contact