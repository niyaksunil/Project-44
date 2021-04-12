class Customer{
    constructor(){
        this.pageName = createElement("h4");
        this.selectService = createElement("h5");
        this.services = createSelect();
        this.serviceProviderLabel = createElement("h5");
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
        this.selectServiceProvider.hide();
        this.serviceProviderInformation.hide();
        this.selectDate.hide();
        this.dateInp.hide();
        this.timeSchedule.hide();
        this.time1.hide();
        this.submit.hide();
        this.switchService.hide();
    }
    

    customerLogin(){

        this.pageName.html(pageName);
        this.selectService.html("Select Service : ");
        this.serviceProviderLabel.html("Select Service Provider : ");
        this.serviceProviderInformation.html("Total information about the Service Provider");
        this.timeSchedule.html("Schedule your time");
        this.selectDate.html("Select Date :");
        
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

        if(allServices !== undefined){
            // console.log("allServices is not undefined")
            this.services.html("Type of Service");
            for(var srvses in allServices){
                console.log(srvses);
                this.services.option(allServices[srvses]);
            }
        }

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
    }
}