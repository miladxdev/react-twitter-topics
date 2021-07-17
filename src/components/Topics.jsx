import Header from "./Header"
import Topic from "./Topic"
import Footer from "./Footer"

function Topics() {

    return (
        <div className="topics-container">
            <Header title={"Topics to follow"} />

            <Topic title={"NBA"}  subtitle={"Basketball league"} />
            <Topic title={"Manchester United"}  subtitle={"Football team"} />
            <Topic title={"Spacex starship"} subtitle={"space"} />
            <Topic title={"Bitcoin"}  subtitle={"Currency"} />
            <Topic title={"Metallica"}  subtitle={"music band"} />
            <Topic title={"Tenis"} subtitle={"Sport"} />

            <Footer />
        </div>
    );
}

export default Topics