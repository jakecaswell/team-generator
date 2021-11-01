const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create employee object', () => {
    const employee = new Employee('Jared', 1, 'one.test');


    expect(employee.name).toBe('Jared');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('return the employee ID', () => {
 const employee = new Employee('guy', 1, 'test')
 employee.getId();

 expect(employee.id).toBeDefined();
})

test('return the employee email', () => {
    const employee = new Employee('guy', 1, 'test')
    employee.getEmail();
   
    expect(employee.email).toBeDefined();
})

test('return the employee name', () => {
    const employee = new Employee('guy', 1, 'test')
    employee.getName();
   
    expect(employee.name).toBeDefined();
})