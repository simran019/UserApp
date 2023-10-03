"use client";

const UserDetails = (props: any) => {
  const info = props.userDetails;

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
        {info.map((item: any) => {
          return (
            <tr key={item.username} className="border-2 border-black p-2">
              <td className="p-2 border-2 border-black"> {item.username}</td>
              <td className="p-2 border-2 border-black">{item.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default UserDetails;
