class SPScreen{

    constructor(){
        this.pageName = createElement("h3");
        this.bookedTimeslots = createElement("h2");
        this.backSPScreen = createButton("Back to Customer Page");
        this.CreateService = createButton("Create a new Service");
        
    }

    hide(){
        this.pageName.hide();
        this.bookedTimeslots.hide();
        this.backSPScreen.hide();
        this.CreateService.hide();
    }

    showScreen(){
        this.pageName.html(pageName);
        spTable = new p5.Table()
        spTable.addColumn('Customer');
        spTable.addColumn('Phone');
        spTable.addColumn('Date');
        spTable.addColumn('Time');

        this.bookedTimeslots.html(" (Show a report on booked timeslots) ");

        this.pageName.position(displayWidth/2.3, 100);
        this.bookedTimeslots.position(displayWidth/2.6,220);
        this.backSPScreen.position(displayWidth/4,470)
        this.CreateService.position(displayWidth/1.5+98,45);

        this.backSPScreen.mousePressed(()=>{
            this.hide();
            pageName = 'Customer';
            objFormState.formstate = 'customer';
            objCustomer = new Customer();
            objCustomer.customerLogin();
            console.log(objFormState.formstate);
        });

        this.CreateService.mousePressed(()=>{
            this.hide();
            pageName = 'Service Provider';
            objServiceProvider = new ServiceProvider();
            objServiceProvider.serviceProviderLogin();
            objFormState.formstate = 'ServiceProvider';

        });
    }
}