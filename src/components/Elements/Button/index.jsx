const Button = (props) => {
  const {variant="bg-black", children=""} = props
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
        {children}
      </button>
    );
}

export default Button;