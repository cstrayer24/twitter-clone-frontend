function Tright() {
  return (
    <div className="">
      <div className=" mt-4 border-slate-600  border-solid border-2 rounded-xl p-7">
        <h1 className=" font-extrabold text-2xl h-8 align-text-top mb-2">
          New to twitter?
        </h1>
        <p className=" text-xs text-slate-500">
          Sign up now to get your own personalized timeline!
        </p>
        <button className=" bg-slate-50 text-black w-full mb-5 rounded-full">
          sign up with google
        </button>
        <button className=" bg-slate-50 text-black w-full mb-5 rounded-full">
          sign up with apple
        </button>
        <button className=" bg-slate-50 text-black w-full rounded-full">
          sign up with phone or email
        </button>

        <div>
          <p className=" text-xs text-slate-500">
            by signing up , you agree to the
            <a href="">
              <span className=" ml-1">Terms of Service</span>
            </a>
            and
            <span>
              <a href="">Privacy Policy</a>
            </span>
            ,including
            <span>
              <a href="">Cookie use</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tright;
