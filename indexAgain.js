var counter = 0

function takeANumber() {
    var line = []
    p.push(n)
    return (`Welcome, ${n}. You are number ${p.indexOf(n) + 1} in line.`)
}
// generate the number for them
function takeANumberDiff(p) {
    counter++
    // var numberInLine = p.length + 1
    var numberInLine = counter
    p.push(numberInLine)
    // p.length = p.length + 1
    // p.push(n)
    return (`You are number ${counter} in line.`)
}
// array p just contains numbers
function nowServing(p) {
    if (p.length === 0) {
        return (`There is nobody waiting to be served!`)
    } else {
        return (`Currently serving number ${p.shift()}.`)
        }
    }

//pick # 32, you are told what number you are, not neccessarily a 33-person long line


function currentLine(p) {
    var line = []
    if (p.length === 0) {
        return (`The line is currently empty.`)
    } else {
        for (let i = 0; i < p.length; i++) {
            line.push(` ${i + 1}. ${p[i]}`)
            }
        }
        return (`The line is currently:${line}`)
    }

var newArray = []

