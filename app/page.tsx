import Image from "next/image";
import UserInput from "./UserInput/page";
import UserDetails from "./UserDetails/page";

export default function Home() {
  return (
    <div className="bg-white w-screen flex flex-col items-center h-screen pt-10 gap-6">
      <div className="text-fuchsia-800 font-bold text-3xl">USER DETAILS</div>
      <UserInput />
      <UserDetails />
    </div>
  );
}
