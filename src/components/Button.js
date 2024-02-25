const Button = ({ text }) => {
  return (
    <button className=" items-center hidden md:block justify-center h-9 px-6 font-semibold tracking-wide text-white transition  bg-indigo-300 hover:bg-indigo-600  rounded shadow-md  focus:shadow-outline focus:outline-none duration-500 md:static ">
      {text}
    </button>
  );
};

export default Button;
