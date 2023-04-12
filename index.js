
function findMatching(drivers, string) {
    return drivers.filter(element => element.toLowerCase() === string.toLowerCase() ? string : undefined)
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(element => element.substring(0, 2) === string.substring(0,2) ? string : undefined)
}

function matchName(drivers, string) {
    return drivers.filter(obj => obj.name === string ? obj : undefined)
}
