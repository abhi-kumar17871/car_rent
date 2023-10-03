import React from "react";
import { GoPeople } from "react-icons/go";
import { BsFuelPump, BsSpeedometer } from "react-icons/bs";
import { PiSteeringWheel } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
const Card = ({ value }) => {
  return (
    <div className="grid grid-cols-3 mx-20">
      {value.map((car) => {
        return (
          <div className="bg-blue-100 p-3 drop-shadow-lg rounded-lg m-2">
            <div className="w-full">
              <img
                src={car.images}
                className="rounded-lg w-full h-[20rem]"
                alt={car.name}
              />
            </div>
            <div className="flex justify-between py-2">
              <div className="text-xl font-semibold px-2">{car.name}</div>
              <div className="border border-green-500 border-dashed px-2 rounded-lg font-medium">
                {car.year}
              </div>
            </div>
            <div className="grid grid-cols-2 space-y-2">
              <div className="flex items-center font-medium">
                <GoPeople className="mx-2 text-sky-500 text-lg" />{" "}
                {car.capacity} People
              </div>
              <div className="flex items-center font-medium">
                <BsFuelPump className="mx-2 text-sky-500 text-lg" /> {car.fuel}
              </div>
              <div className="flex items-center font-medium">
                <BsSpeedometer className="mx-2 text-sky-500 text-lg" />{" "}
                {car.mileage}
              </div>
              <div className="flex items-center font-medium">
                <PiSteeringWheel className="mx-2 text-sky-500 text-lg" />{" "}
                {car.gear}
              </div>
            </div>
            <hr className="h-px my-4  border-0 bg-gray-300" />
            <div className="flex justify-between py-2">
              <div className="text-xl font-semibold px-2">
                <span className="text-2xl">{`$ ${car.rent}`}</span>
                <span className="font-normal text-sm">/month</span>
              </div>
              <div className="flex items-center">
                <button className="mx-2 p-1.5 text-sky-500 text-xl bg-blue-200 rounded-lg">
                  <AiOutlineHeart />
                </button>
                <button className="bg-sky-500 rounded-lg px-2 py-1 text-white font-semibold">
                  Rent now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
