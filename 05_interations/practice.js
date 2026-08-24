/**
 * 1. Find all employees in the Engineering department.
 * 2. Return an array containing only employee names. Convert all employee names to uppercase.
 * 3. Calculate the total salary of all employees.
 * 4. Calculate the average salary.
 * 5. Get all unique departments, unique locations, unique skills.
 *  */

const employeeData = [
  {
    id: 101,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1-555-123-4567',
    age: 30,
    gender: 'Male',
    department: 'Engineering',
    designation: 'Software Engineer',
    salary: 85000,
    joiningDate: '2022-03-15',
    experience: 6,
    location: 'New York',
    manager: 'Sarah Wilson',
    skills: ['Java', 'Spring Boot', 'SQL', 'Docker'],
    isActive: true,
  },
  {
    id: 102,
    firstName: 'Emily',
    lastName: 'Clark',
    email: 'emily.clark@example.com',
    phone: '+1-555-987-6543',
    age: 28,
    gender: 'Female',
    department: 'Human Resources',
    designation: 'HR Executive',
    salary: 62000,
    joiningDate: '2021-07-20',
    experience: 5,
    location: 'Chicago',
    manager: 'David Brown',
    skills: ['Recruitment', 'Employee Relations', 'Payroll'],
    isActive: true,
  },
  {
    id: 103,
    firstName: 'Michael',
    lastName: 'Smith',
    email: 'michael.smith@example.com',
    phone: '+1-555-222-3333',
    age: 35,
    gender: 'Male',
    department: 'Finance',
    designation: 'Financial Analyst',
    salary: 78000,
    joiningDate: '2019-11-01',
    experience: 10,
    location: 'San Francisco',
    manager: 'Linda Taylor',
    skills: ['Excel', 'Power BI', 'Financial Modeling'],
    isActive: false,
  },
  {
    id: 104,
    firstName: 'Sophia',
    lastName: 'Johnson',
    email: 'sophia.johnson@example.com',
    phone: '+1-555-444-5555',
    age: 26,
    gender: 'Female',
    department: 'Marketing',
    designation: 'Digital Marketing Specialist',
    salary: 67000,
    joiningDate: '2023-01-10',
    experience: 3,
    location: 'Seattle',
    manager: 'Chris Evans',
    skills: ['SEO', 'Google Ads', 'Content Marketing'],
    isActive: true,
  },
  {
    id: 105,
    firstName: 'Raj',
    lastName: 'Patel',
    email: 'raj.patel@example.com',
    phone: '+91-9876543210',
    age: 31,
    gender: 'Male',
    department: 'Engineering',
    designation: 'Senior Backend Developer',
    salary: 120000,
    joiningDate: '2020-05-18',
    experience: 8,
    location: 'Bengaluru',
    manager: 'Anita Sharma',
    skills: ['Java', 'Spring Boot', 'Kafka', 'MongoDB', 'AWS'],
    isActive: true,
  },
];


//1. Find all employees in the Engineering department.

//Method1:
// for (const it in employeeData) {
//    if(employeeData[it].department === 'Engineering'){ 
//         console.log(employeeData[it])
//    }
// }


//Method2:
// for (const emp of employeeData) {
//     if(emp.department === 'Engineering')
//         console.log(emp)
// }

//Method3  we can not use forEach for this operation bcz emp.department === 'Engineering produces true or false, but forEach() doesn't collect those values.
//The problem is that forEach() does not return a new array
// employeeData.forEach((emp)=>{
//     return emp.department === 'Engineering'
//     console.log(emp)
// })
// //console.log(engEmployee)

//method 4

// const engEmployee = employeeData.filter((emp)=>{
//     return emp.department === 'Engineering'
// })
// console.log(engEmployee)