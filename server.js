const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

// Служи статички фајлови од папката public
app.use(express.static(path.resolve(__dirname, 'public')));

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Поврзан со MongoDB');

    // Route за главна страница - index.html
    app.get('/', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });

    app.listen(PORT, () => {
      console.log(`🚀 Серверот работи на портата ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Грешка при поврзување:', err);
  });

