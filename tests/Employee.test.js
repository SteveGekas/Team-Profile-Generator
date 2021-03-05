const employee = require('/lib/Employee.js');

describe("employee", () => {
    describe("name", () => {
        it("should test name being input", () => {
            const name = "Bailey";
            const empName = new employee(name);

            expect(empName.name).toBe(name);
        });
    });

    describe("id", () => {
        it("should test id being input", () => {
            const id = 1;
            const empId = new employee("Name", id);
            expect(empId.id).toBe(id);
        });
    });

    describe("email", () => {
        it("should test email being input", () => {
            const email = "sample@sample.com";
            const empEmail = new employee("name", 1, email);
            expect(empEmail.email).toBe(email);
        });
    });

    describe("getName()", () => {
        it("should get name", () => {
            const name = "Bailey";
            const empName = new employee(name);

            expect(empName.getName()).toBe(name);
        });
    });

    describe("getId()", () => {
        it("should get id", () => {
            const id = 1;
            const empId = new employee("Name", id);
            expect(empId.getId()).toBe(id);
        });
    });

    describe("getEmail()", () => {
        it("should get email", () => {
            const email = "sample@sample.com";
            const empEmail = new employee("name", 1, email);
            expect(empEmail.getEmail()).toBe(email);
        });
    });

    describe("getRole()", () => {
        it("should get role: Employee", () => {
            const role = "Employee";
            const empRole = new employee("name", 1, "email");
            expect(empRole.getRole()).toBe(role);
        });
    });

});