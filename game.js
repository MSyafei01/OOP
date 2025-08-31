    // Kelas dasar semua karakter
// Kelas dasar semua karakter
class Character {
    constructor(name, health = 100, position = 0) {
    this.name = name;
    this.health = health;
    this.position = position;
    }

move() {
    console.log(`${this.name} moves to another position!`);
    }
}

// Kemampuan (Abilities)
function canAttack(character) {
    return {
    attack: () => console.log(`${character.name} attacks with a weapon!`)
    };
}

function canDefend(character) {
return {
    defend: () => console.log(`${character.name} defends with a shield!`)
    };
}

function canCastSpell(character) {
return {
    castSpell: () => console.log(`${character.name} casts a spell!`)
    };
}

// Object Factory (buat karakter dengan kombinasi kemampuan)
function createMonster(name) {
    const character = new Character(name);
    return Object.assign(character, canAttack(character));
}

function createGuardian(name) {
    const character = new Character(name);
    return Object.assign(character, canDefend(character));
}

function createWizard(name) {
    const character = new Character(name);
    return Object.assign(character, canCastSpell(character));
}

function createWarrior(name) {
    const character = new Character(name);
    return Object.assign(character, canAttack(character), canDefend(character));
}

// --- Pengujian ---
const monster = createMonster("Monster");
monster.move();
monster.attack();

const guardian = createGuardian("Guardian");
guardian.move();
guardian.defend();

const wizard = createWizard("Wizard");
wizard.move();
wizard.castSpell();

const warrior = createWarrior("Warrior");
warrior.move();
warrior.attack();
warrior.defend();