import { useState } from "react";
import { useForm } from "react-hook-form"
import { FiUpload } from "react-icons/fi";
import { UpdateAvatar } from "../../../api/UpdateAvatar";

export const ChangeAvatarModal = ({ isOpen, closeModal }) => {
  const [urlError, setUrlError] = useState(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  if (!isOpen) {
    return null
  }  

  const handleUpdateAvatar = async (data) => {
    try {
      const response = await UpdateAvatar(data);
      console.log(response);
      console.log(data);
      console.log(UpdateAvatar);
    } catch (error) {
      setUrlError("SignUp failed. Check added credentials");
    }
  };
  
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(handleUpdateAvatar, handleOverlayClick)}>
          <input
            className="relative h-14 rounded-full p-3 bg-zinc-700 pe-[40px]" 
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
            className="absolute right-0 bottom-[6rem] flex justify-center items-center h-[4rem] w-[4rem] rounded-full  border bg-holiblue text-black hover:scale-105 uppercase font-medium tracking-widest font-dm text-sm transition-all duration-800 cursor-pointer"
            type="submit"
            onClick={closeModal}
          ><FiUpload size={10} className="rounded-full w-full h-full p-3" /></button>
          {urlError && <p className="text-red-500">{urlError}</p>}
        </form>
      </div>
    </div>
  );
}
