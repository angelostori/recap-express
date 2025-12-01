function serverError(err, req, res,) {
    return res.status(500).json({
        error: true,
        message: "Internal server error, 500"
    })
}

module.exports = serverError