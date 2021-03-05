const intern = require('/lib/Intern.js');

describe("intern", () => {
    describe("school", () => {
        it("should test school being input", () => {
            const school = "Temple";
            const empSchool = new intern("name", 1, "email", school);
            expect(empSchool.school).toBe(school);
        });
    });

    describe("getRole()", () => {
        it("should get role: Intern", () => {
            const role = "Intern";
            const empRole = new intern("name", 1, "email", "github");
            expect(empRole.getRole()).toBe(role);
        });
    });

    describe("getSchool()", () => {
        it("should get name of school being attended", () => {
            const school = "Temple";
            const empSchool = new intern("name", 1, "email", school);
            expect(empSchool.getSchool()).toBe(school);
        });
    });
});