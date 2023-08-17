import { MdDoubleArrow, MdPlayArrow } from "react-icons/md";

const Test = () => {
    return (
        <div className="flex mx-3 text-white ">
          <MdDoubleArrow
            style={{
              animation: "fadeInOut .5s ease-in-out infinite",
              color: "#45f882", // Green color
            }}
            className="w-12 h-12 right-7"
          />

          <MdDoubleArrow
            style={{
              animation: "fadeInOut2 .5s ease-in-out infinite",
              color: "black", // Green color
            }}
            className="w-12 h-12"
          />
          <style>
        {`
          @keyframes fadeInOut {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes fadeInOut2 {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
        </div>
    );
};

export default Test;