const Intern = require("../src/Intern");

test("Can set School of Intern", () => {
    const employee = new Intern('Name', 1, 'email@email', 'School');
    expect(employee.school).toBe('School');
});

test('Returns correct Role when called', () => {
    const employee = new Intern('Name', 1, 'email@email', 'School');
    expect(employee.getRole()).toBe('Intern');
});

test("getSchool() returns School the intern attended when called", () => {
    const employee = new Intern('Name', 1, 'email@email', 'School');
    expect(employee.getSchool()).toBe('School');
});
