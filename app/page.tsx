import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white w-screen flex flex-col items-center h-screen pt-10 gap-6">
      <div className="text-fuchsia-800 font-bold text-3xl">USER DETAILS</div>
      <div className="flex flex-col w-1/2 h-fit border-2 border-black p-4 gap-4">
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
      </div>

      <table className="w-1/2 border-2 border-black p-2 text-center">
        <thead className="p-4">
          <tr>
            <th className="border-2 border-black w-32 text-white bg-fuchsia-800 p-2">
              Username
            </th>
            <th className="border-2 border-black w-32 text-white bg-fuchsia-800 p-2">
              Age
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>username</td>
            <td>age</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
