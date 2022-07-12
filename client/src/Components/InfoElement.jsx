import React from "react";

function InfoElement({ name, valueElement }) {
  return (
    <div
      className={`px-10 flex items-center lg:justify-start lg:gap-80 py-8 justify-between  `}
    >
      <h1 className="text-gray-300 w-5">{name}:</h1>
      {name == "Photo" ? (
        <img className="w-12" src={`${valueElement}`} />
      ) : (
        <h1 className="text-ellipsis overflow-hidden w-32 whitespace-nowrap lg:w-full">{valueElement}</h1>
      )}
    </div>
  );
}

export default InfoElement;
