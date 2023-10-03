function Contact(props) {
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
          I'm currently based in California.<br/>
          If you'd like to connect, feel free to contact me and I'll get back to you as soon as I can!
        </div>

        <div className="justify-center flex text-job-text font-jetbrains">
          <a 
            className="border p-2 mx-2 rounded-md hover:scale-105" 
            href="tel:4082098985"
          >Phone</a>
          <a 
            className="border p-2 mx-2 rounded-md hover:scale-105" 
            href="mailto:rcamwm@gmail.com" 
          >Email</a>
          <a 
            className="border p-2 mx-2 rounded-md hover:scale-105" 
            href="tel:4082098985"
          >LinkedIn</a>
        </div>

      </div>
    </div>
  )
}
  
  export default Contact;