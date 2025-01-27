const skills : string[] = ['Bash', 'Counter', 'Healing'];

interface Character{
    name : string,
    hp: number,
    skills: string[],
    hometown?: string
}

const john : Character ={
    name: 'John',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: undefined
}

john.hometown = 'Guayaquil'

export{john}