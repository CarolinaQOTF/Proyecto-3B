import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Restaurante = () => {
  const { store, actions } = useContext(Context);

  return (
    <><ul className="nav">
		<li className="nav-item">
		  <a className="nav-link " aria-current="page" href="#">
			Home
		  </a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="#">
			Imagenes 
		  </a>
		</li>
		<li className="nav-item">
		  <a className="nav-link" href="#">
			Recomendaciones
		  </a>
		</li>
		<button>Sing out</button>
	  </ul>

    <div className="card mb-3" style={{width: "540px;" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://i0.wp.com/www.diegocoquillat.com/wp-content/uploads/2021/11/Promocionar-un-restaurante-segun-Google.jpg?w=700&ssl=1" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Descripcion del Restaurante</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

<div className="container">

    <p>Enhorabuena User.!.. <br></br>

  A partir de ahora, eres miembro de la gran comunidad que conforma la RUTA 3B, donde podrás exponer de forma simple y rapida tus servicios y promociones basadosa en nuestra politica 3B "Bueno, Bonito y Barato". 

  No tengas miedo.! por muy pequeño que seas y aunque no te encuentres en el centro de la ciudad, nosotros te ayudamos a ofrecer tus servicios, porque a todos nos gusta ir de copas junto a un buen tapeo, comer bien a un precio justo y por supuesto, conocer locales nuevos que se esconden en los barrios y sus infinitas calles que conforman esta hermosa ciudad.

  No olvides subir fotos de tu local, mostrar la carta, promociones que tengas y decirnos que te distingue del resto en una breve descripción. 
  </p>
</div>

  <a className="condiciones" aria-current="page" href="#">	Nuestra politica </a>


 

  <div class="container2"/>
  <div class="row1">
    <div class="col-md-4">Reseña</div>
    <div class="col-md-4 ms-auto">Valoración</div>
  </div>


  <div class="card-group">
  <div class="card">
    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/1b/7b/13/area-interna.jpg" class="card-img-top" alt="..."/>
    
  </div>
  <div class="card">
    <img src="https://www.laguiago.com/wp-content/uploads/2020/12/RESTAURANTE-ALMA-MATER-7-scaled-1.jpg" class="card-img-top" alt="..."/>
    
  </div>
  <div class="card">
    <img src="https://www.hoteles-silken.com/content/imgsxml/galerias/panel_sliderheaderhotel/1/t-restaurante-etxaniz-015971.jpg" class="card-img-top" alt="..."/>
    
  </div>
</div>






	  </>
  );
};
