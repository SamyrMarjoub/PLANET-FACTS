module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.index.index(application, req, res)
    })
    application.get('/mars', function (req, res) {
        application.app.controllers.index.mars(application, req, res)
    })
    application.get('/mercury', function (req, res) {
        application.app.controllers.index.mercury(application, req, res)
    })
    application.get('/venus', function (req, res) {
        application.app.controllers.index.venus(application, req, res)
    })
    application.get('/jupiter', function (req, res) {
        application.app.controllers.index.jupiter(application, req, res)
    })
    application.get('/saturn', function (req, res) {
        application.app.controllers.index.saturn(application, req, res)
    })
    application.get('/uranus', function (req, res) {
        application.app.controllers.index.uranus(application, req, res)
    })
    application.get('/neptune', function (req, res) {
        application.app.controllers.index.nepturne(application, req, res)
    })
}