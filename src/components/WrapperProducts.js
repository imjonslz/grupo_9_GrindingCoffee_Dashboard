import React from "react";
import TopBar from "./TopBar";
import ContentProducts from "./ContentProducts"
import Footer from "./Footer";
function WrapperProducts() {
	return (
		<React.Fragment>
			<div id="content-wrapper" className="d-flex flex-column">
				<div id="content">
					<TopBar />
					<ContentProducts />
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
}
export default WrapperProducts;
