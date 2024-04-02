import React from "react";
import TopBar from "./TopBar";
import ContentDashboard from "./ContentDashboard"
import Footer from "./Footer";
function WrapperDashboard() {
	return (
		<React.Fragment>
			<div id="content-wrapper" className="d-flex flex-column">
				<div id="content">
					<TopBar />
					<ContentDashboard />
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}
export default WrapperDashboard;
