import CardContainer from '../../components/card_container.jsx'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const projects = [
  {
    id: '1a',
    title: 'Self hosted VPN',
    desc: 'I am self hosting a VPN server using OpenVPN. I learned a lot of the technical aspects regarding setting up servers and maintaining them.',
    long_desc: '/more/projects/#vpn',
    img: '/images/cloud.jpg',
    tags: ['Linux', 'OpenVPN', 'SSH', 'Cloud'],
    status: 'Production',
    date: 'February 2022',
    git: '',
  },
  {
    id: '2a',
    title: 'Flutter Showcase',
    desc: 'I was interested in learning how to develop and deploy mobile applications. The first mobile framework I decided to learn was Flutter. ',
    long_desc: '',
    img: '/images/mobiledev.jpg',
    tags: ['Mobile Dev', 'Flutter'],
    status: 'On Hold',
    date: 'September 2022',
    git: 'https://github.com/Luan-Koekemoer/flutter-show-case',
  },
  {
    id: '3a',
    title: 'GP Model',
    desc: 'This is a Genetic Programming model using Grammatical Evolution I wrote from scratch.',
    long_desc: '',
    img: '/images/ml.jpg',
    tags: ['GP', 'Machine Learning', 'Trees', 'Regression'],
    status: 'On Hold',
    date: 'August 2022',
    git: 'https://github.com/Luan-Koekemoer/GP-GrammaticalEvolution',
  },
  {
    id: '4a',
    title: 'Hyper Heuristics Model',
    desc: 'This model implements the core structure of models using hyper heuristics. This is part of a Machine Learning research topic that aims the automation of solving problems.',
    long_desc: '',
    img: '/images/ml.jpg',
    tags: ['GP', 'Heuristics', 'Machine Learning', 'Combinatorial Problems'],
    status: 'Development',
    date: 'November 2022',
    git: 'https://github.com/Luan-Koekemoer/hyper-heuristsics',
  },
  {
    id: '5a',
    title: 'Word Embeddings with Hebbian Learning',
    desc: 'This is a topic I am researching for my current degree. I am trying to find out whether Hebbian learning is a viable approach for creating word embeddings.',
    long_desc: '',
    img: '/images/ml2.jpg',
    tags: ['NLP', 'Machine Learning', 'Hebbian Learning', 'Neural Nets'],
    status: 'Development',
    date: 'November 2022',
    git: '',
  },
  {
    id: '6a',
    title: 'Self Hosted Website and Email Service ',
    desc: 'This website you are viewing. I am also running my own email service on this server.',
    long_desc: '',
    img: '/images/cloud.jpg',
    tags: ['Websites', 'SMTP', 'SSL', 'Nginx', 'Cloud', 'Dev ops', 'Linux'],
    status: 'Production',
    date: 'August 2022',
    git: '',
  },
  {
    id: '7a',
    title: 'Portfolio Website',
    desc: 'The website you are viewing right now. It is a project website myself using React.',
    long_desc: '',
    img: '/images/webdev.jpg',
    tags: ['Websites', 'React'],
    status: 'Production',
    date: 'August 2022',
    git: 'https://github.com/Luan-Koekemoer/portfolio-website',
  },
  {
    id: '8a',
    title: 'IOT Employee Control System',
    desc: 'Free Lancing Project where I am deploying an IOT system for a client. The aim is to help with some of the warehouse logistics. A front end is also developed to analyise the data.',
    long_desc: '',
    img: '/images/iot.jpg',
    tags: ['IOT', 'Embedded Programming', 'React', 'Tuari', 'SQL-Lite'],
    status: 'Development',
    date: 'December 2022',
    git: '',
  },
]

// current projects
export default function Projects(props) {
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
      <CardContainer col='bg.light' items={projects} />
    </Box>
  )
}
