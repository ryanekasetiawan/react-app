const Button = (props) => {
  const {classname="bg-black", children="", onClick = () => {}, type="button"} = props
  return (
    <button className={`h-10 px-6 mr-2 ml-2 font-semibold rounded-md ${classname} text-white`} type="submit" onClick={onClick}>
        {children}
      </button>
    );
}

export default Button;