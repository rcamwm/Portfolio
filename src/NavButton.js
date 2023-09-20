function NavButton(props) {
  const {name, dir} = props;
  return (
    <div class="w-32 border border-transparent bg-black bg-opacity-50 rounded-lg p-4 m-4 flex justify-center items-center">
      <a href={dir} class="text-xl text-white font-courier-new text-center"> {name} </a>
    </div>
  )
}
  
export default NavButton;