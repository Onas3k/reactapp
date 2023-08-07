import './hero.css';

function Hero () {
return (
        <div className ='hero_img d-flex align-items-center'>
<div className="container">
  <div className="row">
    <div className=" col-lg-7 mx-auto text-center">
      <h1 className="display-4 text-white pt-lg-5 text-capitalize">
        create your future
      </h1>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat,
        possimus aut suscipit odit fugit perferendis nobis autem in voluptates.
      </p>
      <a href="#" className="btn btn-danger me-2">
        Join Us
      </a>
      <a href="#" className="btn btn-outline-light">
        Start Here
      </a>
    </div>
  </div>
</div>

        </div>
);

}

export default Hero;