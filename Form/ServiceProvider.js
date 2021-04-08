class ServiceProvider{
    constructor(){
        this.pageName = createElement("h4");
        this.organizationName = createInput("Name of the Organization");
        this.serviceType = createInput("Type of Service");
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
        this.pageName.html(pageName);
        this.pageName.position(displayWidth/2-50, 100);
        this.organizationName.position(displayWidth/2- 50, 175)
        this.serviceType.position(displayWidth/2- 50, 225);
        this.organizationAddress.position(displayWidth/2- 50, 275);
        this.submitService.position(displayWidth/2,320);
        this.backService.position(displayWidth/3,369);

        this.submitService.mousePressed(()=>{

            var NameOfOrganization = this.organizationName.value();
            var serviceTypeDB = this.serviceType.value();
            var AddressOforganization = this.organizationAddress.value();

            database.ref("Service Provider Information/"+"/").set({
                organizationName : NameOfOrganization,
                serviceType : serviceTypeDB,
                organizationAddress : AddressOforganization
                });
        });


    }

}