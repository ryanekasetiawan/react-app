import React from "react";

const Button = (props) => {
  const {variant="bg-black", children=""} = props
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
        {children}
      </button>
    );
}

function App() {
  return <div className="flex justify-center bg-blue-600 min-h-screen items-center">
    <div className="flex gap-x-3">
      <Button variant="bg-red-700">
        Login
      </Button>
      <Button variant="bg-slate-700">
        Logout
      </Button>
      <Button>
      </Button>
    </div>
  </div>
}

export default App
