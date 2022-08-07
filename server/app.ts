import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import router1 from './router1';

const app = express();
app.use(helmet());
app.use(cors());

// app.get('/api/photo/list', function (req, res, next) {
//   // res.json(photoList);
// });

app.use('/router1', router1);

const port = 5000;
app.listen(port, function () {
  console.log(`Listening to PORT: ${port}`);
});
