import Icon from "../../HelperComponents/Icon";

function Contact() {
  const smsIcon = "M17 11h-2V9h2m-4 2h-2V9h2m-4 2H7V9h2m11-7H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z";
  const emailIcon = "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5l-8-5h16m0 12H4V8l8 5l8-5v10Z";
  const linkedinIcon = "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z";

  return (
    <div className="relative">
      <div className={`
        w-auto h-screen flex flex-col 
        bg-black bg-opacity-80
        p-6
        md:p-6
        lg:p-8
        xl:p-12
        2xl:p-14
      `}>
        <div 
          className={`
            text-center text-white font-sofia-sans tracking-tighter
            text-lg p-4 
            md:text-xl
            lg:text-2xl 
            xl:text-4xl
            2xl:text-6xl
          `}
        >Contact</div>

        <div
          className={`
            justify-center text-center text-body-text font-roboto
            flex flex-wrap
            text-sm p-4
            md:text-md
            lg:text-lg
            xl:text-xl
            2xl:text-2xl
          `}
        >
          I'd love to hear from you!<br/>
          Feel free to contact me with any of the methods listed below and I'll get back to you as soon as I can!
        </div>

        <div className="justify-center flex text-job-text font-jetbrains">
          <a 
            className="border p-2 mx-2 rounded-md hover:scale-105 flex" 
            href="mailto:rcamwm@gmail.com" 
          >
            <Icon color="#ffffff" iconPath={emailIcon} sizeClass="w-6 h-6 mr-2"/>Email
          </a>

          <a 
            className="border p-2 mx-2 rounded-md hover:scale-105 flex" 
            href="sms:+14082098985"
          >
            <Icon color="#ffffff" iconPath={smsIcon} sizeClass="w-6 h-6 mr-2"/>SMS
          </a>
          
          <a 
            className="border p-2 mx-2 rounded-md hover:scale-105 flex" 
            target="_blank"
            rel="noreferrer" 
            href="https://www.linkedin.com/in/rcamwm/"
          >
            <Icon color="#ffffff" iconPath={linkedinIcon} sizeClass="w-6 h-6 mr-2"/>LinkedIn
          </a>
        </div>
        <footer className="mt-auto text-center mb-0 text-white">
          ©2023 Build and design by <a className="text-body-text hover:scale-105" href="Robert Cameron McGiffert resume.pdf">Robert Cameron McGiffert</a>.<br/>
          Loosely designed in Figma.<br/>
          Built with React.js and Tailwind CSS.
        </footer>
      </div>
    </div>
  )
}
  
export default Contact;