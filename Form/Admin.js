class Admin{
    constructor(){
        this.services = createSelect();
        this.name = createInput("Name");
        this.stream = createInput("Stream");
        this.val = "";
    }

    showAdmin(){
        this.services.option("Select a Service");
        this.services.option("Doctor");
        this.services.option("Store");
        this.services.option("Textile");
        this.services.option("Mobile Shop");
        this.services.option("Stationary");
        this.val = this.services.value();
        if(this.val !== "Select a Service"){
            this.services.changed(()=>{            
                    this.addService(this.val, this.name.value(), this.stream.value());
            });
        }
    } 

    

    addService(service,name,stream){        
        var serviceRef = database.ref("service/"+service);
        var count = 1;
        var allServices;
        serviceRef.on("value",(data)=>{
            allServices = data.val();
        });
        if(allServices !== undefined){
            for(var x in allServices){
                count = count+1;
            }
        }
        

        var addServiceRef = database.ref("service/"+service+"/"+service+count);
        addServiceRef.set({
            name: name,
            stream:stream
        })
    }
}