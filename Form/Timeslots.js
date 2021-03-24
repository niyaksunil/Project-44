class Timeslots{
    constructor(){
        this.pageName = createElement("h4");
        this.workingHours = createElement("h3");
        this.workingHoursInput1 = createInput("From");
        this.workingHoursInput2 = createInput("To");
        this.workingDays = createElement("h3");
        this.workingDaysInput1 = createInput("From");
        this.workingDaysInput2 = createInput("To");
        this.timeslotCustomer = createElement("h3");
        this.mins = createInput("20 min",'minutes');
        this.numberOfCustomer = createElement("h3");
        this.customerNo = createInput("Number of Customers",'number');
        this.submitTimeslot = createButton("Submit");
        this.backTimeslot = createButton("Back");

    }

    hide(){
        this.pageName.hide();
        this.workingHours.hide();
        this.workingHoursInput1.hide();
        this.workingHoursInput2.hide();
        this.workingDays.hide();
        this.workingDaysInput1.hide();
        this.workingDaysInput2.hide();
        this.timeslotCustomer.hide();
        this.mins.hide();
        this.numberOfCustomer.hide();
        this.customerNo.hide();
        this.submitTimeslot.hide();
        this.backTimeslot.hide();
    }

    showTimeslots(){
        this.pageName.html(pageName);
        this.workingHours.html("Working Hours : ");
        this.workingDays.html("Working Days : ");
        this.timeslotCustomer.html("Timeslot for each customer : ");
        this.numberOfCustomer.html("Number of customer in each slot : ");

        this.pageName.position(displayWidth/2.1, 100);
        this.workingHours.position(displayWidth/2-140, 175);
        this.workingHoursInput1.position(displayWidth/2,195);
        this.workingHoursInput2.position(displayWidth/2+100,195);
        this.workingDays.position(displayWidth/2-140,230);
        this.workingDaysInput1.position(displayWidth/2,249);
        this.workingDaysInput2.position(displayWidth/2+100,249);
        this.timeslotCustomer.position(displayWidth/2-200,285);
        this.mins.position(displayWidth/2+40,305);
        this.numberOfCustomer.position(displayWidth/2-210,340);
        this.customerNo.position(displayWidth/2+80,359);
        this.submitTimeslot.position(displayWidth/2+40,415);
        this.backTimeslot.position(displayWidth/4,470)

        this.submitTimeslot.mousePressed(()=>{
            this.hide();
            pageName = 'Service Provider Screen';
            objFormState.formstate = 'SP.Screen';
            objSPScreen = new SPScreen();
            objSPScreen.showScreen();
            console.log(objFormState.formstate);
        });

        this.backTimeslot.mousePressed(()=>{
            this.hide();
            pageName = 'Service Provider';
            objFormState.formstate = 'ServiceProvider';
            objServiceProvider = new ServiceProvider();
            objServiceProvider.serviceProviderLogin();
            console.log(objFormState.formstate);
        });
    }
}