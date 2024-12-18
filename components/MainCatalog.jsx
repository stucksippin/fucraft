'use client'
import { Pagination } from "antd";
import FurnitureCard from "./FurnitureCard";
import { useState } from "react";

export default function MainCatalog({ furnitures }) {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentItems = furnitures.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <h2 className="title text-center mt-[5%] mb-[35px]">Наша продукция</h2>

            <div className="container flex flex-wrap gap-x-[40px] gap-y-[40px] justify-center">
                {currentItems.map((furniture) => {
                    const imagePath = `/image/furniture/${furniture.category}/${furniture.image}.png`;
                    return (
                        <FurnitureCard
                            key={furniture.id}
                            id={furniture.id}
                            image={imagePath}
                            name={furniture.name}
                            tags={furniture.tags}
                            price={furniture.price}
                        />
                    );
                })}
            </div>


            <div className="flex justify-center pagination-container text-center mt-4">
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={furnitures.length}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
}
