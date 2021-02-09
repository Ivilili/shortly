const Result = ({data, value, onSubmit, onChange}) => {
	return (
    <section className="result">
        <div className="result__container container">
        <form className="result__form" onSubmit={onSubmit}>
            <input type="url" placeholder="Shorten a link here..." aria-label="url"  value={value} onChange={onChange} autoFocus/>
            <button className="btn result__cta" value="submit">Shorten It!</button>
        </form>
        {data && data.map((item, index) => {
           return (
               <div className="result__item" key={index}>
                   <div className="result__original">{item.original}</div>
                   <div className="result__short">{item.short}</div>
                   <button className="btn result__btn">Copy</button>
               </div>
           )
        })}
        </div>
    </section>
	);
};

export default Result;