import { useState, useEffect } from "react";
import Axios from 'axios';
import RegisterAdmin from "../components/registerAdmin";
import CreateProducts from "../components/createProducts";

function Admin() {

    return(
        <div>
            <div className="regLog-admin">
                <RegisterAdmin />
            </div>
            <div className="create-products">
                {/* <CreateProducts /> */}
            </div>
        </div>
    )
}

export default Admin;