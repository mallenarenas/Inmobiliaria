const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      meters: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      meters: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      meters: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      meters: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      meters: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "assets/img/mansion.jpeg",
      rooms: 5,
      meters: 500
    }
  ];
// Página de inicio cargando todas las propiedades 
function addProperty(name, description, src, rooms, meters){
return`
<div class="propiedad">
                <div class="img" style='background-image: url(${src})'></div>
                <section>
                    <h5>${name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${rooms}</p>
                        <p>Metros: ${meters}</p>
                    </div>
                    <p class="my-3">${description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>
`};
function initialCharge(dataSet){
  let properties = document.querySelector(".propiedades");   
  for (let property of dataSet) {
  properties.innerHTML += addProperty(property.name,
    property.description,
    property.src,
    property.rooms,
    property.meters)
  }}
  initialCharge(propiedadesJSON); 
  // Variables de largo de la base de datos y total de propiedades mostrada
let n = propiedadesJSON.length;
let total = document.querySelector("#total");
total.innerHTML = n;
// Buscador de propiedades
button = document.querySelector("#button").addEventListener("click", ()=>{
  let roomsSearch = document.querySelector('#rooms_search');
  let metersMin = document.querySelector('#meters_min');
  let metersMax = document.querySelector('#meters_max');
  let propSearch = document.querySelector(".propiedades"); 
  propSearch.innerHTML= ""
  let numberSearch = 0;
  for (let property of propiedadesJSON) {
     if ( Number(property.rooms) >= Number(roomsSearch.value) && 
     Number(property.meters) >= Number(metersMin.value) && 
     Number(property.meters) <= Number(metersMax.value)){
     propSearch.innerHTML += addProperty(property.name,
      property.description,
      property.src,
      property.rooms,
      property.meters)
      numberSearch = numberSearch + 1;
      }};
    total.innerHTML = numberSearch;
    if (Number(roomsSearch.value) == 0 || 
      Number(metersMin.value) == 0 || 
      Number(metersMax.value) == 0) {
     alert("Debe llenar todos los campos con números mayores a 0");  
       };  
})        
  