app.controller('CarController', ['CarService','CompanyService', function(CarService, CompanyService){
    var self = this;
    self.message = 'What about them tacos??';
    self.cars = CarService.cars;
    self.companies = CompanyService.companies,

    self.addNewCar = CarService.addNewCar
    self.newCar = CarService.newCar
    console.log(self.cars);
}]);