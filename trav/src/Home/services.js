import "./services.css";
import grad from "../resources/graduation-hat.png";
import globe from "../resources/globe.png";
import bus from "../resources/bus.png";
import vaccation from "../resources/sunbed.png";

function Services() {
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