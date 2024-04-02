import React from "react";
import TopBar from "./TopBar";
import ContentNotFound from "./ContentNotFound";
import Footer from "./Footer";
function WrapperNotFound() {
	return (
		<React.Fragment>
			<div id="content-wrapper" className="d-flex flex-column">
				<div id="content">
					<TopBar />
					<ContentNotFound />
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}
export default WrapperNotFound;
