// Question One
let main = document.querySelector('.container');
let class_one = document.createElement('input');
class_one.setAttribute('type', 'input');
class_one.placeholder = 'Class'

let subject = document.createElement('input');
subject.setAttribute('type', 'input');
subject.placeholder = 'Subject'

let date = document.createElement('input');
date.setAttribute('type', 'date');

main.appendChild(class_one);
main.appendChild(subject);
main.appendChild(date);



function userInputs() {
    class_one = class_one.value;
    subject = subject.value;
    date = date.value;

    main.innerHTML = class_one + " " + subject + " " + date

}


var hopperLab = {
    name: "bar",
    func: function () {
        var self = this;
        console.log("outer func: this.name = " + this.name);
        console.log("outer func: self.name = " + self.name);
        (function () {
            console.log("inner func: this.name = " + this.name);
            console.log("inner func: self.name = " + self.name);
        }());
    }
};
hopperLab.func();