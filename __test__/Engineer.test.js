const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('Name', 12, 'engineer@email.com', 'username');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test('return github username', () => {
    const engineer = new Engineer('Name', 12, 'engineer@email.com', 'username');

    expect(engineer.github).toBeDefined();
})