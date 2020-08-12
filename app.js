let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let todoRoutes = require('./routes/todos');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/todos', todoRoutes);

app.get('*', (req, res) => {
	res.send('Oops... something went wrong!');
});

app.listen(3000, (req, res) => {
	console.log('API App is Running on port 3000...');
});
