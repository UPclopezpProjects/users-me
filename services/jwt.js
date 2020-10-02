var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'secret_key';
var algorithm = 'HS256';
//var algorithm = 'HS384';


exports.createToken = function(req, user, description){
	var payload = {
		id: user._id,
		email: req.body.email,
		password: user.password,
		key: req.body.key,
		type: req.body.typeOfUser,
		token: req.body.Token,
		dc: description,
		iat: moment().unix(), //Momento de creación del token (fecha y hora exacta)
		exp: moment().add(7, 'd').unix() //Agrega 7 días en tiempo UNIX
	};
	return jwt.encode(payload, secret, algorithm);
};

exports.generateToken = function(user, R){
	var payload = {
		id: user._id,
		email: user.email,
		password: user.password,
		type: user.type,
		r: R,
		iat: moment().unix(), //Momento de creación del token (fecha y hora exacta)
		exp: moment().add(7, 'days').unix() //Cambiar esto para que solo dure mientras esté la sesión
	};
	return jwt.encode(payload, secret, algorithm);
};

exports.renovationToken = function(data){
	var payload = {
		id: data._id,
		email: data.email,
		token: data.password,
		creation: data.creation, //Momento de creación del token (fecha y hora exacta)
		life: data.life //Cambiar esto para que solo dure mientras esté la sesión
	};
	return jwt.encode(payload, secret, algorithm);
};