// First task

let arr = [];
let proffesion = ['Junior developer', 'Middle developer', 'Senior developer', 'Junior QA', 'Middle QA', 'Senior QA', 'Project manager']


// do {
//     var names = prompt('Write name ');
//     arr.push(names);
// } while(arr.length < proffesion.length);

console.log(proffesion);
console.log(arr);


// Second task


// let team = {};

// for (let i = 0; i < arr.length || i < proffesion.length; i++) {
//     team[i] = new Object();
//     team[i].name = arr[i];
//     team[i].position = proffesion[i];
//     n1 = getLowerBound(obj[i].position)
//     n2 = getUpperBound(obj[i].position) 
//     salary = getSalary(n1, n2)
//     team[i].salary = salary
//     // Fourth task 
//     team[i].tellAboutYourSelf = function introduceYourSelf () {
//         return alert('Мене звуть ' + this.name + ' я працюю ' + this.position + ' моя зарплатня ' + this.salary);
//     }
// }
// console.log(obj);
//Third task

// function getSalary (n1 = 500, n2 = 4500) {
//     return Math.floor(Math.random () * (n2 - n1) + n1) ;
// } 

// function getLowerBound(position) {
//     if (position.toLowerCase().indexOf('junior') !== -1) {
//         return 500;
//     }
//     if (position.toLowerCase().indexOf('middle') !== -1) {
//         return 1000;
//     }
//     if (position.toLowerCase().indexOf('senior') !== -1) {
//         return 2500;
//     }
//     return 4000;
// }  

// function getUpperBound(position) {
//     if (position.toLowerCase().indexOf('junior') !== -1) {
//         return 1000;
//     }
//     if (position.toLowerCase().indexOf('middle') !== -1) {
//         return 1500;
//     }
//     if (position.toLowerCase().indexOf('senior') !== -1) {
//         return 3000;
//     }
//     return 4500;
// }

// Fifth task
// obj.showobj  = function showAll() {
//         console.log(obj);
//     }









//Creat function for everything

// getNames
function getNames() {
    do {
    var names = prompt('Write name ');
    arr.push(names);
} while(arr.length < proffesion.length);
}



// creaetobj
var obj = {};
function createobj() {
    for (let i = 0; i < arr.length || i < proffesion.length; i++) {
        obj[i] = new Object();
        obj[i].name = arr[i];
        obj[i].position = proffesion[i];
    } 
    console.log(obj)
}



// setSalary 
function setSalary () {
    for (let i = 0; i < arr.length; i++) {
        n1 = getLowerBound(obj[i].position)
        n2 = getUpperBound(obj[i].position) 
        salary = getSalary(n1, n2)
        obj[i].salary = salary
    }
    function getSalary (n1 = 500, n2 = 4500) {
        return Math.floor(Math.random () * (n2 - n1) + n1) ;
    } 

    function getLowerBound(position) {
        if (position.toLowerCase().indexOf('junior') !== -1) {
            return 500;
        }
        if (position.toLowerCase().indexOf('middle') !== -1) {
            return 1000;
        }
        if (position.toLowerCase().indexOf('senior') !== -1) {
            return 2500;
        }
        return 4000;
    }  
 
    function getUpperBound(position) {
        if (position.toLowerCase().indexOf('junior') !== -1) {
            return 1000;
        }
        if (position.toLowerCase().indexOf('middle') !== -1) {
            return 1500;
        }
        if (position.toLowerCase().indexOf('senior') !== -1) {
            return 3000;
        }
        return 4500;
    } 
}

function setMethod(){
    for (let i = 0; i < arr.length; i++) {
        obj[i].tellAboutYourSelf = function (){
            return alert('Мене звуть ' + obj[i].name + ' я працюю ' + obj[i].position + ' моя зарплатня ' + obj[i].salary);
        }
    }
}



// for (let i = 0; i < arr.length; i++) {
//     obj[i].tellAboutYourSelf = function introduceYourSelf () {
//         return alert('Мене звуть ' + this.name + ' я працюю ' + this.position + ' моя зарплатня ' + this.salary);
//     }
// }

obj.showTeam  = function() {
    for (let i = 0; i < arr.length; i++) {
        obj[i].tellAboutYourSelf();
    }
}

getNames();
createobj();
setMethod();
setSalary();
obj.showTeam();