const Employee = require("../src/Employee.js");


describe("Employee", () => {
    describe("Initialiation", () => {
       it("Should return an object of a new Employee", () =>{
           const employee = new Employee()
           expect(typeof(employee)).toBe("object");
       })

       it('Should be able to have name be set', () => {
            const employee = new Employee('Name');
            expect(employee.name).toBe('Name');

       })

       it('Should be able to have ID be set', () => {
        const employee = new Employee('Name', 1);
        expect(employee.id).toBe(1);

   })

       it('Should be able to have email be set', () => {
        const employee = new Employee('Name', 1, 'email@email');
        expect(employee.email).toBe('email@email');

   })
    });

    describe('getName', () => {
        it('Returns name when called', () =>{
            const employee = new Employee('Name');
            expect(employee.getName()).toBe('Name')
        })
    })

    describe('getID', () => {
        it('Returns ID when called', () =>{
            const employee = new Employee('Name', 1);
            expect(employee.getID()).toBe(1)
        })
    })

    describe('getEmail', () => {
        it('Returns email when called', () =>{
            const employee = new Employee('Name', 1, 'email@email');
            expect(employee.getEmail()).toBe('email@email')
        })
    })
    describe('getRole', () => {
        it('Returns correct Role when called', () =>{
            const employee = new Employee('Name', 1, 'email@email');
            expect(employee.getRole()).toBe('Employee')
        })
    })
})
