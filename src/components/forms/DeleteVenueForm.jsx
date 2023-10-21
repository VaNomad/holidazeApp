import { useState } from "react";
// import { navigate } from "react-router-dom";
import { DeleteVenueCall } from "../../api/DeleteVenue";
import { BsTrash } from "react-icons/bs";
import { Loader } from "../ui/loader/Loader";

export const ConfirmDelete = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [hasError, setHasError] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const deleteVenue = async () => {
    try {
      setIsLoading(true)
      const response = await DeleteVenueCall(id);
      console.log(response.status);
      if (response.ok) {
        setIsOpen(false);
        setIsSuccess(true)
        // data(id);
        setTimeout(() => {
          setIsLoading(true)
          window.location.reload();
        }, 3000);
      }
    } catch (error) {
      setHasError(true)
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  // useEffect(() => {
  //   if (data(id)) {
  //     setTimeout(() => {
  //       setIsOpen(false);
  //       navigate("/profile");
  //       window.location.reload();
  //     }, 2000);
  //   }
  // }, [data, id]);


  return (
    <div className="relative flex justify-center items-center">
      {isOpen ? null : (
        <button
          onClick={toggleModal}
          className="flex whitespace-nowrap items-center bg-holired border-2 border-holired text-black rounded-full px-2 py-1 my-2 hover:bg-black hover:text-holired transition-all duration-600 ease-in-out"
        >
          <div className="flex items-center group gap-2">
            <p className="hidden group-hover:flex font-semibold">
              delete listing
            </p>
            <BsTrash size={20} />
          </div>
        </button>
      )}
      {isOpen && (
        <div className="absolute top-5 left-5 flex flex-col p-5 bg-black border-2 border-holired rounded-xl gap-2">
          <div className="bg-black rounded-xl border-2 border-zinc-600 px-4 py-2 text-zinc-300 font-dm font-semibold">
            <h1>Seriously ?</h1>
          </div>
          <button
            type="submit"
            className="text-holired bg-zinc-800 border-2 border-holired hover:bg-holired hover:text-black px-8 py-2 font-dm font-bold rounded-full text-sm text-center transition-all duration-200"
            onClick={deleteVenue}
          >
            Delete
          </button>
          <button
            type="submit"
            className="text-holigreen bg-zinc-800 border-2 border-holigreen hover:bg-holigreen hover:text-black px-8 py-2 font-dm font-bold rounded-full text-sm text-center transition-all duration-200"
            onClick={toggleModal}
          >
            Cancel
          </button>
        </div>
      )}

      {/* errors */}
      <div className="flex justify-center m-5 text-center">
        {isSuccess && (
          <div className="border-2 border-lime-400 rounded-xl py-4 px-6 shadow-md shadow-lime-700">
            <p>Your Listing has been removed!</p>
            <p className="text-sm text-zinc-300 animate-pulse">
              It should be gone from your profile..
            </p>
          </div>
        )}
        {isLoading && <Loader />}
        {hasError && (
          <div className="flex justify-center m-5 text-center">
            <div className="border-2 border-red-400 rounded-xl py-4 px-6 shadow-md shadow-red-700">
              <p>{hasError}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
