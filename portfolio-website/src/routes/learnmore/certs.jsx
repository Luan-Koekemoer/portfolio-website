import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export function Deg1(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container
        id='deg1'
        sx={{ maxWidth: 'xl', py: 8, color: 'text.primary' }}
      >
        <Typography sx={{ pb: 2 }} variant='h4' color='text.primary'>
          BSc: IT, Majoring in Computer Science and Physics
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <img src='/images/ufs.png' width='30%' alt='ufs' />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}></Box>
        <Typography variant='h6' fontWeight='600' color='text.primary'>
          Qualification Obtained 2021
        </Typography>
        <Typography>
          Directly after high school I did a Bachelor's of Science degree in IT
          majoring in Computer Science and Physics, at the University of the
          Free State. Finished my degree in the standard minimal time of 3
          years.
        </Typography>
        <br />
        <Typography fontWeight='bold'>Computer Science</Typography>
        <Typography>
          During my years of study for the Computer Science major I completed,
          courses that related to the following topics: C# programming, Hardware
          A+, Design Patterns, Data Structures, Web dev, Databases (SQL),
          Networking (A+) and Software Engineering.
        </Typography>
        <br />
        <Typography fontWeight='bold'>Physics</Typography>
        <Typography>
          Regarding my Physics degree we covered all the topics up to modern
          physics, which would be classical physics, wave mechanics,
          electromagnetism, electronics, statistical physics, modern physics and
          practical experiments.
        </Typography>
        <br />
        <Typography fontWeight='bold'>Details on degree</Typography>
        <Typography color='text.primary'>
          Please email me for a copy of my degree and academic record. On the
          academic record you will see a clear list of all the modules that I
          completed along with the grades.
        </Typography>
      </Container>
    </Box>
  )
}
export function Deg2(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container
        id='deg2'
        sx={{ maxWidth: 'xl', py: 8, color: 'text.secondary' }}
      >
        <Typography sx={{ pb: 2 }} variant='h4'>
          BSc: IT, Majoring in Computer Science and Physics
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <img src='/images/up.jpg' width='30%' alt='up' />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}></Box>
        <Typography variant='h6' fontWeight='600'>
          Current Studies (2022)
        </Typography>
        <Typography>
          I decided on my honours to broaden my interest and to learn in more depth what computer science has to offer. So I decided to do my BSc Computer Science honours degree
          at the University of Pretoria.
        </Typography>
        <br />
        <Typography fontWeight='bold'>Courses:</Typography>
        <Typography>
          For my honours degree, I did it in one year as full time during the year of 2022.
          <br />
          <br />
          That means I have a set of modules and a main research project I have
          to complete. The research project is a year modules where I am going
          to finish it at the end of October 2022. For my main research I am
          testing whether Hebbian learning, an unsupervised learning technique,
          can be used to create word embeddings.
        </Typography>
        <br />
        <Typography fontWeight='bold'>First Semester</Typography>
        <Typography>
          For my first semester I had to complete three modules. AI-1 which is a
          modules where I learned about Genetic Programming and the applications
          there of. I also implemented my own models for the practical
          assignments which was part of the course.
          <br />
          <br />
          Then I also had a Generic Programming course where I learned advanced
          compiler techniques to design and implement generic design patterns.
          We used C++ to implement the methods but it is applicable to any
          compiler based languages. The design patterns differ in the sense that
          it constructed the objects during compile time instead of runtime like
          the standard design patterns.
          <br />
          <br />
          Lastly I had a Formal Programming course where I learned about Model
          Checkers, how they work and how to use Spin Model Checker to write and
          concurrent programs and test them for safety and liveness. Even though
          Spin was the model checker we used the principles and the theory can
          be applied to any other model checker.
        </Typography>
        <br />
        <Typography fontWeight='bold'>Second Semester</Typography>
        <Typography>
          For this semester (2022) I had the AI-2 course where I am learned
          about neural networks. Everything about the theoretical aspect, such
          as the history, parameter turning and the different architectures.
          However, we are also did practical implementations for the
          assignments.
          <br />
          <br />
          I have a Data Mining course. In this course we learned about the
          CRISP-DM model, how to process, analyse and use data.
          <br />
          <br />
          I also had a module that was about Hyper-Heuristics, which is a field
          where we study automation and optimization techniques for using and
          creating heuristics. These hyper-heuristics are used to solve for
          combinatorial problems. This is things such as warehouse management,
          logistics and time table scheduling.
        </Typography>
        <Typography fontWeight='bold'>Details on degree</Typography>
        <Typography>For more details feel free to email me.</Typography>
      </Container>
    </Box>
  )
}

export function Tensor(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container
        id='tensor'
        sx={{ maxWidth: 'xl', py: 8, color: 'text.primary' }}
      >
        <Typography sx={{ pb: 2 }} variant='h4'>
          DeepLearning.AI TensorFlow Developer
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}></Box>
        <Typography variant='h6' fontWeight='600'>
          Qualification Obtained 2022
        </Typography>
        <Typography fontWeight='600'>
          You can learn more about this course on the Coursera website{' '}
          <a
            className='lightlink'
            href='https://www.coursera.org/professional-certificates/tensorflow-in-practice'
            target='blank'
          >
            here
          </a>
          .
        </Typography>
        <Typography>
          <a
            className='lightlink'
            href='https://www.coursera.org/account/accomplishments/professional-cert/EVYLXVAAY7X5'
            target='blank'
          >
            Verify Certification
          </a>
        </Typography>
        <img src='/images/tensor.jpeg' width='80%' alt='tensor cert' />
        <Typography color='text.primary'></Typography>
      </Container>
    </Box>
  )
}

export function UdemyHack(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container
        id='udhack'
        sx={{ maxWidth: 'xl', py: 8, color: 'text.primary' }}
      >
        <Typography sx={{ pb: 2 }} variant='h4'>
          Learn Ethical Hacking From Scratch
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}></Box>
        <Typography variant='h6' fontWeight='600'>
          Qualification Obtained 2022
        </Typography>
        <Typography fontWeight='600'>
          You can learn more about this course on the Udemy website{' '}
          <a
            className='lightlink'
            href='https://www.udemy.com/course/learn-ethical-hacking-from-scratch/'
            target='blank'
          >
            here
          </a>
          .
        </Typography>
        <Typography>
          <a
            className='lightlink'
            href='https://www.udemy.com/certificate/UC-8ccb3353-e8ca-468a-a0fe-236fc6bf8561/'
            target='blank'
          >
            Verify Certification
          </a>
        </Typography>
        <img src='/images/udemycyber.jpg' width='80%' alt='tensor cert' />
        <Typography color='text.primary'></Typography>
      </Container>
    </Box>
  )
}

export function AzureAi900(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container
        id='ai900'
        sx={{ maxWidth: 'xl', py: 8, color: 'text.secondary' }}
      >
        <Typography sx={{ pb: 2 }} variant='h4'>
          Azure AI-900: AI Fundementals
        </Typography>
        <Typography variant='h6' fontWeight='600'>
          Qualification Obtained 2024
        </Typography>
        <Typography fontWeight='600'>
          You can learn more about this course on the Microsoft website{' '}
          <a
            className='darklink'
            href= 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals'
            target='blank'
          >
            here
          </a>
          .
        </Typography>
        <Typography>
          <a
            className='darklink'
            href='https://learn.microsoft.com/api/credentials/share/en-us/LuanKoekemoer-7565/B87B4641BB2C6D8B?sharingId=8CC0788711EBDD0'
            target='blank'
          >
            Verify Certification
          </a>
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <img src='/images/ai900full.png' width='80%' alt='up' />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}></Box>
      </Container>
    </Box>
  )
}