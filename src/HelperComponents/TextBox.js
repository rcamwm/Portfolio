function TextBox(props) {
  const { text, setText } = props;

  const onType = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={`
      flex w-full justify-center
      mb-4 text-xs
      sm:text-sm
      md:mb-2 md:text-sm
      lg:mb-2 lg:text-sm 
      xl:mb-0 xl:text-md 
      2xl:mb-0 2xl:text-md 
    `}>
      <input
        className='bg-job-text w-96 rounded-md px-4 py-2 font-jetbrains focus:outline-none'
        type="text"
        value={text}
        onChange={onType}
        placeholder="E.g.: Python; NumPy; Jupyter; React; Unity"
      />
    </div>
  );
}

export default TextBox;