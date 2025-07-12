require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');  // ✅ 추가
const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  app.listen(port, () => {
	 console.log(`Listening on: http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});