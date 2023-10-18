import { useState } from "react";
import { DeleteVenueCall } from "../../api/DeleteVenue";
import { BsTrash } from "react-icons/bs";

export const ConfirmDelete = ({ canDelete, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const deleteVenue = async () => {
    try {
      const response = await DeleteVenueCall(id);
      console.log(response.status);
      if (response.ok) {
        canDelete(id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="relative flex justify-center items-center py-4">
      { isOpen ? (null) : (
        <button
        onClick={toggleModal}
        className="flex whitespace-nowrap items-center bg-holired border-2 border-holired text-black rounded-full px-2 py-1 my-2 hover:bg-black hover:text-holired transition-all duration-600 ease-in-out"
      >
        <div className="flex items-center group gap-2">
          <p className="hidden group-hover:flex font-semibold">delete listing</p>
          <BsTrash size={20} />
        </div>
      </button>
      )}
      {isOpen && (
        <div className="absolute top-5 left-5 flex flex-col p-5 bg-black border-2 border-holired rounded-xl gap-2">
          <div className="bg-black rounded-xl border-2 border-zinc-600 px-4 py-2 text-zinc-300 font-dm font-semibold">
            <h1>Are you sure you want to delete this venue?</h1>
          </div>
          <button
            type="submit"
            className="text-holired bg-zinc-800 border-2 border-holired hover:bg-holired hover:text-black px-8 py-2 font-dm font-bold rounded-full text-sm text-center transition-all duration-200"
            onClick={deleteVenue}
          >
            Confirm Delete
          </button>
        </div>
      )}
    </div>
  );
};
