export default class Spell {
    constructor(data) {
        this.name = data.name;
        this.desc = data.desc;
        this.level = data.level;
        this.range = data.range;
        this.duration = data.duration;
        this.components = data.components;
        this.user = data.user;
        this.id = data.id;
    }

    get Template() {
        return `
            <p>Name: ${this.name} Level: ${this.level}, Range: ${this.range}</p>
            <p>${this.desc}</p>
        `
    }
}