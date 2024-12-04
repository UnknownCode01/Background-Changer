import { useState } from "react";

function App() {
  const [color, setColor] = useState("#F9C0AB");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-xl">
          <button
          onClick={()=> setColor("#F9C0AB")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#F9C0AB" }}
          >
            Peach
          </button>
          <button
          onClick={()=> setColor("#F4E0AF")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#F4E0AF" }}
          >
            Yellow
          </button>
          <button
          onClick={()=> setColor("#A8CD89")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#A8CD89" }}
          >
            Light olive
          </button>
          <button
          onClick={()=> setColor("#A1EEBD")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#A1EEBD" }}
          >
            Light Green
          </button>
          <button
          onClick={()=> setColor("#355F2E")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#355F2E" }}
          >
            Dark Green
          </button>
          <button
          onClick={()=> setColor("#B1F0F7")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#B1F0F7" }}
          >
            Sky
          </button>
          <button
          onClick={()=> setColor("#81BFDA")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#81BFDA" }}
          >
            Blue
          </button>
          <button
          onClick={()=> setColor("#FFCCE1")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#FFCCE1" }}
          >
            Pink
          </button>
          <button
          onClick={()=> setColor("#E195AB")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#E195AB" }}
          >
            Dark Pink
          </button>
          
          <button
          onClick={()=> setColor("#C5D3E8")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#C5D3E8" }}
          >
            Light Grey
          </button>
          <button
          onClick={()=> setColor("#A6AEBF")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#A6AEBF" }}
          >
            Dark Grey
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
