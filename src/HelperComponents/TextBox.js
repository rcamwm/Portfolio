function TextBox(props) {
  const { text, setText } = props;

  const onType = (event) => {
    setText(event.target.value);
  };

  return (
    <div className={`flex w-full justify-center text-md`}>
      <input
        className='bg-job-text w-96 rounded-md px-4 py-2 font-jetbrains focus:outline-none'
        type="text"
        value={text}
        onChange={onType}
        placeholder="E.g.: Python; NumPy; Jupyter; React"
      />
    </div>
  );
}

export default TextBox;