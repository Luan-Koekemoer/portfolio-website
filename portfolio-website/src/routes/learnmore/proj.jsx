import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export function VPN(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container id='vpn' sx={{ maxWidth: 'xl', py: 8 }}>
        <Typography sx={{ pb: 2 }} variant='h4' color='text.primary'>
          Self Hosted Website and Mailing Server
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <img src='/images/wojak1.png' width='150' height='150' alt='wjck' />
          <img src='/images/openvpn.png' width='250' height='150' alt='vpn' />
          <img src='/images/deb.png' width='150' height='150' alt='deb' />
        </Box>
        <Typography variant='h6' fontWeight='600' color='text.primary'>
          Why did I do it?
        </Typography>
        <Typography color='text.primary'>
          As you probably know there are a lot of VPN services. Mainly due to
          the overwhelming amount of YouTubers and Web Articles spreading all
          kinds of reasons why to use a VPN. Where it is somewhat misleading for
          the most part, promising security and anonymity etc. But if you are
          someone who is informed about networking and how the internet actually
          works it is obvious that these influencers are lying and just trying
          to sell you a product. and are just trying to sell a product. That is
          my first reason why I did not want to use any of the services is
          because it simply cannot be trusted. All your network traffic goes to
          a service provider's system without you having any control of how they
          do it, if their promises of a no log policy is withheld. <br /> <br />{' '}
          The solution is rather trivial then, just don't use a VPN at all.
          However I had a slight problem gaming in South Africa can sometimes be
          unstable when it comes to online gaming since local servers for a
          particular game are not always available to us. A common solution is
          to use a VPN to squeeze in a few extra milliseconds ping and a more
          stable connection to make the playing grounds a bit more even. Like I
          mentioned earlier I'm not really a fan of using any of the popular
          services, so what I did instead was I created my own VPN using a VPS
          provider, in this case I went with Linode. <br /> <br />
          Benefits to using your own VPN is, the ability to use any solution you
          want and configuring it to your desired needs. I went with an open
          source solution, where I chose OpenVPN, just because it is well
          maintained and has a lot of security experts that have studied the
          compromising any of my activity. Another bonus of using my own service
          is that I have the freedom to give my friends access to also use the
          VPN service not limiting any of our experiences. The only downside
          compared to using a more traditional VPN solution is that I am fixed
          to the location where my VPN is registered unless I subscribe to more
          VPS computers to spin up more of the VPNs. But for my use case it
          really doesn't matter.
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          fontWeight='600'
          variant='h6'
          color='text.primary'
        >
          What did I learn?
        </Typography>
        <Typography color='text.primary'>
          I was already quite familiar with the processes setting up a server
          however, I have never done it remotely. In today's age of cloud
          computing knowing how to SSH into a server and configuring it via the
          command line is a useful skill to have. <br />
          <br />
          When I set up the server I was aware about SSH keys but I was never
          sure how it worked and through the process I acquired some knowledge
          how to transfer the public key and to set up the private key on my
          host machine. I also learned a lot of security best practices such as
          disabling root login.
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='h6'
          fontWeight='600'
          color='text.primary'
        >
          Tech Stack
        </Typography>
        <ul>
          <li>OpenVPN</li>
          <li>Debbian Server</li>
          <li>Linode</li>
          <li>SSH</li>
        </ul>
      </Container>
    </Box>
  )
}

export function Web(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container
        id='web'
        sx={{ maxWidth: 'xl', py: 8, color: 'text.secondary' }}
      >
        <Typography sx={{ pb: 2 }} variant='h4'>
          Self Hosted VPN
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <img src='/images/ngnix.png' width='200' height='100' alt='vpn' />
          <img src='/images/wojak2.png' width='150' height='150' alt='wjck' />
          <img src='/images/react.png' width='150' height='150' alt='deb' />
        </Box>
        <Typography variant='h6' fontWeight='600'>
          Why did I do it?
        </Typography>
        <Typography>
          I've always wanted to host my own website so the decision was rather
          easy. I just liked the idea that I can write up my own website and
          have full control on exactly how it is presented and works. It is also
          highly extensible which is always nice if you want to add new sub
          websites etc. any constraints.
          <br />
          <br />
          The email server just was bundled with the idea, since I already had
          my own domain and running an email server shares a lot of the same
          software base so adding the it was pretty straight forward.
        </Typography>
        <Typography sx={{ pt: 2 }} fontWeight='600' variant='h6'>
          What did I learn?
        </Typography>
        <Typography>
          I was already familiar with react due to prior projects I worked that
          is why I went with it. It is also easier for me to add any additional
          features in the future. <br />
          <br /> Running an email server was completely new to me I learnt about
          how the validity of email signatures can be created using DMARC, DKIM
          and SPF entries to a registered domain.
        </Typography>
        <Typography sx={{ pt: 2 }} variant='h6' fontWeight='600'>
          Tech Stack
        </Typography>
        <ul>
          <li>Ngnix</li>
          <li>React</li>
          <li>Linode + Debbian</li>
          <li>Certbot</li>
        </ul>
      </Container>
    </Box>
  )
}
