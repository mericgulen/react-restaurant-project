const Error = ({ msg, retry }) => {
  return (
    <div className="max-w-[700px] w-full flex flex-col mx-auto ">
      <div className="flex flex-col gap-3 rounded-lg py-8 text-center  mt-20 mb-10 bg-slate-600">
        <p>Sorry..! An error occured</p>
        <p>{msg}</p>
      </div>

      {retry && (
        <div className="flex justify-end">
          <button
            onClick={retry}
            className="px-4 py-1 rounded-lg border border-transparent bg-red-500  transition duration-500 hover:bg-transparent  hover:border-slate-300"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default Error;
