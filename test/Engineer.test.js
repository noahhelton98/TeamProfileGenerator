const Engineer = require("../src/Engineer");

test("Can set GitHub username", () => {
    const employee = new Engineer('Name', 1, 'email@email', 'GithubAccount');
    expect(employee.github).toBe('GithubAccount');
});

test('Returns correct Role when called', () => {
    const employee = new Engineer('Name', 1, 'email@email', 'GithubAccount');
    expect(employee.getRole()).toBe('Engineer');
});

test("getGithub returns github account name when called", () => {
    const employee = new Engineer('Name', 1, 'email@email', 'GithubAccount');
    expect(employee.getGithub()).toBe('GithubAccount');
});
