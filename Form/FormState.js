class FormState{
    constructor(){
        this.formState = 'login';
    }

      getAvailableServices(){
        // console.log(allServices);
          database.ref("Services/").on("value", (data)=>{
            allServices = data.val();
            console.log(allServices);
        })
        // console.log("exit getAvailableServices");
    }
}