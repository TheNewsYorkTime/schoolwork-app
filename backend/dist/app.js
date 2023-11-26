"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _path = _interopRequireDefault(require("path"));
var _morgan = _interopRequireDefault(require("morgan"));
var _index = _interopRequireDefault(require("./routes/index"));
var _api = _interopRequireDefault(require("./routes/api"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cookieParser["default"])());
app.use(_express["default"]["static"](_path["default"].join(__dirname, "..", "..", "frontend", "build")));
app.use("/api", _api["default"]);
app.get("/", function (req, res, next) {
  if (false) {
    res.redirect("/login");
  }
  res.sendFile(_path["default"].join(__dirname, "..", "..", "frontend", "build", "index.html"));
});
app.get("/login", function (req, res, next) {
  res.redirect("/");
});
app.listen(process.env.PORT || "3000", function () {
  console.log("Started...");
});
var _default = exports["default"] = app;