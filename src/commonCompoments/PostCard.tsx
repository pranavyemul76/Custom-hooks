import { Link } from "react-router-dom";
import image from "/usedebounce.gif";
type PostCardProps = {
  post: { title: string; url: string };
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="!z-5 relative  flex-col rounded-[20px] max-w-[500px]  bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex w-full p-4 3xl:p-![18px] undefined">
      <div className="w-full">
        <Link to={post.url}>
          <div className="relative w-full">
            <img
              src={image}
              className="mb-3 aspect-video w-full rounded-xl 3xl:h-full 3xl:w-full"
              alt=""
            />
            <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
              <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </Link>
        <div className=" flex items-center justify-between px-1 md:items-start">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700"> {post.title} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
