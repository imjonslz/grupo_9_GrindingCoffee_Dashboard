import React from "react";
import TopBar from "./TopBar";
import ContentCategories from "./ContentCategories"
import Footer from "./Footer";
function WrapperCategories() {
	return (
		<React.Fragment>
			<div id="content-wrapper" className="d-flex flex-column">
				<div id="content">
					<TopBar />
					<ContentCategories />
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}
export default WrapperCategories;
