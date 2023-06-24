import React from "react";

const SortSection = () => {
    return (
        <div className="sort-section">
            <h3>Sort by</h3>
            <label for="sort" className="sort-label">Choose a car:</label>

            <select name="sort" id="sort" className="sort-selection">
                <option value="date-modified">Date-Modified</option>
                <option value="most-upvotes">Most-Upvotes</option>
            </select>
        </div>
    )
}

export default SortSection;