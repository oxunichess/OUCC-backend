const Jimp = require('jimp');
const fs = require('fs');

function processPath(pathname) {
	let [, rawDimensions] = pathname.split('_');
	let dimensions = rawDimensions ? rawDimensions.split(',').map(v => Number(v)) : undefined;
	if (dimensions && isNaN(dimensions[0])) dimensions = undefined;
	let dir = fs.readdirSync(pathname);
	for (let name of dir) {
		let newPathname = pathname + '/' + name;
		if (name.endsWith('.jpg')) processImage(newPathname, dimensions);
		else if (name.split('.').length < 2) processPath(newPathname);
	}
}

function processImage(pathname, defaultDimensions = [4, 3]) {
	let filename = pathname.split('/').pop();
	let fullname = filename.split('.');
	fullname.pop();
	fullname = fullname.join('.');
	let [, rawDimensions] = fullname.split('_');
	let dimensions = rawDimensions ? rawDimensions.split(',').map(v => Number(v)) : defaultDimensions;
	if (isNaN(dimensions[0])) dimensions = defaultDimensions;
	let unit = 256 / Math.max(...dimensions);
	Jimp.read(pathname)
		.then((lenna) => {
			console.log('SUCCESSES', pathname, unit, dimensions[0], dimensions[1]);
			return lenna
				.resize(unit * dimensions[0], unit * dimensions[1])
				.quality(60)
				.write('./thumbnails/' + pathname)
		})
		.catch(console.error);
}

processPath('./images');