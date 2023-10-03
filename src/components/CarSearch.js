import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import car from "../assets/car.json";
import Card from "./card";

const CarSearch = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;

  const { page } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(parseInt(page, 10) || 1);
  }, [page]);

  const filteredCars = car.filter((val) => {
    if (search === "") {
      return true;
    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  });

  const totalPages = Math.ceil(filteredCars.length / carsPerPage);

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    navigate(`/page/${newPage}`);
  };

  return (
    <div className="m-4">
      <SearchBar setSearch={setSearch} setCurrentPage={setCurrentPage} />
      {filteredCars.length === 0 ? (
        <p className="text-center mt-4">No results found</p>
      ) : (
        <>
          <Card value={currentCars} />
          {filteredCars.length > carsPerPage && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default CarSearch;
