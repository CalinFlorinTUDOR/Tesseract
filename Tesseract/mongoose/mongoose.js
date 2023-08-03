const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://calinftudor:calinescu6@tesseract.askaihc.mongodb.net/Tesseract?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
		useUnifiedTopology: true,

});

module.exports = mongoose;
	
