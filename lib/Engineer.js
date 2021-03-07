const employee = require("../Employee.js");

class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;


    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }

}

module.exports = engineer;