import React from "react";
import ChartProducts from "./ChartProducts";

function ContentProducts() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 colorPrimary boldTitle">Productos</h1>
				</div>
				<ChartProducts />
			</div>
		</React.Fragment>
	);
}
export default ContentProducts;
