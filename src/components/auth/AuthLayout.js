import React, { Fragment } from "react";
const AuthLayout = ({
    children,
}) => {
    return (
        <Fragment>
    <div class="modal-body auth-modal">
       <div class="row modal-center-row">
       	<div class="col-md-6">
       		<div class="modalleft">
       			<img src={`${process.env.PUBLIC_URL}/assets/images/modalimg.png`} class="center-block" alt="modalimg" />
       			<h4 class="text-center text-bold">Your data 100% secure <br class="hidden-xs"/> with us</h4>
       			<p class="text-center ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
       		</div>
       	</div>
       	<div class="col-md-6">
       		<div class="modalright auth-form">
       			<img src={`${process.env.PUBLIC_URL}/assets/images/modallogo.png`} alt="modallogo" />
        {children}
        </div>
       	</div>

       </div>
      </div>  
      </Fragment>
    );
};
export default AuthLayout;