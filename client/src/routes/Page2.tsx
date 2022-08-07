import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import Button from '@mui/material/Button';

export default function Page2() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [temperatures, setTemperatures] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const list = ['400010', '410010', '420010', '430010', '440010', '450010', '460010', '471010'];

    (async () => {
      const result = [];
      for (let i = 0; i < list.length; i++) {
        const response: any = await axios.get(`http://localhost:55000/router1/${list[i]}`);
        result.push({ ...response, id: list[i] });
      }
      setTemperatures(result);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="temperatures">
        <h2>各地の天気</h2>
      </div>
      {isLoading ? (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '150px' }}>
          <Grid item>
            <CircularProgress color="secondary" />
          </Grid>
        </Grid>
      ) : (
        <div style={{ paddingLeft: '5px' }}>
          {temperatures.map((temperature) => (
            <div key={temperature.id} style={{ marginBottom: '50px' }}>
              <h3>場所：{temperature.data.location.city}</h3>
              <h4>日時：{temperature.data.forecasts[0].date}</h4>
              <h4>天気：{temperature.data.forecasts[0].telop}</h4>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <img src={temperature.data.forecasts[0].image.url} alt={temperature.data.forecasts[0].image.title} />
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      )}
      <div style={{ padding: '20px' }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                navigate('/page1');
              }}
            >
              ページ２へ
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
