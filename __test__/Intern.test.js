const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Clint', 2, 'clint.com', 'University of Toledo');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test('returns the school value', () => {
    const intern = new Intern('Clint', 2, 'clint.com', 'University of Toledo');
    intern.getSchool();
    
    expect(intern.school).toBeDefined();
})