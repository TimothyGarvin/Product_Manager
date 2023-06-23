const mongoose = require('mongoose');
const db = process.env.ATLAS_DATABASE;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const uri =
`mongodb+srv://${username}:${pw}@my-first-db.uehwuuh.mongodb.net/${db}`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established database connection."))
    .catch((err) => console.log("Something went wrong when connection to the database", err))