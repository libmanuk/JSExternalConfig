const modulePath = document.querySelector('script[data-config]').dataset.config;

import(modulePath)
.then(module => {
  const data = module.default;
  generateVars(data); // This is the function that creates the variables
})
.catch(error => {
  console.error("Error with config data", error);
})

function generateVars(data){
  console.log(data.hdrSimple);
  console.log(data.hdrAlertMsg);
  console.log(data.hdrAlertTitle);  
  console.log(data.hdrAlertUrlLabel);
}
