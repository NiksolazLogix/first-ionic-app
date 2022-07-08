class Person {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public changePerson(name: string, age: number, gender: string): string {
        const self = this as any;
        self.name = name;
        self.age = age;
        self.gender = gender;
        return self.getGender();
    }
    
    public getGender(): string {
        const self = this as any;
        if(self.gender !== undefined) {
            if(self.gender.toLowerCase().includes('f')) {
                return `${self.name} is a woman and she have ${self.age} years`;
            }
            return `${self.name} is a man and he have ${self.age} years`;
        }
        return `${self.name} not gender selected`;
    }
    
    private privatePerson() {
        const self = this as any;
        return `The person is changed! Your name is: ${self.name} and is a ${self.gender} gender and have ${self.age} year`
    }

    public toStringName(): string {
        const self = this as any;
        return self.privatePerson();
    }

    public changeDinamicPerson() {
        const self = this as any;
        const start = prompt('do you want start change person? Yes / No');
        if(start?.toLowerCase().includes('y')) {
            const name = prompt('digit Name');
            let age: string = prompt('digit Age') as string;
            if(isNaN(age as any)) {
                age = prompt('Holy Shit Stupid!!!! Digit a number for Age') as string;
            }
            const gender = prompt('digit gender: Male / Female');
            return self.changePerson(name, age as any * 1, gender)
        }
    }
}

export default Person as any