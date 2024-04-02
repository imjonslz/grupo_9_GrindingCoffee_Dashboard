import React from "react";
import image from "../assets/images/gcLogo.svg";
import WrapperDashboard from "./WrapperDashboard"
import WrapperProducts from "./WrapperProducts";
import WrapperCategories from "./WrapperCategories";
import WrapperUsers from "./WrapperUsers";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";


function SideBar() {
	return (
		<React.Fragment>
			{/*<!-- Sidebar -->*/}
			<ul
				className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
				id="accordionSidebar"
			>
				{/*<!-- Sidebar - Brand -->*/}
				<a
					className="sidebar-brand d-flex align-items-center justify-content-center shadow"
					href="/"
				>
					<div className="wrapper-logo">
						<img
							className="w-100"
							src={image}
							alt="Digital House"
						/>
					</div>
				</a>

			

				{/*<!-- Nav Item - Dashboard -->*/}
				<li className="nav-item active">
					<Link className="nav-link" to="/">
						<i class="fa-solid fa-chart-simple"></i>
						<span>Dashboard - Grinding Coffee</span>
					</Link>
				</li>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider" />

				{/*<!-- Heading -->*/}
				<div className="sidebar-heading">Acciones</div>

				{/*<!-- Nav Item - Pages -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/Products">
						<i class="fa-solid fa-mug-saucer"></i>
						<span>Productos</span>
					</Link>
				</li>

				{/*<!-- Nav Item - Charts -->*/}
				<li className="nav-item">
					<Link className="nav-link" to="/Categories">
						<i class="fa-solid fa-layer-group"></i>
						<span>Categorias</span>
					</Link>
				</li>

				{/*<!-- Nav Item - Tables -->*/}
				<li className="nav-item nav-link">
					<Link className="nav-link" to="/Users">
						<i class="fa-solid fa-users"></i>
						<span>Usuarios</span>
					</Link>
				</li>
			</ul>
			
			<Switch>
				<Route exact path="/">
					<WrapperDashboard />
				</Route>
				<Route path="/Products">
					<WrapperProducts />
				</Route>
				<Route path="/Categories">
					<WrapperCategories />
				</Route>
				<Route path="/Users">
					<WrapperUsers />
				</Route>
				<Route component={NotFound} />
			</Switch>

		</React.Fragment>
	);
}
export default SideBar;
