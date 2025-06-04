import { Link } from "react-router-dom"

const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-end min-h-screen bg-purple-50 p-4 pb-10">
      <div className="w-full max-w-md space-y-1">
        <div className="flex flex-col my-6">
          <h1 className="text-[27px] text-[#1D2226] font-semibold text-left">
            Welcome to PopX
          </h1>
          <p className="text-[var(--secondary-text-color)] w-70 font-light text-[17px] text-left text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <Link to="/signup"><button className="bg-[var(--primary-color)] hover:bg-[#6316fd]">Create Account</button></Link>
          <Link to="/signin">
            <button className="secondary-button font-bold bg-[#6C25FF4B] hover:bg-[#6C25FF5f]">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
