var loginPage;
var objCustomer, objServiceProvider, objRegistration;
var objFormState;
var pageName;

function setup(){
  createCanvas(displayWidth, displayHeight);
  pageName = 'Log In';
  objFormState = new FormState();

  if(objFormState.formState === 'login'){
    loginPage = new Login();

    loginPage.start();
  }
  
}

function draw(){
  if(objFormState.formState === 'register'){
    console.log(objFormState.formState);
    clear();
    objRegistration.newRegistration();

  }else{
      if(objFormState.formState === 'customer'){
      clear();
      objCustomer.customerLogin();
    }

    else{
      if(objFormState.formState === 'ServiceProvider'){
      clear();
      objServiceProvider.serviceProviderLogin();
      }
    }
  }
}