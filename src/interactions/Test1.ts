"use strict";

// INTERFACES 

interface Person {
    name: string;
    age: number;
    studies: string
}

interface Student extends Person {
  studentId: number;
  courses: string[];
}
interface Contact {
    mail: string;
    phone: string;
    address: string;
    city: string;
    country: string
}

interface Address {
  street: string;
  city: string;
  zip: number;
  country: string;
}


interface Teacher extends Person {
  employeeId: number;
  subjects: string[];
}

// ITEMS FROM INTERFACES

const MerlinStudent: Student = {
    name: "Merlin",
    age: 19,
    studies: "BTS SIO SLAM à H3 Hitema",
    studentId: 1,
    courses: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "C#", "C++", "Java", "Python", "TypeScript"]
}

const MerlinContact: Contact = {
    mail: "merlin.cdl@hotmail.com",
    phone: " 07 50 68 28 13",
    address: "4 Passage de la Vallée",
    city: "92140 CLAMART",
    country: "France"
};

const MerlinAdress: Address = {
    street: "4 Passage de la Vallée",
    city: "CLAMART",
    zip: 92140,
    country: "France"
};
const Yoann: Teacher = {
    name: "Yoann",
    age: 34,
    studies: "Doctorat en sémiotique",
    employeeId: 100,
    subjects: ["HTML", "CSS", "SCSS", "JavaScript", "TypeScript", "Astro"]
};


// CLASSES

class University {
  private name: string;
  private location: Address;

  constructor(name: string, location: Address) {
    this.name = name;
    this.location = location;
  }

  public getDescription(): string {
    return `The ${this.name} is located at ${this.location.street}, ${this.location.city}, ${this.location.country}.`;
  }
}

class Course {
  private name: string;
  private credits: number;

  constructor(name: string, credits: number) {
    this.name = name;
    this.credits = credits;
  }

  public getDescription(): string {
    return `The course ${this.name} is worth ${this.credits} credits.`;
  }
}

class Department {
  private name: string;
  private teachers: Teacher[];

  constructor(name: string, teachers: Teacher[]) {
    this.name = name;
    this.teachers = teachers;
  }

  public getTeachers(): Teacher[] {
    return this.teachers;
  }
}

// Example usage:
const universityAddress: Address = {
  street: "34 bis Rue du Cotentin",
  city: "PARIS",
  zip: 75015,
  country: "France"
};

const university: University = new University("Anytown University", universityAddress);
console.log(university.getDescription());

const course: Course = new Course("Introduction to Programming", 3);
console.log(course.getDescription());

const teachers: Teacher[] = [Yoann];
const department: Department = new Department("Computer Science", teachers);
console.log(department.getTeachers());

