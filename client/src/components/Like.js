import React, { Component } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { fasHear } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Like extends Component {
state = { liked: false };
toggle = () => {
	let localLiked = this.state.liked;

	// Toggle the state variable liked
	localLiked = !localLiked;
	this.setState({ liked: localLiked });
};
render() {
	return (
	<div  id="likeBtnDiv" className="container">
		<center>
		<p>Love this eVenture? Click the heart!</p>
		<div id="likeBtn"
			className="container"
			style={{ border: "1px solid black", width: "15%" }}
			onClick={() => this.toggle()}
		>
			{this.state.liked === false ? (
			<img class="likeBtn" src="/images/8.png"></img>
			) : (
			<img class="likeBtn" src="/images/7.png"></img>
			)}
		</div>
		</center>
	</div>
	);
}
}

export default Like;
