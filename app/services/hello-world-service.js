export default class HelloWorldService {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}