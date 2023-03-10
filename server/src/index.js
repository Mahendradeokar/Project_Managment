import express from 'express';

import PORT from './config/config.js';

// routes
import UserRouter from './routes/user/index.js';

const app = express();

// app.get('/test', (req, res) => {
//   res.send('success');
// })

app.use('/api/v1', UserRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error('server is down');
  }
  console.log(`server is listing on ${PORT}`);
});
