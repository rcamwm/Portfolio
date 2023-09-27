function Contact(props) {
  const {lrPadding} = props;

  return (
    <div className={`${lrPadding}`}>
      <div className={`
        w-auto rounded-lg flex flex-col 
        border border-transparent bg-black bg-opacity-60 break-after-page
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