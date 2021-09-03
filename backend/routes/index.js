const fileRouter = require("./file.route");
const folderRouter = require("./folder.route");

module.exports = (router) => {
  router.use("/file", fileRouter);
  router.use("/folders", folderRouter);

  return router;
};
