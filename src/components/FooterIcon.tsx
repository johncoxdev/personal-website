const FooterIcon = () => {
    return (
        <div className='flex justify-center mt-10'>
            <a href='./my_resume.pdf' target='_blank'>
              <img src="./Resume.svg" width="30" height="30" alt="Resume"/>
            </a>
            <a href="mailto:john.cox0321@gmail.com" className='pl-3'>
              <img src="./Email.svg" width="30" height="30" alt="Email"/>
            </a>
            <a href="https://github.com/programwithjohn/" target='_blank' className='pl-3'>
              <img src="./Github.svg" width="30" height="30" alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/johncox-dev/" target='_blank' className='pl-3'>
              <img src="./Linkedin.svg" width="30" height="30" alt="LinkedIn"/>
            </a>
            <a href="https://twitter.com/johncoxdev" target='_blank' className='pl-3'>
              <img src="./Twitter.svg" width="30" height="30" alt="Twitter"/>
            </a>
        </div>
    )
}

export default FooterIcon