import CardContainer from '../../components/card_container.jsx'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react';
import { settings } from '../../Settings.js';


export default function Projects(props) {
  const [data, setProjects] = useState(null);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${settings.url}/cards/projects`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postsData = await response.json();
        setProjects(postsData);
      } catch (err) {
        setProjects(null);
      }
    };
  
    fetchProjects();
  }, [])
  

  return (
    <Box bgcolor='bg.light'>
      <Container
        id='proj'
        sx={{
          justifyContent: 'center',
          display: 'inline-flex',
          flexWrap: 'wrap',
          maxWidth: 'xl',
          py: 8,
        }}
      >
        <Typography color='text.secondary' variant='h3'>
          Personal Projects
        </Typography>
      </Container>
      <CardContainer col='bg.light' items={data} />
    </Box>
  )
}
