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

let persoon1 = new Person("Soufyan", "2", "36", "8")
persoon1.groet()