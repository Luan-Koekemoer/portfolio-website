import CardContainer from '../../components/card_container.jsx'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const certs = [
  {
    id: '1c',
    title: 'BSc IT & Physics',
    desc: 'Degree at the University of the Free State',
    long_desc: '/more/education/#deg1',
    img: '/images/ufs.png',
    tags: ['Degree'],
    status: 'Completed',
    date: 'December 2021',
    git: '',
  },
  {
    id: '2c',
    title: 'BSc Honours Computer Science',
    desc: 'Degree at the University of Pretoria',
    long_desc: '',
    img: '/images/up.jpg',
    tags: ['Degree'],
    status: 'Busy',
    date: 'December 2022',
    git: '',
  },
  {
    id: '3c',
    title: 'Cert: Introduction to Tensorflow',
    desc: 'DeepLearningAI Certification, via Coursera',
    long_desc: '/more/education/#tensor',
    img: '/images/tf_course.png',
    tags: [
      'Certification',
      'NLP',
      'Deep Learning',
      'Sequences and Series',
      'Computer Vision',
      'Tensorflow',
    ],
    status: 'Completed',
    date: 'September 2022',
    git: '',
  },
  {
    id: '4c',
    title: 'Cert: Learn Ethical Hacking From Scratch',
    desc: 'Udemy Certification',
    long_desc: '/more/education/#udhack',
    img: '/images/udemy.jpg',
    tags: ['Certification', 'Ethical Hacking', 'Cyber Security'],
    status: 'Completed',
    date: 'January 2022',
    git: '',
  },
  {
    id: '5c',
    title: 'Cert: Natural Language Processing Specialization',
    desc: 'DeepLearningAI Certification, via Coursera',
    long_desc: '',
    img: '/images/nlp_course.png',
    tags: ['Certification', 'NLP', 'Tensorflow'],
    status: 'Busy',
    date: 'December 2022',
    git: '',
  },
]

// current projects
export default function Certs(props) {
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
      <CardContainer col='bg.dark' items={certs} />
    </Box>
  )
}
