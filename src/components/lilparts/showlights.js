import React from "react";

function Showlights() {
  return (
    <div>
      {[1, 2].map((_, index) => (
        <div
          key={index}
          className="container lightshow svelte-cctgkx !max-w-none"
          style={{ opacity: 1 }}
        >
          <div
            className="light_container svelte-cctgkx"
            data-svelte-h="svelte-1beh21y"
          >
            {["purple", "aqua", "lime", "blue", "pink"].map(
              (color, colorIndex) => (
                <React.Fragment key={colorIndex}>
                  <Lamp color={color} />
                  <Lamp color={color} odd={true} />
                </React.Fragment>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function Lamp({ color, odd = false }) {
  return (
    <div className={`lamp ${color}${odd ? " odd" : ""} svelte-cctgkx `}>
      <div className="lamp_foot svelte-cctgkx"></div>
      <div className="lamp_body svelte-cctgkx">
        <div className="flame svelte-cctgkx"></div>
        <div className="light svelte-cctgkx" style={{ opacity: 0 }}></div>
        <div className="glare svelte-cctgkx"></div>
      </div>
    </div>
  );
}

export default Showlights;
