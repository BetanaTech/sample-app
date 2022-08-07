import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/:id', (req, res) => {
  const id = req.params.id;
  (async () => {
    let result;
    try {
      const response = await axios.get(`https://weather.tsukumijima.net/api/forecast/city/${id}`);
      result = response.data;
    } catch (error: any) {
      result = { error: 'xxxx!' };
    } finally {
      res.json(result);
    }
  })();
});

export default router;
