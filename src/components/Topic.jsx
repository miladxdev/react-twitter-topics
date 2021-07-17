import { useState } from "react";
import Button from "./Button"

function Topic({title, subtitle, onDelete}) {
    const [btnText, setBtnText] = useState("Follow");

    function follow() {
        if (btnText !== "Follow") {
            setBtnText("Follow");
        } else {
            setBtnText("Following");
        }
    }

    return (
        <div className="wrap">
            <div className="topic">
                <div className="col-left">
                    <h3>{title}</h3>
                    <span>{subtitle}</span>
                </div>

                <div className="col-right">
                    <Button onFollow={() => follow()} text={btnText}/>
                    <span className="icon" onClick={onDelete}><i className="fa fa-times"></i></span>
                </div>
            </div>
        </div>
    );
}

export default Topic