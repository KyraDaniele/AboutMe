const db = require('./conn');

class CatsList {
    constructor(name, nickname, age, favorite_toy, gender, color, good_kitty) {
        this.name = name;
        this.nickname = nickname;
        this.age = age;
        this.favorite_toy = favorite_toy;
        this.gender = gender;
        this.color = color;
        this.good_kitty = good_kitty;
    }

    static async getAll() {    
        try {
            const response = await db.any(`SELECT * FROM cats`);
            console.log('response', response);
            return response;
        } catch(error) {
            return error.message
        }
    }
}

module.exports = CatsList;
