import CardContainer from '../../components/card_container.jsx'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react';
import { settings } from '../../Settings.js';

export default function Certs(props) {
  const [data, setCerts] = useState(null);
  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `${settings.url}/cards/qualifications`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setCerts(postsData);
      } catch (err) {
        setCerts(null);
      }
    };
  
    fetchDataForPosts();
  }, [])


  return (
    <Box bgcolor='bg.dark'>
      <Container
        id = 'edu'
        sx={{
          justifyContent: 'center',
          display: 'inline-flex',
          flexWrap: 'wrap',
          maxWidth: 'xl',
          py: 8,
          my:1,
        }}
      >
        <Typography variant='h3'>Degrees and Certifications</Typography>
      </Container>
      <CardContainer col='bg.dark' items={data} />
    </Box>
  )
}
