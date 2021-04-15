var loginPage;
var objCustomer, objServiceProvider, objRegistration,objTimeslots,objSPScreen;
var objFormState, admin;
var pageName, error_msg;
var database,auth;
var allServices;
let spTable;

function setup(){
  createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  auth = firebase.auth();
  
  pageName = 'Log In';
  objFormState = new FormState();
  objFormState.getAvailableServices();
  
  if(objFormState.formState === 'login'){
    loginPage = new Login();
      console.log("Login");
      loginPage.start();
  }
  
}

function draw(){
  if(objFormState.formState === 'register'){
    //console.log(objFormState.formState);
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

      else{
        if(objFormState.formState === 'SP.Timeslots'){
        clear();
        objTimeslots.showTimeslots();
        
        }

        else{
          if(objFormState.formState === 'SP.Screen'){
          clear();
          objSPScreen.showScreen();
          }
        }
      }
    }
  }
}