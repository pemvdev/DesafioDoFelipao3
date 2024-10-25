const readline = require('readline');

class Hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;
    }
    attack(){
        let attack;
        switch (this.type){
            case 'mago':
                attack = 'magia';
                break;
            case 'guerreiro':
                attack = 'espada';
                break;
            case 'monge':
                attack = 'artes marciais';
                break;
            case 'ninja':
                attack = 'shiuriken';
                break;
            default:
                attack = 'desconhecido';
                break;
        }
        console.log(`O ${this.type} atacou usando ${attack}.`);
    }
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function criarHeroi() {
    rl.question("Digite o nome do herói: ", (name) => {
        rl.question("Digite a idade do herói: ", (age) => {
            rl.question("Digite o tipo do herói (mago, guerreiro, monge, ninja): ", (type) => {
                const hero = new Hero(name, parseInt(age, 10), type);
                hero.attack();
                rl.close();
            });
        });
    });
}

criarHeroi();

