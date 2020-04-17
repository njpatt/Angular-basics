function sayHello(person: string) :string {
    return "Hello, " + person;
}
var user ="Teacher McGee";
document.getElementById("para").innerHTML = sayHello(user);
class Person {
    FirstName: string;
    LastName: string;
    Age: number;
    Phonenumber: number;
    State: string;
    Zipcode: number;
    Occupation: string;
    constructor(firstname:string,lastname:string, age:number, phonenumber:number, state:string,zipcode:number,occupation:string ){
        this.FirstName=firstname;
        this.LastName=lastname;
        this.Age=age;
        this.Phonenumber=phonenumber;
        this.State=state;
        this.Zipcode=zipcode;
        this.Occupation=occupation;
    }
    getFullName():string{
        return this.FirstName + " " + this.LastName;
    }
    getNameNumber():string {
        return this.FirstName + this.LastName + " " +  this.Phonenumber;
    }
    getLocation():string{
        return this.State + " " + this.Zipcode;
    }
    getJob(){
        return this.FirstName + " is a  " + this.Occupation;
    }
}
var Stacy = new Person("Stacy", "Ward", 55, 9657345211, "MA", 67853, "Florist");
var Frank = new Person("Frank", "Smith", 48, 7543642135, "CA", 65654, "Pilot");
var Jayquellin = new Person("Jayquellin", "Bradley", 23, 2423339872, "NY", 89432, "Mechanic", 25);
var Deenice = new Person("Deenice", "Edwards", 32, 7045756869, "NC", 28023, "Software Engineer");

document.getElementById("para2").innerHTML = Stacy.getFullName();
document.getElementById("para3").innerHTML = Frank.getLocation();
document.getElementById("para4").innerHTML = Jayquellin.getNameNumber() + "<br>" + Jayquellin.calculateWage();
document.getElementById("para5").innerHTML = Deenice.getFullName() + "<br>" + Deenice.getJob();





