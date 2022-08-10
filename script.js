// Question One

function userInputs() {
    var main = document.querySelector('.container');
    // while (main.hasChildNodes) {
    //     main.removeChild(main.lastChild);   
    // }

    // for (var i = 0; i < main, i++;) {
    //     main.appendChild(document.createTextNode('Class: ' + i));
    //     var inputappendChild(document.createElement('input'));


    // }

    let divClass = document.createElement('input');
    divClass.type = 'text';
    divClass.placeholder = 'class';
    main.appendChild(divClass);

    let subject = document.createElement('input');
    subject.type = 'text';
    subject.placeholder = 'subject';
    main.appendChild(subject);

    let date = document.createElement('input');
    date.type = 'date';
    date.placeholder = 'date';
    main.appendChild(date);

    if (divClass.hasChildNodes()) {
        divClass.innerHTML = ' '
    }

    disableButtons();
}

function disableButtons() {
    let button = document.getElementById('sub-btn');
    if (userInputs() === 2) {
        button.disabled = true;

    }
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