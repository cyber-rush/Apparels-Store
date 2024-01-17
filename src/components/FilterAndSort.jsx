import { useState } from 'react';

const FilterAndSort = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState('newest');

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const handleSortChange = (event) => {
        setSelectedSortOption(event.target.value);
        // You can perform additional actions based on the selected sort option here
    };

    return (
        <div className="flex justify-between items-center p-4 border-b border-t my-8 ">
            <button
                onClick={toggleFilter}
                className="flex items-center  text-black p-2 rounded-md cursor-pointer "
            >
                {showFilter ? (
                    <>
                        <span className="mr-2">&lt;</span>
                        Hide Filter
                    </>
                ) : (
                    <>
                        <span className="mr-2">&gt;</span>
                        Show Filter
                    </>
                )}
            </button>

            <div className="border-l border-green-500 h-full"></div>



            <div className="flex items-center">
                <label htmlFor="sortOptions" className="mr-2 font-semibold">Sort by:</label>
                <select
                    id="sortOptions"
                    value={selectedSortOption}
                    onChange={handleSortChange}
                    className="border p-2 rounded-md"
                >
                    <option value="newest">Newest first</option>
                    <option value="popular">Popular</option>
                    <option value="highToLow">Price: High to Low</option>
                    <option value="lowToHigh">Price: Low to High</option>
                </select>
            </div>
        </div>
    );
};

export default FilterAndSort;
