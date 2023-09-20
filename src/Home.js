// import ResizingText from "./ResizingText";

function Home() {
  return (
    <div className="w-screen flex flex-col border border-transparent bg-black bg-opacity-60">
      {/* <ResizingText title="Robert Cameron McGiffert" defaultSize={4} align="left"/> */}
      <div className="text-left text-white font-sofia-sans text-xl p-4 md:text-2xl lg:text-4xl xl:text-6xl xl:p-3 2xl:text-8xl -mb-8 tracking-tighter">Robert Cameron McGiffert</div>
      <div className="text-left text-job-text font-jetbrains text-2xl p-4">Software Engineer</div>
      <div className="text-body-text text-2xl text-left font-roboto max-w-screen-lg p-4">
        A short description of yourself goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus vel tortor condimentum rhoncus.
      </div>
    </div>
  )
}

export default Home;