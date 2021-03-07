const manager = require(".lib/Manager.js");

describe("manager", () => {
    describe("officeNum", () => {
        it("should test office number being input", () => {
            const offNum = 3254;
            const empOffNum = new manager("name", 1, "email", offNum);
            expect(empOffNum.offNum).toBe(offNum);
        });
    });

    describe("getRole()", () => {
        it("should get role: Manager", () => {
            const role = "Manager";
            const empRole = new manager("name", 1, "email", "offNum");
            expect(empRole.getRole()).toBe(role);
        });
    });

    describe("getOfficeNum()", () => {
        it("should get office number", () => {
            const offNum = 3254;
            const empoffNum = new manager("name", 1, "email", offNum);
            expect(empoffNum.getOffNum()).toBe(offNum);
        });
    });

});