class EmployeePayroll {

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z\\s]{2,}$");
        if(nameRegex.test(name))
            this._name = name;
        else 
            throw "Name must start with capital letter and minimum length 3";
    }

    get id(){
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic){
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender){
        this._gender = gender;
    }

    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }

    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }
    
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        const options = { year: "numeric", month: "long", date: "numeric"};
        if(startDate != undefined) {
            if(startDate < new Date())
            {
                const empDate = this.startDate === "undefined" ? "undefined" :
                    startDate.toLocaleDateString("en-US", options);
                this._startDate = empDate;
            }
            else 
                throw "Future Start date not valid. Enter correct joining date";
        }
    }

    toString() {
        return "Id=" + this.id + ", Name=" + this.name + ", Gender=" + this.gender +
          ", ProfilePic=" + this.profilePic + ", department=" + this.department +
          ", Salary=" + this.salary + ", startDate=" + this.startDate + ", note=" + this.note;
    }

}