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


const headerTags = document.getElementsByTagName('header') as HTMLCollectionOf<HTMLElement>;
for(let i=0;i<headerTags.length;i++){
    const header = headerTags[i];
}
/*
// Change content
headerTag.innerText = "Exemple";
headerTag.innerHTML = "<p>Exemple</p>";
// Change style
headerTag.style.color = "blue";
headerTag.style.background = "black";
headerTag.style.border = "1px solid black"
headerTag.style.margin = "10px";
headerTag.style.padding = "50vh";

// Change classes
headerTag.classList.add('dark-mode');
headerTag.classList.add('gaming-background gaming-border')
headerTag.classList.remove('gaming-border');
headerTag.classList.toggle('dark-mode');
*/

// Tests
const pTags = document.getElementsByTagName('p') as HTMLCollectionOf<HTMLElement>;

for(let i=0;i<pTags.length;i++){
    const p = pTags[i];
    p.innerText = "Bonjour";

}

class ParagraphChanger {
    // Properties
    paragraph: HTMLParagraphElement | null;

    constructor(){
        this.paragraph = document.querySelector('p');
        
    }

    CheckParagraph () {
        console.log(this.paragraph);
        // console.warn(this.paragraph);
        // console.error(this.paragraph):
    }

    ClassOperations(){
        if(this.paragraph){
        this.paragraph?.classList.add("first-class", "second-class");
        }
    }
    ChangeStyle (){
        if (this.paragraph) {
            this.paragraph.style.background = "black";
            this.paragraph.style.border = "2px solid blue";
            this.paragraph.style.borderRadius = "30px";
            this.paragraph.style.color = "White";

        }
    }
}

const ParaChangerInstance = new ParagraphChanger();

//HTML Element Variables
const mytitle = document.getElementById("title");
if (mytitle) {
    mytitle.textContent = "Portfolio | Merlin COUDOL";
    mytitle.innerHTML = "<b> New Title </b>";
    mytitle.style.color = "red";

}

const lightTheme = document.getElementsByClassName("lightTheme");

const productImages = document.querySelector("#product");
const productVideo = document.querySelectorAll(".video-product");

// Console Messages

console.log('test');
console.warn('test');
console.error('test');

const newDiv = document.createElement("div");
newDiv.innerHTML = "<p> Test TS </p>";
//CSS Properties
newDiv.style.display = "flex";

document.body.appendChild(newDiv);

// Nav Menu generator

const navMenu = document.createElement("nav");


const navBarUl = document.createElement("ul");
navMenu.appendChild(navBarUl);
document.appendChild(navMenu);

// <li> <a>
const newLI = document.createElement("li");
const newA = document
newLI.appendChild(newA);


// Function Definition and Implementation

function generateParagraph(
    parentElement: string,
    content: string = "My Paragraph"
): void {
    const parentElementTag = document.createElement(parentElement);
    if (parentElementTag) {

        parentElementTag.textContent = content;
        parentElementTag.style.background = "black";
        parentElementTag.style.color = "white";
        document.appendChild(parentElementTag);
    }
    else {
        console.error("Cannot create HTML Element");
    }

}

// Function call
generateParagraph("div");
generateParagraph("span");
generateParagraph("span");

