import Button from "./Button"

function Topic({props}) {
    return (
        <div class="wrap">
            <div className="topic">
                <div className="col-left">
                    <h3>National parks</h3>
                    <span>Outdoors</span>
                </div>

                <div className="col-right">
                    <Button />
                    <span className="icon">&times;</span>
                </div>
            </div>
        </div>
    );
}

export default Topic