function myMap(arr,cb) {
    // let maparr = []
    // arr.forEach(el => {
    //     maparr.push(cb(el))
    // })
    let maparr = arr.map(el => cb(el))
    return maparr
}

module.exports = {myMap}