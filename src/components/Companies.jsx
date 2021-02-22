import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


const Companies = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://13.127.179.126:8080/company/findAll')
            .then(res => {
                console.log(res)
                setPosts(res.data)
                
            })
            .catch(err => {
                console.log(err)
            })
    })

	return(
		<>

			<section class="company-section">
		<div class="container">
			<div class="row">
				<div class="col-md-3">
					<div class="sun">
					<div class="moon">
						<p>Filter<span class="pull-right"><Link to="#">Clear All</Link></span></p>
					</div>
					<div class="earth">
						<button class="accor">Sector</button>
                     <div class="panel1">
                     	<form>
                     		<div class="form-group">
                         <p><input type="checkbox" name="" /><span>Education</span>s</p>
                         </div>
                         <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Pharmacy</span></p>
                         </div>
                         <div class="form-group">
                         <p><input type="checkbox" name="" /><span>IT Service</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Agriculture and Farming</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Biotechnology</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Consumer Goods</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Clothing</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Energy</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Healthcare</span></p>
                     </div>
                     </form>
                     </div>
                     <button class="accor">Stage of Company</button>
                     <div class="panel1">
                     	<form>
                     		<div class="form-group">
                         <p><input type="checkbox" name="" /><span>Education</span>s</p>
                         </div>
                         <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Pharmacy</span></p>
                         </div>
                         <div class="form-group">
                         <p><input type="checkbox" name="" /><span>IT Service</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Agriculture and Farming</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Biotechnology</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Consumer Goods</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Clothing</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Energy</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Healthcare</span></p>
                     </div>
                     </form>
                     </div>
                     <button class="accor">Series of Funding</button>
                     <div class="panel1">
                     	<form>
                     		<div class="form-group">
                         <p><input type="checkbox" name="" /><span>Education</span>s</p>
                         </div>
                         <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Pharmacy</span></p>
                         </div>
                         <div class="form-group">
                         <p><input type="checkbox" name="" /><span>IT Service</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Agriculture and Farming</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Biotechnology</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Consumer Goods</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Clothing</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Energy</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Healthcare</span></p>
                     </div>
                     </form>
                     </div>
                     <button class="accor">Valuation</button>
                     <div class="panel1">
                     	<form>
                     		<div class="form-group">
                         <p><input type="checkbox" name="" /><span>Education</span>s</p>
                         </div>
                         <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Pharmacy</span></p>
                         </div>
                         <div class="form-group">
                         <p><input type="checkbox" name="" /><span>IT Service</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Agriculture and Farming</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Biotechnology</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Consumer Goods</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Clothing</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Energy</span></p>
                     </div>
                     <div class="form-group">
                         <p><input type="checkbox" name="" /><span>Healthcare</span></p>
                     </div>
                     </form>
                     </div>
					</div>
					</div>
				</div>
				<div class="col-md-9">
					<form>
						<div class="">
						<div class="form-group">
					   <Link to="#" class="icon"><i class="fa fa-search"></i></Link><input type="text"placeholder="Search here..." name="" class="form-control control" />
					   </div>
					</div>
					</form>
					<div class="galaxy">
					<h4>Companies<span>(10)</span><span class="pull-right rome"> <Link to="#">Add Company Request</Link><select><option>Sort by: A -Z</option></select></span></h4>
					<div class="row">

						{ posts.map(posts => 

						<div class="col-md-4">
							<div class="box">
                                <div class="box1">
                                    <div class="row">
                                        <div class="col-md-2 col-xs-2">
                                            <div class="border1">
                                                <img src={'../assets/images/sunphar.png'} class="center-block" alt="sunphar" />
                                            </div>
                                        </div>
                                        <div class="col-md-8 col-xs-8">
                                            <p class="p2 text-bold" >{posts.title}</p>
                                            <p>{posts.c_category}</p>
                                            <p>{posts.c_id}</p>
                                        </div>
                                        <div class="col-md-2 col-xs-2">
                                            <p class="plus1"><Link to={"/Cdetail/" + (posts.id)}>
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/add.png`} alt="add" /></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="value1">
                                            <p>Valuation<span class="pull-right text-bold">{posts.valuation}</span></p>
                                            <p>Funding<span class="pull-right text-bold">{posts.funding}</span></p>
                                            <p>{posts.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
						</div>

						)}
						
						
			        </div>
				</div>
				</div>
				
			</div>
		</div>
	</section>



		</>
	);
}

export default Companies;