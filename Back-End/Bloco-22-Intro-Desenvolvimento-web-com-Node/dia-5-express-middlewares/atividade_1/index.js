const express = require('express');
const {
  BAD_REQUEST,
  INTERNAL_ERROR,
} = require('./statusCode')

const app = express();

app.use(express.json());

const errorConstructor = (status, message) => ({
  status,
  message,
});

const usernameValidate = (req, _res, next) => {
  const { username } = req.body;

  const usernameValid = username.length >= 3;

  if(!usernameValid) next(errorConstructor(BAD_REQUEST, 'invalid username'));

  next();
}

const emailValidate = (req, _res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const emailValid = regex.test(email);

  if(!emailValid) next(errorConstructor(BAD_REQUEST, 'invalid email'));

  next();
}

const passwordValidate = (req, _res, next) => {
  const { password } = req.body;

  const passwordValid = password.length > 4 && password.length < 8;

  if(!passwordValid) next(errorConstructor(BAD_REQUEST, 'invalid password'));

  next();
}

const middlewareError = (err, _req, res, _next) => {
  if(err.status) return  res.status(err.status).json({ message: err.message });
  if(err) return res.status(INTERNAL_ERROR).json({ message: 'Internal Server Error' });
}

app.post('/user/register', usernameValidate, emailValidate, passwordValidate, (_req, res) => {
  console.log('usuario registrado');
  return res.status(200).json({ message: 'User created'});
});

app.use(middlewareError);

app.listen(3000, console.log('Online'));
