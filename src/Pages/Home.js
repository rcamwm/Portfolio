import React, { useEffect }  from "react";
import ExternalLink from "../HelperComponents/ExternalLink";

function Home() {
  useEffect(() => {
    document.title = 'Robert Cameron McGiffert';
  }, []);

  const name = "Robert Cameron McGiffert"
  const title = "Software Engineer"
  const description = `Passionate about data, building cool new things, and solving complex problems.`

  const links = {
    "github": {
      "name": "GitHub",
      "iconPath": "M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z",
      "url": "https://github.com/rcamwm/"
    },
    "linkedin": {
      "name": "LinkedIn",
      "iconPath": "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z",
      "url": "https://www.linkedin.com/in/rcamwm/"
    },
    "resume": {
      "name": "Resume",
      "iconPath": "M13 9h5.5L13 3.5V9M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m8 18v-1c0-1.33-2.67-2-4-2s-4 .67-4 2v1h8m-4-8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z",
      "url": "Robert Cameron McGiffert resume.pdf"
    }
  }

  return (
    <div className="relative pt-4">
      <div className={`
        w-auto h-screen relative flex flex-col
        bg-black bg-opacity-60 
        p-4
        md:p-12
        lg:p-16
        xl:p-20
        2xl:p-24
      `}>
        <div 
          className={`
            text-left text-white font-sofia-sans tracking-tighter
            text-2xl p-4 -mb-10
            md:text-4xl
            lg:text-6xl lg:-mb-9
            xl:text-8xl xl:p-3 xl:-mb-8
            2xl:text-10xl
          `}
        >{name}</div>

        <div 
          className={`
            text-left text-job-text font-jetbrains 
            text-lg p-4
            md:text-xl
            lg:text-2xl
            xl:text-4xl
            2xl:text-6xl
          `}
        >{title}</div>

        <div
          dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br>') }}
          className={`
            text-left text-body-text font-roboto max-w-screen-lg
            text-sm p-4 -mb-1
            md:text-md md:mb-0
            lg:text-lg lg:mb-0
            xl:text-xl xl:mb-0
            2xl:text-2xl 2xl:mb-0
          `}
        />
        <div className="pl-4">
          <ExternalLink
            length={24}
            color="#dfdfdf"
            iconPath={links.resume.iconPath}
            name={links.resume.name}
            link={links.resume.url}
          />
        </div>
        <div className="pl-4">
          <ExternalLink
            length={24}
            color="#dfdfdf"
            iconPath={links.github.iconPath}
            name={links.github.name}
            link={links.github.url}
          />
        </div>
        <div className="pl-4">
          <ExternalLink
            length={24}
            color="#dfdfdf"
            iconPath={links.linkedin.iconPath}
            name={links.linkedin.name}
            link={links.linkedin.url}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;