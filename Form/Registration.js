class Registration{
    constructor(){
        this.pageName = createElement("h4");
        this.userName = createInput("Name",text);
        this.phoneNumber = createInput("Phone Number");
        this.email = createInput("abc@example.com",'email');
        this.password = createInput("","password");
        this.confirmPassword = createInput("","password");
        this.submitBtn = createButton("Submit");
        this.backBtn = createButton("Back");
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
    }

    newRegistration(){
        this.pageName.html(pageName);

        this.pageName.position(displayWidth/2- 50, 105);
        this.userName.position(displayWidth/2- 50, 175);
        this.phoneNumber.position(displayWidth/2- 50, 225);
        this.email.position(displayWidth/2- 50, 275);
        this.password.position(displayWidth/2- 50, 325);
        this.confirmPassword.position(displayWidth/2- 50, 375);
        this.submitBtn.position(displayWidth/2,430);
        this.backBtn.position(displayWidth/4,460);
        console.log("Restration");

        this.next.mousePressed(()=>{
            objFormState.formstate = 'welcome';
        });

       
        
    }
};