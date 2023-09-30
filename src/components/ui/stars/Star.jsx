// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";
// import { AiTwotoneStar } from "react-icons/ai";

// export const Star = ({ stars, rating }) => {
//   const starRating = Array.from({ length: 5 }, (elem, index) => {
//     let number = index + 0.5;

//     return (
//       <span key={index}>
//         {stars >= index + 1 ? (
//           <FaStar className="icon" />
//         ) : stars >= numbers ? (
//           <FaStarHalfAlt className="icon" />
//         ) : (
//           <AiOutlineStar className="icon" />
//         )}
//       </span>
//     );
//   });

//   return (
//     <div>
//       {starRating}
//       <p>{rating}</p>
//     </div>
//   )
// };

// export const Star = () => {
//   return (
//     <div className="mb-2 mt-2.5 flex items-center">
//       <AiTwotoneStar className="text-yellow-400" />
//       <span className="ml-3 mr-2 rounded-full px-2 py-0.5 text-xs text-white border border-[#FCB5FF]">
//         {rating ? (
//           <p>{rating}</p>
//         ) : (
//           <p className="text-[8px] font-dm uppercase">No rating</p>
//         )}
//       </span>
//     </div>
//   );
// }
