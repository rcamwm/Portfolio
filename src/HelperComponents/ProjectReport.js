function ProjectReport(props) {
  const { headerText, bodyText } = props;
  return (
    <div className="flex justify-center py-4">
      <div className={`
        text-left font-roboto max-w-screen-lg
        text-sm mb-5 rounded-md
      `}>

        <div className={`
          bg-project-bg bg-opacity-80 rounded-t-md
          font-jetbrains text-project-title 
          text-lg py-4 px-8 mb-2
          md:text-xl md:pb-4 
          lg:text-2xl lg:pb-6 lg:pt-6
          xl:text-4xl xl:pb-6 xl:pt-6
          2xl:text-4xl 2xl:pb-6 2xl:pt-6
        `}>{headerText}</div>

        <div className="bg-project-bg bg-opacity-80 rounded-b-md">
          <div 
            dangerouslySetInnerHTML={{ __html: bodyText.replace(/\n/g, '<br><br>') }}
            className={`
              text-black text-opacity-90 pt-4 px-8
              bg-gray-500 bg-opacity-30 
              text-sm
              md:text-md
              lg:text-lg
              xl:text-lg
              2xl:text-xl
            `}
          />
        </div>

      </div>
    </div>
  )
}

export default ProjectReport;