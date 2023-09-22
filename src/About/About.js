function About(props) {
  const {lrPadding} = props;

  const description = `Proin porttitor, orci nec nonummy molestie, enim est eleifend mi.
  Non fermentum diam nisl sit amet erat. Duis semper. 
  Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
  
  Pellentesque congue. Ut in risus volutpat libero pharetra tempor. 
  Cras vestibulum bibendum augue. Praesent egestas leo in pede. 
  Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. 
  
  Maecenas adipiscing ante non diam sodales hendrerit:
  `

  const technologies = ["Nullam", "Lectus ac nisi", "Sagittis vulputate"]

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

        <div
          className={`
            text-left text-body-text font-roboto max-w-screen-lg
            text-sm pl-10
            md:text-md
            lg:text-lg
            xl:text-xl
            2xl:text-2xl
          `}
        >
          {technologies.map(tech => {
            return <li>{tech}</li>
          })}
        </div>
      </div>
    </div>
  )
}

export default About;