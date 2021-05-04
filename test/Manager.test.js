const Manager = require("../src/Manager");

test("Can set office number for Manager", () => {
    const employee = new Manager('Name', 1, 'email@email', 123);
    expect(employee.officeNumber).toBe(123);
});

test('Returns correct Role when called', () => {
    const employee = new Manager('Name', 1, 'email@email', 123);
    expect(employee.getRole()).toBe('Manager');
});

test("getSchool() returns School the intern attended when called", () => {
    const employee = new Manager('Name', 1, 'email@email', 123);
    expect(employee.getOfficeNumber()).toBe(123);
});
