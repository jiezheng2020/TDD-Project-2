const reverseString = string => {
    if(typeof string !== 'string') throw Error('not a string');
    let reversedarr = []
    let stringarr = string.split('')
    for(let i=string.length-1; i>=0; i--) {
        reversedarr.push(stringarr[i])
    }
    return reversedarr.join('')
}

module.exports = {reverseString}