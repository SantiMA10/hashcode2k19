import * as fs from 'fs'

const debug = true;
const data = fs.readFileSync(`${__dirname}/../inputs/c_medium.in`, 'utf8').split('\n');

// input constants
const [ R, C, L, H ] = data[0].split(' ').map(n => parseInt(n));
if (debug) console.log({R, C, L, H})

// pizza
const pizza = data.slice(1, R + 1)
// if (debug) console.log(pizza)

// algoritm
const solutions = []
for (let i = 0; i < R; i++) {
    const row = pizza[i].split('');
    // if (debug) console.log({row})

    let beg = 0;
    let mushrooms = 0;
    let tomatoes = 0;

    for(let j = 0; j < row.length; j++) {
        const p = pizza[i][j];
        if (p === 'T') {
            tomatoes++;
        }
        if (p === 'M') {
            mushrooms++;
        }

        if (tomatoes >= L && mushrooms >= L && tomatoes + mushrooms < H) {
            solutions.push(`${i} ${beg} ${i} ${j}`)
            if (debug && solutions.length === 257) console.log('slice! 🍕 ', `${i} ${beg} ${i} ${j}`, {mushrooms, tomatoes})
            mushrooms = 0;
            tomatoes = 0;
            beg = j + 1;
        }

        if (tomatoes + mushrooms === H - 1) {
            mushrooms = 0;
            tomatoes = 0;
            beg = j;
        }
    }
}

const solution = solutions.reduce((text, solution) => {
    return text + solution + '\n'
}, `${solutions.length}\n`)

// generate output
fs.writeFileSync(`${__dirname}/../outputs/c_medium.out`, solution, 'utf8')
