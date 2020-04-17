var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
var Person = /** @class */ (function () {
    function Person(firstname, lastname, age, phonenumber, state, zipcode, occupation) {
        this.FirstName = firstname;
        this.LastName = lastname;
        this.Age = age;
        this.Phonenumber = phonenumber;
        this.State = state;
        this.Zipcode = zipcode;
        this.Occupation = occupation;
    }
    Person.prototype.getFullName = function () {
        return this.FirstName + " " + this.LastName;
    };
    Person.prototype.getNameNumber = function () {
        return this.FirstName + this.LastName + " " + this.Phonenumber;
    };
    Person.prototype.getLocation = function () {
        return this.firstName + "'s Location is: " + this.state + " " + this.zipCode;
    };
    Person.prototype.getJob = function () {
        return this.firstName + "is a/n " + this.occupation;
    };
    return Person;
}());
var Stacy = new Person("Stacy", "Ward", 55, 9657345211, "MA", 67853, "Fisher");
var Frank = new Person("Frank", "Smith", 48, 7543642135, "CA", 65654, "Bug Catcher");
var Jayquellin = new Person("Jayquellin", "Bradley", 23, 2423339872, "NY", 89432, "Teacher", 25);
var Deenice = new Person("Deenice", "Edwards", 32, 7045756869, "NC", 28023, "Software Engineer");

document.getElementById("para2").innerHTML = Stacy.getFullName();
document.getElementById("para3").innerHTML = Frank.getLocation();
document.getElementById("para4").innerHTML = Jayquellin.getNameNumber() ;
document.getElementById("para5").innerHTML = Deenice.getFullName() + "<br>" + Deenice.getJob();

