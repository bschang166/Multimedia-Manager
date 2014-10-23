
var configRoutes;

configRoutes = function (router, server) {

  router.get('/', function (req, res) {
    res.redirect('/app.html')
  });
  router.use(function (req, res) {
    res.redirect('/app.html')
    req.accepts('video/ogg .ogm');
    req.accepts('video/ogg .ogv');
    req.accepts('video/ogg .ogg');
    req.accepts('audio/mp4 .mp4 .m4a');
    req.accepts('video/mp4 .mp4 .m4v');
  });
}

module.exports = { configRoutes: configRoutes };