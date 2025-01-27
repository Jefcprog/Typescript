import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './topics/01-basic-types'
//import { /*multiplyResult, result, result2, */john} from './topics/03-functions.ts'
//import { superHeroe } from './topics/04-homework.ts'
//import './topics/05-basic-destructuring'
//import './topics/06-function-destructuring'
//import './topics/08-clases.ts'
//import './topics/09-generics.ts'
//import './topics/10-decorators.ts'
import './topics/11-optional-chaining.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
 
/*console.log('Hola Mundo')
console.log(name, hpPoints, isAlive)
console.table(john)
console.log(result)
console.log(result2)
console.log(multiplyResult)
john.showHp()
const address = superHeroe.showAddress();
console.log( address ) */