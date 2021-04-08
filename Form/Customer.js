class Customer{
    constructor(){
        this.pageName = createElement("h4");
        this.selectService = createElement("h5");
        this.services = createSelect();
        this.serviceProviderLabel = createElement("h5");
        this.serviceProvider = createSelect();
        this.val = '';
        this.selectServiceProvider = createElement("h4");
        this.serviceProviderInformation = createElement("h4");
        this.selectDate = createElement("h4");
        this.dateInp = createInput("Date",'date');
        this.timeSchedule = createElement("h4");
        this.time1 = createInput("9:00",'time');
        this.submit = createButton("Submit");
        this.switchService = createButton("Switch the Sevice");

    }

    hide(){
        this.pageName.hide();
        this.selectService.hide();
        this.services.hide();
        this.serviceProviderLabel.hide();
        this.serviceProvider.hide();
        this.selectServiceProvider.hide();
        this.serviceProviderInformation.hide();
        this.selectDate.hide();
        this.dateInp.hide();
        this.timeSchedule.hide();
        this.time1.hide();
        this.submit.hide();
        this.switchService.hide();
    }

    changeService(serviceProvdr){
        this.serviceProvider.remove();
        this.serviceProvider = createSelect();
        this.serviceProvider.position(displayWidth/2+70, 220);
            if (serviceProvdr === "Doctor"){
                this.serviceProvider.option("Dr. Raju");
                this.serviceProvider.option("Doctor1");
                this.serviceProvider.option("Doctor2");
                this.serviceProvider.option("Doctor3");
                this.serviceProvider.option("Doctor4");
                this.serviceProvider.option("Doctor5");
                this.serviceProvider.option("Doctor6");
    
            }else if(serviceProvdr === "Store"){
                this.serviceProvider.option("Store1");
                this.serviceProvider.option("Store2");
                this.serviceProvider.option("Store3");
                this.serviceProvider.option("Store4");
                this.serviceProvider.option("Store5");
                this.serviceProvider.option("Store6");
                this.serviceProvider.option("Store7");
    
            }else if(serviceProvdr === "Textile"){
                this.serviceProvider.option("Textile1");
                this.serviceProvider.option("Textile2");
                this.serviceProvider.option("Textile3");
                this.serviceProvider.option("Textile4");
                this.serviceProvider.option("Textile5");
                this.serviceProvider.option("Textile6");
                this.serviceProvider.option("Textile7");
    
            }else if(serviceProvdr === "Mobile Shop"){
                this.serviceProvider.option("Mobile Shop1");
                this.serviceProvider.option("Mobile Shop2");
                this.serviceProvider.option("Mobile Shop3");
                this.serviceProvider.option("Mobile Shop4");
                this.serviceProvider.option("Mobile Shop5");
                this.serviceProvider.option("Mobile Shop6");
                this.serviceProvider.option("Mobile Shop7");
    
            }else if(serviceProvdr === "Stationary"){
                this.serviceProvider.option("Stationary1");
                this.serviceProvider.option("Stationary2");
                this.serviceProvider.option("Stationary3");
                this.serviceProvider.option("Stationary4");
                this.serviceProvider.option("Stationary5");
                this.serviceProvider.option("Stationary6");
                this.serviceProvider.option("Stationary7");
    
            }
        
    }

    customerLogin(){
        this.pageName.html(pageName);
        this.selectService.html("Select Service : ");
        this.serviceProviderLabel.html("Select Service Provider : ");
        this.serviceProviderInformation.html("Total information about the Service Provider");
        this.timeSchedule.html("Schedule your time");
        this.selectDate.html("Select Date :");
        this.services.option("Select A Service");
        this.services.option("Doctor");
        this.services.option("Store");
        this.services.option("Textile");
        this.services.option("Mobile Shop");
        this.services.option("Stationary");

        this.services.changed(()=>{
            this.val = this.services.value();
                this.changeService(this.val);
        });
        
        this.pageName.position(displayWidth/2, 100);
        this.selectService.position(displayWidth/2-75, 175);
        this.services.position(displayWidth/2+70, 195);
        this.serviceProviderLabel.position(displayWidth/2-75, 200);
        this.serviceProviderInformation.position(displayWidth/3+130,270)
        this.selectDate.position(displayWidth/2-75,320);
        this.dateInp.position(displayWidth/2+70,340);
        this.timeSchedule.position(displayWidth/2-75,370);
        this.time1.position(displayWidth/2,430);
        this.submit.position(displayWidth/2,480);
        this.switchService.position(displayWidth/1.5+98,45);

        this.switchService.mousePressed(()=>{
            this.hide();
            pageName = 'Service Provider';
            objFormState.formstate = 'ServiceProvider';
            objServiceProvider = new ServiceProvider();
            objServiceProvider.serviceProviderLogin();
            console.log(objFormState.formstate);
        });

        var date = this.dateInp.value();
        var time = this.time1.value();

        this.submit.mousePressed(()=>{
            database.ref("Booked Sevices/"+"/").set({
                date : date,
                time : time
                });
        });
       console.log(date); 
    }
}