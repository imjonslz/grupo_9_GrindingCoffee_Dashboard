import React from "react";
import ContentRowLastAdd from "./RowLastAdd";
import ContentRowTotalData from "./RowTotalData";

function ContentCategories() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Categorias</h1>
				</div>
				<ContentRowTotalData />
				<ContentRowLastAdd />
			</div>
		</React.Fragment>
	);
}
export default ContentCategories;