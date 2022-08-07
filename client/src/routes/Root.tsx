import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Root() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ marginTop: '100px' }}>
        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                navigate('/page1');
              }}
            >
              ページ１へ
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                navigate('/page2');
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
