const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongo = () => {
    mongoose.connect(
        process.env.ONLINE_DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(() => console.log('Online connection successfull'))
        .catch((error) => {
            console.log(error);

            //for offline connection
            mongoose.connect(
                process.env.OFFLINE_DATABASE_URL
            ).then(() => console.log('Offline connection successful......'))
                .catch((error) => console.log(error))
        }
        );
}

module.exports = connectToMongo;