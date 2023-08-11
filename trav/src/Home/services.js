import "./services.css";
import grad from "../resources/graduation-hat.png";
import globe from "../resources/globe.png";
import bus from "../resources/bus.png";
import vaccation from "../resources/sunbed.png";
import {useState} from "react";

function Services() {
const [Firstname, setFirstName] = useState("");
const [Lastname, setLastName] = useState("");
const [welcomeMsg, setWelcomeMsg] = useState("");
const handleSubmit = (event) =>{
  setWelcomeMsg(`Welcome ${Firstname} ${Lastname}`);
  event.preventDefault();
};



  return (
    <>
    <div className ="container-fluid">
        <h3 className="text-center text-uppercase">our Services</h3>
    <div className ="row">
        <div className ="col-6 marks">
        <img className="grad" src={grad} alt="grad"></img>
          <span className="svc_title bg-primary marks">
            <p>Admission</p>
          </span>
          <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consectetur, tempore quod at illum, modi itaque quibusdam, officiis in adipisci voluptates quis commodi. Labore quasi asperiores, cupiditate voluptatem similique vero.
</p>
        </div>
        <div className ="col-6 marks">
        <img className="grad" src={globe} alt="globe"></img>
          <span className="svc_title marks">
            <p>Admission</p>
          </span>
          <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consectetur, tempore quod at illum, modi itaque quibusdam, officiis in adipisci voluptates quis commodi. Labore quasi asperiores, cupiditate voluptatem similique vero.
</p>
        </div>
        <div className ="col-6 marks">
        <img className="grad" src={bus} alt="bus"></img>
          <span className="svc_title marks">
            <p>Admission</p>
          </span>
          <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consectetur, tempore quod at illum, modi itaque quibusdam, officiis in adipisci voluptates quis commodi. Labore quasi asperiores, cupiditate voluptatem similique vero.
</p>
        </div>
        <div className ="col-6 marks">
        <img className="grad" src={vaccation} alt="chair"></img>
          <span className="svc_title marks">
            <p>Admission</p>
          </span>
          <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium consectetur, tempore quod at illum, modi itaque quibusdam, officiis in adipisci voluptates quis commodi. Labore quasi asperiores, cupiditate voluptatem similique vero.
</p>
        </div>
    </div>
    </div>

    <div>
      <form className="enroll" onSubmit={handleSubmit}>
      <h1>Student</h1>
      <label>Firstname:</label>
      <input type="text" name ="fname" onBlur={(event)=> setFirstName(event.target.value)} />
      <br/>
      <label>Lastname:</label>
      <input type="text" name ="lname" onBlur={(event)=> setLastName(event.target.value)} />
      <br/>
      <br/>
<input type ="submit" value ="submit" />
<br/>
<label id="studMsg" className='Msg'>
  {welcomeMsg}
</label>

      </form>
    </div>
    </>
  );
}

export default Services;











{/* <div className="col-6 marks">
          <img className="grad" src={grad}></img>{" "}
          <span className="svc_title marks">
            <p>Admission</p>
          </span>
          <p>loremipsum</p>
        </div>
        
        
    
        <div className="row">
        <div className="container">
        <div className="col-6 marks">
          <img className="grad" src={grad}></img>{" "}
          <span className="svc_title marks">
            <p>Admission</p>
          </span>
          <p>loremipsum</p>
        </div>
         </div>
       
      </div>
    */ }