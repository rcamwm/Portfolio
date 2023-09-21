function About() {
  const description = `I am a guy who does stuff`
  return (
    <div className="w-auto rounded-lg flex flex-col border border-transparent bg-black bg-opacity-60 break-after-page">
      <div 
        className={`
          text-center text-white font-sofia-sans tracking-tighter
          text-lg p-4 
          md:text-xl
          lg:text-2xl 
          xl:text-4xl
          2xl:text-6xl
        `}
      >About Me</div>

      <div
        dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br>') }}
        className={`
          text-left text-body-text font-roboto max-w-screen-lg
          text-sm p-3
          md:text-md
          lg:text-lg
          xl:text-xl
          2xl:text-2xl
        `}
      />
    </div>
  )
}

export default About;