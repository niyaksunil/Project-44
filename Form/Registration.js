class Registration{
    constructor(){
        this.pageName = createElement("p");
        this.userName = createInput("Name",text);
        this.phoneNumber = createInput("Phone Number");
        this.email = createInput("abc@example.com",'email');
        this.password = createInput("","password");
        this.confirmPassword = createInput("","password");
        this.submitBtn = createButton("Submit");
        this.backBtn = createButton("Back");
        this.error = createElement("h3")
    }
    
    hide(){
        this.pageName.hide(); 
        this.userName.hide(); 
        this.phoneNumber.hide(); 
        this.email.hide(); 
        this.password.hide(); 
        this.confirmPassword.hide(); 
        this.submitBtn.hide(); 
        this.backBtn.hide();
        this.error.hide();
    }

    newRegistration(){
        this.pageName.html(pageName);
        // this.error.html(error_msg);
        this.pageName.position(displayWidth/2- 50, 105);
        this.userName.position(displayWidth/2- 50, 175);
        this.phoneNumber.position(displayWidth/2- 50, 225);
        this.email.position(displayWidth/2- 50, 275);
        this.password.position(displayWidth/2- 50, 325);
        this.confirmPassword.position(displayWidth/2- 50, 375);
        this.submitBtn.position(displayWidth/2,430);
        this.backBtn.position(displayWidth/4,460);
        // fill("red");
        this.error.position(displayWidth/2- 50,387);
        this.error.style('color', '#ff0000');
        this.error.style('font-size', '12px');
    

        var name = this.userName.value();
        var email = this.email.value();
        var contact = this.phoneNumber.value();

        this.submitBtn.mousePressed(()=>{
           
            //console.log(this.password.value());
            var password = this.password.value();
            var confirmPassword = this.confirmPassword.value();

            if(password !== confirmPassword){
            // console.log("Error msg");
            
            error_msg = "Passwords does not match";
            this.error.html(error_msg);
                // clear();
            }else{                
                auth.createUserWithEmailAndPassword(email, password)
                .then(()=>{
                    database.ref("Users/"+name+"/").set({
                        userName:name,
                        email : email,
                        contact : contact
                        });
                    objFormState.formstate = 'login';
                })           
              
            this.hide();
            pageName = 'Log In ';
            loginPage = new Login();
            loginPage.start();
            objFormState.formstate = 'login';

            }
           
        });
       
    }
};