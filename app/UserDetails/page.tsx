const UserDetails = () => {
  return (
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
  );
};
export default UserDetails;
