const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  // ✅ 추가
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(cors());
app.use(express.json()); // JSON body 파싱

// ✅ MongoDB 연결
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// 기본 라우터
app.get('/', (req, res) => {
  res.send('Hello, Express with CORS and dotenv + MongoDB!');
});

// ✅ 시나리오 라우터 등록
const scenarioRoutes = require('./routes/scenario');  // 경로는 적절히 수정
app.use('/api/scenarios', scenarioRoutes);

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
