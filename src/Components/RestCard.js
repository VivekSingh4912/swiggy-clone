import { Link } from "react-router-dom"

export default function RestCard({ restInfo }) {
  return (
    <Link to={"/city/delhi/" + restInfo?.info?.id}>
    <div className="hover:scale-105 duration-200 cursor-pointer">
      <img
        className="w-full h-48 object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          restInfo?.info?.cloudinaryImageId
        }
        alt=""
      />

      <div className="mt-2">
        <div className="font-bold text-lg">{restInfo?.info?.name}</div>

        <div className="flex items-center gap-2 mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="green"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M12 .587l3.668 7.568L24 9.748l-6 5.845L19.335 24 12 19.897 4.665 24 6 15.593 0 9.748l8.332-1.593z" />
          </svg>

          <span className="text-sm font-semibold">
            {restInfo?.info?.avgRating}
          </span>

          <span className="text-sm text-gray-700">
            {restInfo?.info?.sla?.slaString}
          </span>
        </div>

        <div className="text-gray-500 text-sm mt-1">
          {restInfo?.info?.cuisines?.join(", ")}
        </div>
      </div>
    </div>
    </Link>
  );
}