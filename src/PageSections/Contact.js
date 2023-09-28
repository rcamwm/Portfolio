function Contact(props) {
  return (
    <div className="relative">
      <div className={`
        w-auto h-screen flex flex-col 
        border border-transparent bg-black bg-opacity-80
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

      </div>
    </div>
  )
}
  
  export default Contact;