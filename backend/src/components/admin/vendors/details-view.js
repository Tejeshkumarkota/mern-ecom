import vendorDeailsImg from "../../../assets/ecom/vendor-details-img.png";

const DetailsView = () => {

    return (                  
        <div className="row">
            <div className="col-12 mb-3">
                <img src={vendorDeailsImg} alt="images" className="img-fluid w-100 vendor-details-img"/>
            </div>
            <div className="col-12 mb-3">
                <div className="border-card">
                    <h5>Category</h5>
                    <p>Grocery</p>
                </div>
            </div>
            <div className="col-12 mb-3">
                <h5 className="modal-inner-title">Contacts  Address</h5>
            </div>
            <div className="col-md-6 col-12 mb-3">
                <div className="border-card">
                    <h5>Owner</h5>
                    <p>Muhamed Khaif</p>
                </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
                <div className="border-card">
                    <h5>Contact</h5>
                    <p>(+971) 52454 54753</p>
                </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
                <div className="border-card">
                    <h5>Manager</h5>
                    <p>Abdula</p>
                </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
                <div className="border-card">
                    <h5>Contact</h5>
                    <p>(+971) 72454 54753</p>
                </div>
            </div>
            <div className="col-md-12 col-12 mb-3">
                <div className="border-card">
                    <h5>Address</h5>
                    <p>5th street , Burj Kalifa, Abu dhabi , Dubai.</p>
                </div>
            </div>
            <div className="col-md-12 col-12 mb-3">
                <div className="border-card">
                    <h5>Mail Address </h5>
                    <p>Lycacinmeas@gmail.com</p>
                </div>
            </div>
            <div className="col-12 mb-3">
                <h5 className="modal-inner-title">License</h5>
            </div>
            <div className="col-md-12 col-12 mb-3">
                <div className="border-card">
                    <h5>Government License Number </h5>
                    <p>UAE 4525xd85</p>
                </div>
            </div>
            <div className="col-md-12 col-12 mb-3">
                <div className="border-card">
                    <h5>PAN Number</h5>
                    <p>UAE 4525xd85</p>
                </div>
            </div>
            <div className="col-12 mb-3">
                <h5 className="modal-inner-title">Subscription</h5>
            </div>
            <div className="col-md-6 col-12 mb-3">
                <div className="border-card">
                    <h5>Subscription type</h5>
                    <p>Premium</p>
                </div>
            </div>
            <div className="col-md-6 col-12 mb-3">
                <div className="border-card">
                    <h5>Subscription Duration</h5>
                    <p>6th Jan 22 - 5th Jan 23</p>
                </div>
            </div>
            <div className="col-12 mb-3">
                <h5 className="modal-inner-title">Subscription</h5>
            </div>
            <div className="col-md-12 col-12 mb-3">
                <div className="border-card bg-login p-3">
                    <div className="mb-3">
                        <label for="" className="form-label text-secondary">Login ID</label>
                        <input type="text" className="form-control bg-white" id="" placeholder="lycamovies"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetailsView;