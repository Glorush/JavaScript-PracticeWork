
const sliderImg = [
  'https://myroadnews.com/wp-content/uploads/2020/07/cautofoto2020-W205-Mercedes-Benz-C200-AMG-Line-Facelift-Malaysia_Ext-2-1200x800-1-750x450.jpg',
  'https://www.focus2move.com/wp-content/uploads/2021/02/Bugatti-Divo_Lady_Bug-2020-1024-0b.jpg',
  'https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg?impolicy=resize&imwidth=480',
  'https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/mc-special-edition/MC_Edition_dekstop.jpg?$1920x2000$&fit=constrain',
  'https://maserati.scene7.com/is/image/maserati/maserati/international/Models/my22/levante-my22/my22/16_9/lv_3_front.jpg?$1920x2000$&fit=constrain',
  'https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

];

// get arrau index default value 
let imgIndex = 0;

// get image tag 
const setImageTag = document.getElementById('slider_img');
setInterval(() => {

  if(imgIndex >= sliderImg.length){

    imgIndex = 0;

  }    
  console.log(imgIndex)
  // get array index 
  const imageUrl = sliderImg[imgIndex];
  // set src attribute 
  setImageTag.setAttribute('src', imageUrl);

  // increment index number 
  imgIndex++;
},2000);
