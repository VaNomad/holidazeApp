import { useState } from "react";
import { useForm } from "react-hook-form"

export const AvatarModal = ({ isOpen, closeModal, children }) => {
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

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(handleUpdateAvatar)}>
          {children}
          <input
            className="h-14 rounded-md p-3 bg-zinc-700"
            {...register("avatar", {
              required: "An avatar image is required",
              pattern: {
                value:
                  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)$/,
                message: "Avatar must be a valid url",
              },
            })}
            placeholder="Avatar"
            onBlur={() => {
              trigger("avatar");
            }}
          />
          {errors.avatar && (
            <p className="text-red-500">{errors.avatar.message}</p>
          )}
          <input
            className="h-16 rounded-full bg-zinc-800 border border-holiblue hover:bg-holiblue hover:text-black hover:scale-105 uppercase font-medium tracking-widest font-dm text-xl transition-all duration-800 cursor-pointer"
            type="submit"
            value="Update Avatar"
            onClick={closeModal}
          />
          {urlError && <p className="text-red-500">{urlError}</p>}
        </form>
      </div>
    </div>
  );
}
