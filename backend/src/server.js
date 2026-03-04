require('dotenv').config();
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contact');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
