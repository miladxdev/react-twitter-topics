import Button from "./Button"

function Topic({title, subtitle}) {
    return (
        <div class="wrap">
            <div className="topic">
                <div className="col-left">
                    <h3>{title}</h3>
                    <span>{subtitle}</span>
                </div>

                <div className="col-right">
                    <Button />
                    <span className="icon"><i class="fa fa-times"></i></span>
                </div>
            </div>
        </div>
    );
}

export default Topic