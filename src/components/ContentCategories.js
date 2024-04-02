import React from "react";
import ChartCategories from "./ChartCategories";

function ContentCategories() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 colorPrimary boldTitle">Categorias</h1>
				</div>
				<ChartCategories />
			</div>
		</React.Fragment>
	);
}
export default ContentCategories;
