 function addNumbers(a : number, b : number) : number {
    return a + b
 }

const addNumbersArrow = (a : number, b : number) : string => {
 return (a + b).toString()
}

function multiply(firstNumber : number, secondNumber? : number, base : number = 2){
    return firstNumber * base
}

const result : number = addNumbers(1,2)
const result2 : string = addNumbersArrow(1,2)
const multiplyResult : number = multiply(5)

interface Character {
    name: string,
    hp: number,
    showHp: () => void
}
const healCharacter = (character : Character, amount :number) => {
if(character.hp < 100){
    character.hp += amount
    console.log(`Usted se ha curado ${amount}`)
}
else {
 console.log('No puede curarse')
}
}

const john : Character = {
    name: 'John',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }

}

healCharacter(john, 10)
healCharacter(john, 5)


export{result, result2, multiplyResult, john}