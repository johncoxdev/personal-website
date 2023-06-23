const FooterIcon = () => {
    return (
        <div className='flex justify-center mt-6 mb-4 sm:mt-10 sm:mb-0'>
            <a href='./my_resume.pdf' target='_blank'>
              <img src="./icon/Resume.svg" width="30" height="30" alt="Resume"/>
            </a>
            <a href="mailto:john.cox0321@gmail.com" className='pl-3'>
              <img src="./icon/Email.svg" width="30" height="30" alt="Email"/>
            </a>
            <a href="https://github.com/johncoxdev/" target='_blank' className='pl-3'>
              <img src="./icon/Github.svg" width="30" height="30" alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/johncoxdev/" target='_blank' className='pl-3'>
              <img src="./icon/Linkedin.svg" width="30" height="30" alt="LinkedIn"/>
            </a>
            <a href="https://twitter.com/johncoxdev" target='_blank' className='pl-3'>
              <img src="./icon/Twitter.svg" width="30" height="30" alt="Twitter"/>
            </a>
        </div>
    )
}

export default FooterIcon