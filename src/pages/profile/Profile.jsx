import { AiOutlineUser, AiOutlineMail, AiOutlineCamera } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { GiCheckMark, GiCrossMark } from "react-icons/gi";
import { useUser } from "../../context/UserContext"; 

export const Profile = () => {
  const { user } = useUser();

  return (
    <div className="backdrop-blur-lg rounded-b-2xl flex justify-center items-center p-3">
      <div className="max-w-[80%] p-3">
        <div className="max-w-sm mx-auto flex flex-col gap-5">
          <div className="flex border-[2px] border-holipink rounded-full items-center">
            <div>
              <AiOutlineUser
                size={32}
                className="text-black bg-holipink rounded-full p-1"
              />
            </div>
            <div className=" mx-5">
              <p className="">{user.name}</p>
            </div>
          </div>
          <div className="flex border-[2px] border-holipink rounded-full items-center">
            <div>
              <AiOutlineMail
                size={32}
                className="text-black bg-holipink rounded-full p-1"
              />
            </div>
            <div className="mx-5">
              <p className="">{user.email}</p>
            </div>
          </div>
          <div className="flex border-[2px] border-holipink rounded-full items-center">
            <div>
              <AiOutlineCamera
                size={32}
                className="text-black bg-holipink rounded-full p-1"
              />
            </div>
            <div className="overflow-x-hidden mx-5">
              <p className="whitespace-nowrap">{user.avatar}</p>
            </div>
          </div>
          <div className="flex border-[2px] border-holipink rounded-full items-center">
            <div>
              <BsKey
                size={32}
                className="text-black bg-holipink rounded-full p-1"
              />
            </div>
            <div>
              <p className="flex items-center justify-between mx-5 gap-5">
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
      </div>
    </div>
  );
};
