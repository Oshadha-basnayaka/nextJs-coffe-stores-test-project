
const Banner = (propes) => {
    return(
        <div className={"  gap-5  flex flex-col "} >
            <h1 className={" font-bold text-6xl  "}>
                <span className={"pt-5 font-sans"}>Coffe</span>
                <span className={"text-blue-700"}>  Connoisseur</span>
            </h1>
            <p className={"font-bold"}>Discover Your Local Coffe Shop !</p>
            <button onClick={propes.handleOnClick}
                    className={" border-black p-3 bg-blue-700 w-fit"}>{propes.buttonText}
            </button>
        </div>
    )

}
export default Banner;
