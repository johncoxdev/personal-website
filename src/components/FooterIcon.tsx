const FooterIcon = () => {
    return (
        <div className='flex z-20 justify-center'>
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
        </div>
    )
}

export default FooterIcon