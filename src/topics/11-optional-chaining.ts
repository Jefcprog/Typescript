export interface Passenger{
    name: string,
    children?: string[],

}

const passenger1 : Passenger={
    name: 'John'
}

const passenger2 : Passenger={
    name: 'Fernando',
    children: ['Natalia', 'Eli']
}

const returnChildrenNumber = (passenger : Passenger) : number => {
    
    let howManyChildren = passenger.children?.length || 0

    console.log(passenger.name, howManyChildren)

    return howManyChildren
}

returnChildrenNumber(passenger1)