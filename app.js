const express = require('express');

const index = require('./routes/index');

const app = express();

app.use('/', index);

app.use(express.json());

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).json(err.message);
});

module.exports = app;
