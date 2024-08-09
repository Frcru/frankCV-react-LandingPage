import React from "react";

//Remember to specify breakpoints (sm,md,lg,xl,xxl) with the columns that you want to fill
const Card = () => {
    return (
        <div className="col-xl-6 col-xxl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="card mt-4 me-3" style={{ width: '100%', borderRadius: '0px' }}>
                <img src="https://placehold.it/500x325" className="img-fluid" alt="..." />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center fs-4 fw-bold">Card title</h5>
                    <p className="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo laborum quam iste veritatis itaque corrupti eum? Laboriosam, tenetur repellendus autem sit soluta placeat, sint earum eum suscipit nam ducimus perferendis.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default Card;