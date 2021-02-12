import React, {useState, useRef} from 'react';

const Item = ({item}) => {
    const [copySuccess, setCopySuccess] = useState(false);

    const shortUrlRef = useRef(null);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shortUrlRef.current.textContent);
        setCopySuccess(true);

        setTimeout(() => {
            setCopySuccess(false);
          }, 5000)
   }

    return (
        <>
      <div className="result__item" key={item.id}>
        <div className="result__original">{item.original}</div>
        <div className="result__short" ref={shortUrlRef}>{item.short}</div>
         
        <button className ={`btn result__btn ${copySuccess ? 'copied' : ''}`}  onClick={copyToClipboard}>
        {copySuccess ? 'Copied!' : 'Copy'}
        </button>
    </div>
    </>
    )
}

export default Item;