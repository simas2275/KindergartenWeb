module.exports = adminMiddleware = (req, res, next) =>{
    if (req.user.admin) {
        return next()
    }else{
        return res.status(403).json('unauthorized')
    }
}
