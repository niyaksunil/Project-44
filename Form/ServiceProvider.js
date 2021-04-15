class ServiceProvider{
    constructor(){
        this.pageName = createElement("h4");
        // name of organization or individual        
        this.organizationName = createInput("Name of the Organization");
        this.serviceType = createSelect();
        this.organizationAddress = createInput("Organization Address");
        this.submitService = createButton("Submit");
        this.backService = createButton("Back");
    }

    hide(){
        this.pageName.hide();
        this.organizationName.hide();
        this.serviceType.hide();
        this.organizationAddress.hide();
        this.submitService.hide();
        this.backService.hide();
    }

    

    serviceProviderLogin(){
        console.log("entered serviceProviderLogin");
        this.pageName.html(pageName);
        this.pageName.position(displayWidth/2-50, 100);
        this.organizationName.position(displayWidth/2- 50, 175)
        this.serviceType.position(displayWidth/2- 50, 225);
        this.organizationAddress.position(displayWidth/2- 50, 275);
        this.submitService.position(displayWidth/2,320);
        this.backService.position(displayWidth/3,369);  

        if(allServices !== undefined){
            this.serviceType.html("Type of Service");
            for(var servs in allServices){
                console.log(servs);
                this.serviceType.option(allServices[servs]);
            }
            
        }

        this.submitService.mousePressed(()=>{

            var NameOfOrganization = this.organizationName.value();
            var serviceTypeDB = this.serviceType.value();
            var AddressOforganization = this.organizationAddress.value();
            var registeredEmailId = auth.currentUser.email;
            console.log(registeredEmailId);
           /* database.ref("Service Provider Information/"+"/").set({
                organizationName : NameOfOrganization,
                serviceType : serviceTypeDB,
                organizationAddress : AddressOforganization,
                userId: registeredEmailId
            });*/
            var fieldName = serviceTypeDB+"/"+NameOfOrganization;
            console.log(fieldName);
            database.ref(fieldName).set({
                organizationName : NameOfOrganization,
                serviceType : serviceTypeDB,
                organizationAddress : AddressOforganization,
                userId: registeredEmailId
            });

            this.hide();
            pageName = 'Timeslots ';
            objTimeslots =  new Timeslots();
            objTimeslots.showTimeslots();
            objFormState.formstate = 'SP.Timeslots';
        });

        
            
        
            
        // console.log("exit serviceProviderLogin");

    }

}