const Manager = require('../lib/Manager')


test('create a manager object', () => {
    const manager = new Manager('Dave', 12, 'dave.testemail', 100);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("return the manager's office number.", () => {
    const manager = new Manager('Dave', 12, 'dave.testemail', 100);
    manager.getOfficeNumber();

    expect(manager.officeNumber).toBeDefined();
})