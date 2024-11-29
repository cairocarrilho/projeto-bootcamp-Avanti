function layoutLogin({ children }) {
    return (
        <div className="h-screen w-screen !overflow-hidden">
            <div className="!overflow-hidden h-screen w-screen absolute z-0 pointer-events-none">
                <img src="../../public/GirlwithDog.png" alt="" className={"w-100w h-screen ml-8"}/>
            </div>

            <div className="relative flex flex-col  z-10 !pointer-events-auto">{children}</div>


        </div>


    );
}

export default layoutLogin;
