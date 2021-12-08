var employees =[]
function Employee(name,position, salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.status = "Full Time";}
    Employee.prototype.print = print
    function print(){
        console.log("Name: " + this.name + "position: " + this.position + "Salary: " + this.salary + "Status: " + this.status)}  
        var maryJane = new Employee("Mary Jane","cook",10000)
        var steveJobs = new Employee("Steve Jobs", "Apple Owner", 1000,000)
        var jeffBezoes = new Employee("Jeff Bezos", "Amazon Ownwer", 10000000)
        maryJane.status ="Part time"
        maryJane.print()
        steveJobs.print()
        jeffBezoes.print()
        var newEPs = ["Mary Jane", "Steve Jobs", "Jeff Bezoes"]
for (i = 0; i < newEPs.length; i++){

    employees.push(newEPs[i])
}
console.log(employees)
