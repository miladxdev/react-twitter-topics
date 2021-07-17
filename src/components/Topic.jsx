import { useState } from "react";
import Button from "./Button"

function Topic({title, subtitle}) {
    const [btnText, setBtnText] = useState("Follow");

    function follow() {
        console.log("follow");
        if (btnText !== "Follow") {
            setBtnText("Follow");
        } else {
            setBtnText("Following");
        }
    }
    
    return (
        <div class="wrap">
            <div className="topic">
                <div className="col-left">
                    <h3>{title}</h3>
                    <span>{subtitle}</span>
                </div>

                <div className="col-right">
                    <Button onFollow={() => follow()} text={btnText}/>
                    <span className="icon"><i class="fa fa-times"></i></span>
                </div>
            </div>
        </div>
    );
}

export default Topic