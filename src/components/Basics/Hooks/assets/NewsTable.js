import React from 'react';

const NewsTable = ({uid,author, title, description}) =>{
    return(
        <div className="container border border-dark mt-3 mb-3 p-4" style={{textAlign:"left", borderRadius:"20px"}}>
            <p><strong>ID:</strong> {uid}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Description:</strong> {description}</p>
        </div>
    );
}

export default NewsTable;