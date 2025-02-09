const PI = Math.PI; //approx(~) value of pi

const cylinder = document.getElementById("cylinder-form");
const cylinder_volume_ans_box = document.getElementById("cylinder-volume");
const cones = document.getElementById("cones-form");
const cones_volume_ans_box = document.getElementById("cones-volume");
const sphere = document.getElementById("sphere-form");
const sphere_volume_ans_box = document.getElementById("sphere-volume");


function formDataHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  return formProps;
}

if (cylinder) {
  cylinder.addEventListener("submit", (e) => {
    const { radious, height } = formDataHandler(e);
    const volume = PI * Math.pow(radious, 2) * height; 
    cylinder_volume_ans_box.innerHTML = (
      Math.round(volume * 100) / 100
    ).toFixed(2);
  });
}

if (cones) {
  cones.addEventListener("submit", (e) => {
    const {radious, height} = formDataHandler(e);
    const volume = (PI * radious ** 2 * height) / 3; //Math.pow() = ** -> SQR
    cones_volume_ans_box.innerHTML = volume.toFixed(2);
  });
}

if(sphere){
  sphere.addEventListener('submit',(e)=>{
    const {radious} = formDataHandler(e);
    const volume = (4 * PI * Math.pow(radious,3)) / 3; // Math.pow(radious,3) = radious ** 3
    sphere_volume_ans_box.innerHTML = volume.toFixed(2);
  })
}