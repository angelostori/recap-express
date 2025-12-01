// import the data
const terms = require('../data/terms')

const index = (req, res) => {
    res.json(terms)
}

const show = (req, res) => {
    // get the param and convert it to a number
    const id = Number(req.params.id)
    //console.log(req.params.id, typeof req.params.id);
    console.log(id);

    // find the obj with the given id
    const foundTerm = terms.find(term => Number(term.id) === id)
    console.log(foundTerm);

    // if the obj is undefined return a json 404 message
    if (!foundTerm) {
        return res.status(404).json({
            error: true,
            message: "Could not find the resource, 404 not found"
        })
    }

    // otherwise return the found obj to the client
    res.json(foundTerm)
}

const store = (req, res) => {
    // get the data from the request body
    console.log(req.body);
    const { term, definition } = req.body
    // console.log(term, definition);

    // construct a new term object literal to hold the new obj values
    const newTerm = {
        id: Date.now(), // generate a new id
        term,
        definition
    }

    console.log(newTerm);

    // add the new obj to the terms array
    terms.push(newTerm)
    console.log(terms);

    // send a success message to the client
    res.status(201).json({
        message: 'New term created successfully',
        data: newTerm
    })


}

const update = (req, res) => {
    // get the param and convert it to a number
    const id = Number(req.params.id)
    //console.log(req.params.id, typeof req.params.id);
    console.log(id);

    // find the obj with the given id
    const foundTerm = terms.find(term => Number(term.id) === id)
    console.log(foundTerm);

    // if the obj is undefined return a json 404 message
    if (!foundTerm) {
        return res.status(404).json({
            error: true,
            message: "Could not find the resource, 404 not found"
        })
    }

    const { term, definition } = req.body

    // update the found obj properties
    foundTerm.term = term
    foundTerm.definition = definition

    console.log(foundTerm);
    res.json(foundTerm)
}

const destroy = (req, res) => {
    // get the param and convert it to a number
    const id = Number(req.params.id)
    //console.log(req.params.id, typeof req.params.id);
    console.log(id);

    // find the obj with the given id
    const foundTerm = terms.find(term => Number(term.id) === id)
    console.log(foundTerm);

    // if the obj is undefined return a json 404 message
    if (!foundTerm) {
        return res.status(404).json({
            error: true,
            message: "Could not find the resource, 404 not found"
        })
    }

    terms.splice(terms.indexOf(foundTerm), 1)

    console.log(terms);

    res.sendStatus(204)
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}