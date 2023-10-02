const UserInput = () => {
  return (
    <form className="flex flex-col w-1/2 h-fit border-2 border-black p-4 gap-4">
      <label className="text-white bg-fuchsia-800 p-2 rounded-md">
        Username
      </label>
      <input
        className="border-2 p-2 border-black rounded-md"
        placeholder="username"
      />
      <label className="text-white bg-fuchsia-800 p-2 rounded-md">Age</label>
      <input
        className="border-2 p-2 border-black rounded-md"
        placeholder="age"
      />
      <button className="text-white bg-fuchsia-800 p-2 rounded-md w-fit self-center">
        Submit Details
      </button>
    </form>
  );
};

export default UserInput;
