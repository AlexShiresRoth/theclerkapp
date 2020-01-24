const express = require('express');
const path = require('path');
const app = express();

//Init MiddleWare
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV === 'development') {
	console.log(process.env.NODE_ENV);
	app.get('/', (req, res) => res.send('API Running'));
}
const PORT = process.env.PORT || 5000;

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('../public/build'));

	app.get('/*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
	});
}
app.listen(PORT, () => console.log('Server live on port ' + PORT));
