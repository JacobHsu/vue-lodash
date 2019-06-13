console.warn('===== store index.js ======')

import _ from 'lodash'
console.log(_.fromPairs([['fred', 30], ['barney', 40]])); // => { 'fred': 30, 'barney': 40 }

function square(n) {
    return n * n;
}
console.log( _.map({ 'a': 4, 'b': 8 }, square) ); // => [16, 64] (无法保证遍历的顺序)


const schema = {
    Country: { default: {} },
},
    types = _.fromPairs(_.map(_.keys(schema), key => [key, genType(key)]))

console.log(types) 
/*
Country:
action: "actionCountry"
init: "INIT_COUNTRY"
state: "stateCountry"
*/

function genType(key) {
    var upperKey = _.snakeCase(key).toUpperCase()

    return {
        init: 'INIT_' + upperKey,
        state: 'state' + key,
        action: 'action' + key
    }
}

