class SPScreen{
    constructor(){
        this.pageName = createElement("h3");
        this.bookedTimeslots = createElement("h2");
        this.backSPScreen = createButton("Back to Customer Page");
        
    }

    hide(){
        this.pageName.hide();
        this.bookedTimeslots.hide();
        this.backSPScreen.hide();

    }

    showScreen(){
        this.pageName.html(pageName);
        this.bookedTimeslots.html(" (Show a report on booked timeslots) ");

        this.pageName.position(displayWidth/2.3, 100);
        this.bookedTimeslots.position(displayWidth/2.6,220);
        this.backSPScreen.position(displayWidth/4,470)
        
        this.backSPScreen.mousePressed(()=>{
            this.hide();
            pageName = 'Customer';
            objFormState.formstate = 'customer';
            objCustomer = new Customer();
            objCustomer.customerLogin();
            console.log(objFormState.formstate);
        });
    }
}