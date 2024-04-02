import React from "react";
import RowLastAdd from "./RowLastAdd";
import RowTotalData from "./RowTotalData";

function ContentDashboard() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Información General</h1>
				</div>
				<RowTotalData />
				<RowLastAdd />
			</div>
		</React.Fragment>
	);
}
export default ContentDashboard;
