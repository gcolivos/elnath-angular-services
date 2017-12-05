app.service('CarService', ['$http', function($http){
    var self = this; //self refers to the service, NOT what is going on with the controller
    //inside the controller, self refers to the controller. Self is whatever it's inside of.

    self.cars = {list: [] }; //this is the other side of the company.controller 
    //reference of (self.companies=CompanyService.companies)

    self.newCar = {}; //need to bring along newCompany via controller and definie it so that you can
    //clear the fields below at the end of the addNewCompany call

    self.getCars = function () { //and then this is the section that refers to the AJAX request to
        //companies.js route, which then feeds into the database
        console.log("about to Get Cars");
        $http({
            method: 'GET',
            url: '/cars'
        }).then(function (response) {
            console.log('response', response);
            self.cars.list = response.data;
        });
    };

    self.addNewCar = function (newCar) {
        console.log(newCompany);
        $http({
            method: 'POST',
            url: '/cars',
            data: newCar
        }).then(function (response) {
            console.log('response', response);
            self.getCompanies();
            self.newCompany.name = '';
            self.newCompany.country = '';
        });
    }
    
    self.getCars();   //don't forget to call the function!
}]);