const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/graphql_db';

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log(`Connected to mongo at ${url}`);
});
