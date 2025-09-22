class Person {
    constructor(NAAM, LEERJAAR, AANTAL_LESUREN, AANTAL_VAKKEN) {
        this.name = NAAM
        this.leerjaar = LEERJAAR
        this.lesuren = AANTAL_LESUREN
        this.vakkken = AANTAL_VAKKEN
    }

    groet(){
        console.log(`Hallo, mijn naam is ${this.name} ik zit in leerjaar ${this.leerjaar}.
             Ik heb ${this.vakkken} vakken wat in totaal, ${this.lesuren} lesuren zijn.`)
    }
} 

const personen = [
    new Person("Soufyan", "2", "36", "8"),
    new Person("meow", "2", "36", "8"),
    new Person("woof", "2", "36", "8")
]

personen.forEach(Human => {
    Human.groet()
});