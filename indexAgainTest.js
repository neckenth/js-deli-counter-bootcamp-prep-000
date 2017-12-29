//do the lab as it was written
//then - make changes - what if takeANumber worked like it did in a real store - doesn't take names, number doesn't always start at 1
//once you've made these changes to takeANumber, adjust nowServing
var katzDeli = []

function takeANumber(katzDeliLine, name) {
    katzDeliLine.push(name)
    return (`Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`)
}

function nowServing(line) {
    var announceLine = []
    if (line.length === 0) {
        return `The line is currently empty.`
    } else {
        for (let i = 0; i < line.length; i++) {
            announceLine.push(`${i + 1}. ${line[i]}`)
        }
        return `The line is currently: ${announceLine.join(, )}`
    }
}
