import React from "react";
import ChartUsers from "./ChartUsers";

function ContentUsers() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 colorPrimary boldTitle">Usuarios</h1>
				</div>
				<ChartUsers />
			</div>
		</React.Fragment>
	);
}
export default ContentUsers;
