// problem 1 : 
function anaToVori(ana) {
    if (typeof ana != "number") {
        return "please enter a number";
    }
    let vori = ana / 16;
    return vori;
}

let totalVori = anaToVori(16);
console.log(totalVori);


//problem 2 : 
function pandaCost(singara, somosa, jelebi) {

    if (typeof singara != 'number') {
        return "please enter a number";
    }
    else if (typeof somosa != 'number') {
        return "Enter a number please";
    }
    else if (typeof jelebi != 'number') {
        return "this is not acceptable";
    }

    const perSingara = 7;
    const perSomosa = 10;
    const perJelebi = 15;
    const singaraCost = singara * perSingara;
    const somosaCost = somosa * perSomosa;
    const jelebiCost = jelebi * perJelebi;
    const totalCost = singaraCost + somosaCost + jelebiCost;
    return totalCost;
}

const totalPrice = pandaCost(15, 10, 5);
console.log(totalPrice);


//problem 3 : 
function picnicBudget(person) {
    if (typeof person != 'number') {
        return "please enter a number";
    }
    first100Person = 5000;
    second100Person = 4000;
    rest100Person = 3000;
    if (person <= 100) {
        const count = person * first100Person;
        return count;
    }

    else if (person <= 200) {
        const firstPerson100 = 100 * first100Person;
        const remainPerson = person - 100;
        const secondPerson100 = remainPerson * second100Person;
        const totalPerson = firstPerson100 * secondPerson100;
        return totalPerson;
    }

    else {
        const firstPerson100 = 100 * first100Person;
        const secondPerson100 = 100 * second100Person;
        const remainPerson = person - 200;
        const restPerson100 = remainPerson * rest100Person;
        const totalPersons = firstPerson100 + secondPerson100 + restPerson100;
        return totalPersons;
    }
}

const persons = picnicBudget(201);
console.log(persons);


//problem 4 :
let friends = ["Rakibul", "Nasim", "Tasnimul", "Mezanur", "Mineuddin"];
function oddFriend(friends) {
    try {
        for (let friend of friends) {
            if (friend.length % 2 != 0) {
                return friend;
            }
        }
    }

    catch (error) {
        return error;
    }

}
const myFriend = oddFriend(friends);
console.log(myFriend);

