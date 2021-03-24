class Login{
    constructor(){

        this.title = createElement("h2");
        this.pageName = createElement("h4");
        this.userName = createInput("Username",text);
        this.password = createInput("","password");
        // this.confirmPassword = createInput("","password");
        // this.customer = createButton("Customer");
        // this.serviceProvider = createButton("Service Provider");
        this.btnLogin = createButton("Login");
        this.registration = createButton("Registration");
    }

    hide(){
        this.pageName.hide();
        this.userName.hide();
        this.password.hide();
        this.btnLogin.hide();
        this.registration.hide();
        
    }

    start(){

        this.title.html("Queue App");
        this.title.position(displayWidth/2- 50, 50);
        this.pageName.html(pageName);
        this.pageName.position(displayWidth/2, 100);
        this.userName.position(displayWidth/2-50, 175);
        this.password.position(displayWidth/2-50 , 225);
        this.btnLogin.position(displayWidth/2, 275); 
        this.registration.position(displayWidth/2 ,373 );
        // this.customer.mousePressed(()=>{
        //     objCustomer.customerLogin();
        // })

        // this.serviceProvider.mousePressed(()=>{
        //     objServiceProvider.serviceProviderLogin();
        // })

        this.registration.mousePressed(()=>{
            this.hide();
            pageName = "Register New User";
            objRegistration = new Registration();
            objFormState.formState = 'register'
           
        })

        this.btnLogin.mousePressed(()=>{
            this.hide();
            pageName = 'Customer';
            objFormState.formstate = 'customer';
            if(this.userName.value() === "Niya"){
                admin = new Admin();
               // if(){
                admin.showAdmin();
                //}
            }else{
                objCustomer = new Customer();
                objCustomer.customerLogin();
                console.log(objFormState.formstate);
            }
        });
    }

}

