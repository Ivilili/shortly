const Main = () => {
	return (
        <section className="main container">
        <div className="main__img"></div>
        <div className="main__container">
        <h1 className="main__title">More than just shorter links</h1>
        <p className="main__txt">
            Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <button className="btn main__cta">Get Started</button>
        </div>
        <form className="main__form">
            <input type="text" placeholder="Shorten a link here..." />
            <button className="btn form__cta">Shorten It!</button>
        </form>
    </section>
	);
};

export default Main;
