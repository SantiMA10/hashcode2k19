import * as fs from 'fs'

const data = fs.readFileSync(`${__dirname}/../inputs/a_example.in`, 'utf8').split('\n');

// input constants
const [ R, C, L, H ] = data[0].split(' ').map(n => parseInt(n));
console.log({R, C, L, H})

// pizza
const pizza = data.slice(1, R + 1)
console.log(pizza)

// algoritm
// TODO
const solution = '0\n'


// generate output
fs.writeFileSync(`${__dirname}/../outputs/a_example.out`, solution, 'utf8')
