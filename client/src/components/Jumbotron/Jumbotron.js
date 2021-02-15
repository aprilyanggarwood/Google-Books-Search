import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron" style={{ backgroundColor: "palegoldenrod" }}>
        <h1 className="display-4 text-center myText">Google Books Search</h1>
        <br></br>
        <h2 className="text-center myText">
          Search for and save books of interest. Built with React.
        </h2>
      </div>
    </div>
  );
}

export default Jumbotron;

// import React from "react";

// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{
//         height: 300,
//         clear: "both",
//         paddingTop: 120,
//         textAlign: "center",
//       }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }

// export default Jumbotron;
