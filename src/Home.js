function Home() {
  return (
    <div className="w-screen flex flex-col border border-transparent bg-black bg-opacity-60">
      <div className="text-left text-white font-sofia-sans tracking-tighter text-xl p-4 -mb-10 md:text-2xl lg:text-4xl lg:-mb-9 xl:text-6xl xl:p-3 xl:-mb-8 2xl:text-8xl">Robert Cameron McGiffert</div>
      <div className="text-left text-job-text font-jetbrains text-2xl p-4">Software Engineer</div>
      <div className="text-body-text text-2xl text-left font-roboto max-w-screen-lg p-4">
        A short description of yourself goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus vel tortor condimentum rhoncus.
      </div>
    </div>
  )
}

export default Home;