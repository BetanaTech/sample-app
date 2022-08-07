import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';

import ImageTop from '../assets/images/top_banner.jpeg';
import Image01 from '../assets/images/onepiece01.png';
import Image02 from '../assets/images/onepiece02.png';
import Image03 from '../assets/images/onepiece03.png';
import Image04 from '../assets/images/onepiece04.png';
import Image05 from '../assets/images/onepiece05.png';
import Image06 from '../assets/images/onepiece06.png';
import Image07 from '../assets/images/onepiece07.png';
import Image08 from '../assets/images/onepiece08.png';
import Image09 from '../assets/images/onepiece09.png';
import Image10 from '../assets/images/onepiece10.png';

export default function Page1() {
  const navigate = useNavigate();

  const contents = [
    {
      id: '01',
      title: 'ルフィ',
      img: Image01,
    },
    {
      id: '02',
      title: 'ゾロ',
      img: Image02,
    },
    {
      id: '03',
      title: 'ナミ',
      img: Image03,
    },
    {
      id: '04',
      title: 'ウソップ',
      img: Image04,
    },
    {
      id: '05',
      title: 'サンジ',
      img: Image05,
    },
    {
      id: '06',
      title: 'チョッパー',
      img: Image06,
    },
    {
      id: '07',
      title: 'ロビン',
      img: Image07,
    },
    {
      id: '08',
      title: 'フランキー',
      img: Image08,
    },
    {
      id: '09',
      title: 'ブルック',
      img: Image09,
    },
    {
      id: '10',
      title: 'ジンベエ',
      img: Image10,
    },
  ];

  return (
    <>
      <div>
        <img id="topContent" src={ImageTop} alt="topContent" width="100%" />
      </div>
      <div style={{ padding: '20px' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, md: 5 }}>
          {contents.map((content) => (
            <Grid item xs={1} md={1} key={content.id}>
              <Chip
                label={content.title}
                variant="outlined"
                style={{ width: '100%' }}
                onClick={() => {
                  const element = document.getElementById(`content-${content.id}`);
                  window.history.replaceState(null, '', `${window.location.pathname}#content-${content.id}`);
                  console.log(window.location);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="contents">
        {contents.map((content) => (
          <div id={`content-${content.id}`} key={content.id} className="content">
            <h2 className="title">{content.title}</h2>
            <img src={content.img} alt={content.title} width="80%" />
          </div>
        ))}
      </div>
      <div style={{ padding: '20px' }}>
        <Grid container justifyContent="center" alignItems="center">
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
