import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCloudUpload } from "react-icons/bs";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import { UpdateProfile } from "../../../api/UpdateProfile";
import { useUser } from "../../../context/UserContext";
import { GridLoader } from "react-spinners";

export const ChangeAvatarModal = ({ isOpen, closeModal, setNewAvatarUrl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [urlError, setUrlError] = useState(null);

  const {
    updateAvatar,
    state: { user },
  } = useUser();

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  if (!isOpen) {
    return null;
  }

  console.log("User:", user)

  if (!user) {
    return <GridLoader size={40} color="white" />
  }

  const handleUpdateProfile = async (data) => {
    try {
      const response = await UpdateProfile(data);
      console.log(response);
      console.log(data);
      console.log(UpdateProfile);
    } catch (error) {
      setUrlError("SignUp failed. Check added credentials");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleSwapAvatar = (data) => {
    setNewAvatarUrl(data.avatar)
  }

  const handleUpdateAvatar = async (data) => {
    try {
      setIsLoading(true);
      // Call the updateAvatar function with the user's name and the new avatar URL
      const response = await updateAvatar(user.name);
      console.log(response);
      console.log(data);
      console.log(user.name);

      setIsLoading(false);
      closeModal();
    } catch (error) {
      setIsLoading(false);
      setUrlError("Update avatar failed. Check the provided credentials");
    }

  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit(handleUpdateProfile, handleOverlayClick)}
          className="relative"
        >
          <input
            id="url-input"
            className="absolute rounded-full py-1 px-2 bg-zinc-700 overflow-hidden"
            {...register("avatar", {
              required: "An avatar image is required",
              pattern: {
                value:
                  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/,
                message: "Avatar must be a valid url",
              },
            })}
            placeholder="Enter your Avatar Url"
            onBlur={() => {
              trigger("avatar");
            }}
          />
          {errors.avatar && (
            <p className="text-red-500">{errors.avatar.message}</p>
          )}
          <button
            id="save"
            className="absolute right-[-4rem] bottom-[3rem] flex justify-center items-center gap-2 py-1 px-2 rounded-full text-black border border-black bg-holigreen font-ndo hover:scale-105 font-medium transition-all duration-800 cursor-pointer"
            type="submit"
            onClick={handleUpdateAvatar}
          >
            <BsCloudUpload size={20} className="rounded-full w-full h-full" />
            {isLoading ? <GridLoader className="h-1 w-1" /> : "Save"}
          </button>
          {urlError && <p className="text-red-500">{urlError}</p>}
        </form>
        <form onSubmit={handleSwapAvatar}>
          <button
            id="swap"
            className="absolute right-[-3rem] bottom-0 flex justify-center items-center gap-2 py-1 px-2 rounded-full text-black border border-black bg-holiblue font-ndo hover:scale-105 font-medium transition-all duration-800 cursor-pointer"
            type="submit"
          >
            <HiOutlineArrowsRightLeft
              size={20}
              className="rounded-full w-full h-full"
            />
            <p>Swap</p>
          </button>
        </form>
      </div>
    </div>
  );
};
