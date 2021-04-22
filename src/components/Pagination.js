import React from 'react';

const Pagination = ({ goToNextPage, goToPrevPage}) => {
    return (
        <div>
            {/* "goToPrevPage &&" is a way to use an if statement with an AND opeator in React
                (if there is a previous/next page go otherwise don't) 
            */}
            { goToPrevPage && <button onClick={goToPrevPage}> Previous </button> }
            { goToNextPage && <button onClick={goToNextPage}> Next </button> }
        </div>
    );
}

export default Pagination;
