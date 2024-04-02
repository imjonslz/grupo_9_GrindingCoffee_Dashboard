import React from "react";
import TopBar from "./TopBar";
import ContentUsers from "./ContentUsers";
import Footer from "./Footer";
function WrapperUsers() {
	return (
		<React.Fragment>
			<div id="content-wrapper" className="d-flex flex-column">
				<div id="content">
					<TopBar />
					<ContentUsers />
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}
export default WrapperUsers;
