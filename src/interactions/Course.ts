"use strict"; // Non nécessaire si déjà enabled par NodeJS



//--------------------------------------------------------
//  VARIABLES
//--------------------------------------------------------
let characterName : string = "John Doe";
let characterScore : number = 84103;
let characterLevel : number = 10;

let HighScore : BigInt = 150n;
let maxAmmo : BigInt = BigInt(565456);

let treasureChestOpen : boolean = true;
treasureChestOpen = false;

let playerOne : null;
let playerTwo : undefined;

let playerCar: object = {
    "Name":"Car",
    "Color":"Red",
    "Wheels": 4
}

// UNKNOWN & ANY
let playerWeapon: any;
let playerItem: unknown;

let test: void;
 
// readonly
// optional (?)

interface Vehicle {
    name:string;
    wheels:number;
    //readonly
    readonly power:number;
    //optional
    brand ?:string;

}

const newVehicle : Vehicle = {
    name: "Car",
    wheels: 4,
    power: 1000,
    brand: "BMW"
};

// Arrays

let playerList : string[] = ["player 1", "player 2"];

const weaponList: string[] = [
    "Ace of Spades",
    "The Chaperone",
    "Outbreak Perfected",
    "The Last Word",
    "Thorn",
    "Monte Carlo",
    "Vigilance Wing",
    "No Time to Explain",
    "Hawkmoon",
    "Sturm",
    "Crimson",
    "Dead Man's Tale",
    "MIDA Multi-Tool",
    "Riskrunner",
    "Sunshot",
    "Coldheart",
    "Trinity Ghoul",
    "Graviton Lance",
    "Jade Rabbit",
    "Polaris Lance",
    "Hard Light",
    "SUROS Regime",
    "Vex Mythoclast",
    "Tommy's Matchbook",
    "Tarrabah",
    "Cryosthesia 77K",
    "Ager's Scepter"
  ];
  
  //Tuples 
  let player : [string, number, boolean, BigInt] = ["John Doe", 10, true, 234567n];

  let playerVehicle: [string, number] [];

playerVehicle = [ ["car", 150], ["motorbike", 161], ["motorbike", 250], ["motorbike", 500]];

playerVehicle[1][1];

// Enum
enum Monster {
    Goblin = 1,
    Orc = 18,
    Troll, //Incrémentation de 1, donc Troll = 19
    Dragon,//Incrémentation de 1, donc Dragon = 20
    Mage = "This is a mage" //Incrémentation impossible
}

console.log(Monster.Mage);

// CUSTOM TYPES

type Truck = {
    name: string,
    wheels: number,
    power: number,
    brand: string,
    isAvailable: boolean
}

const newTruck : Truck = {
    name: "Truck",
    wheels: 4,
    power: 1000,
    brand: "BMW",
    isAvailable: true
}

// TYPE ALIAS

type Player = {
    name: string,
    score: number,
    level: number,
    isAlive: boolean
}

const newPlayer : Player = {
    name: "John Doe",
    score: 1000,
    level: 10,
    isAlive: true
}

// Interfaces
interface ICar {
    name: string,
    wheels: number,
    power: number,
    brand: string,
    isAvailable: boolean
}

// Classes
class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Dog extends Animal {
    public constructor(name: string, age: number) {
        super(name, age);
    }
}

const Hubert = new Animal ("Hubert", 17);