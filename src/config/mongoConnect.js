import mongoose from 'mongoose';

const mongoConnect = () => {
  mongoose.connect(process.env.MONGO_URL);
  mongoose.connection.once('open', () => {
    console.log('Connected to DataBase');
    }).on('error', (err) => {
    console.log(err);
  });
};

export default mongoConnect;