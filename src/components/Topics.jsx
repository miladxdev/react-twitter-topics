import { useState } from "react";
import Header from "./Header"
import Topic from "./Topic"
import Footer from "./Footer"

function Topics() {
    const [topics, setTopics] = useState([
        {id: 0, title: "NBA", subtitle: "Basketball league"},
        {id: 1, title: "Manchester United", subtitle: "Football team"},
        {id: 2, title: "Spacex starship", subtitle: "space"},
        {id: 3, title: "Bitcoin", subtitle: "Currency"},
        {id: 4, title: "Metallica", subtitle: "music band"},
        {id: 5, title: "Tenis", subtitle: "Sport"}
    ]);

    function deleteTopic(id) {
        console.log("delete "+id);
        setTopics(topics.filter((topic) => topic.id !== id));
    }

    return (
        <div className="topics-container">
            <Header title={"Topics to follow"} />
            
            {topics.map((topic) => (
                <Topic title={topic.title}  subtitle={topic.subtitle} onDelete={() => {deleteTopic(topic.id)}} />
            ))}

            <Footer />
        </div>
    );
}

export default Topics