import Navigation from "../routes/Navigation";

const Home = ({setUser}) => {
    return (
        <>
            <h1>Home</h1>
            <Navigation setUser = {setUser} />
        </>
    );
}

export default Home;