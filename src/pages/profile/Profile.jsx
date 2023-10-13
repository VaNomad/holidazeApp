import { AiOutlineUser, AiOutlineMail, AiOutlineCamera } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import { useUser } from "../../context/UserContext"; 

export const Profile = () => {
  const { user } = useUser();

  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-evenly h-[40vh]">
        <div className="relative ps-14 pe-5 py-1 border-[2px] border-holipink rounded-full w-[80%] sm:max-w-[30rem]">
          <div className="absolute top-0 left-[-1px]">
            <AiOutlineUser
              size={32}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          {/* {user && <p>{user.name}</p>} */}
          <p className="whitespace-nowrap">{user.name}</p>
        </div>
        <div className="relative ps-14 pe-5 py-1 border-[2px] border-holipink rounded-full w-[80%] sm:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <AiOutlineMail
              size={32}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap">{user.email}</p>
        </div>
        <div className="relative ps-14 pe-5 py-1 border-[2px] border-holipink rounded-full w-[80%] sm:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <AiOutlineCamera
              size={32}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap overflow-hidden">{user.avatar}</p>
        </div>
        <div className="relative ps-14 pe-5 py-1 border-[2px] border-holipink rounded-full w-[80%] sm:max-w-[30rem]">
          <div className="absolute top-0 left-0">
            <BsKey
              size={32}
              className="text-black bg-holipink rounded-full p-1"
            />
          </div>
          <p className="whitespace-nowrap flex items-center justify-between">
            Venue Manager:{" "}
            {user.venueManager ? (
              <GiCheckMark color="#70C376" />
            ) : (
              <GiCrossMark color="#C37070" size={20} />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
