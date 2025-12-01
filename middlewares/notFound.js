function notFound(req, res) {
    return res.status(404).json({
        error: true,
        message: "Could not find the resource, 404 not found"
    })
}

module.exports = notFound