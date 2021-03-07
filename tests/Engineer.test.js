const engineer = require("../Engineer.js");

describe("engineer", () => {
    describe("github", () => {
        it("should test github username being input", () => {
            const github = "githubUsername";
            const empGithub = new engineer("name", 1, "email", github);
            expect(empGithub.github).toBe(github);
        });
    });

    describe("getRole()", () => {
        it("should get role: Engineer", () => {
            const role = "Engineer";
            const empRole = new engineer("name", 1, "email", "github");
            expect(empRole.getRole()).toBe(role);
        });
    });

    describe("getGithub()", () => {
        it("should get github username", () => {
            const github = "githubUsername";
            const empGithub = new engineer("name", 1, "email", github);
            expect(empGithub.getGithub()).toBe(role);
        });
    });
});