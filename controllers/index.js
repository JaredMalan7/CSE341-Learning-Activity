const awesomeFunction = (req, res, next) => {
    res.json('Brentley Malan')
}

const returnAnotherPerson = (req, res, next) => {
    res.json('Super awesome person')
}

module.exports = { awesomeFunction, returnAnotherPerson }