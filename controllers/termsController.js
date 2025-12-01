const index = (req, res) => {
    res.send('Show all terms here')
}

const show = (req, res) => {
    res.send('Show terms id ' + req.params.id)
}

const store = (req, res) => {
    console.log(req.body);
    res.send('Store terms')
}

const update = (req, res) => {
    res.send('Update terms id ' + req.params.id)
}

const destroy = (req, res) => {
    res.send('Delete terms id ' + req.params.id)
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
}