var env = process.env.NODE_ENV || 'development';

if (env === 'test' || env === 'development') {
	var config = require('./config.json');
	var envCfg = config[env];

	Object.keys(envCfg).forEach((key) => {
		process.env[key] = envCfg[key];
	});
}
