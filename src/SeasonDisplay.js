import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
	summer: {
		text: "Lets hit the beach",
		iconName: "sun"
	},
	winter: {
		text: "Brr...its cold",
		iconName: "snowflake"
	}
}

// determine what season it is
const getSeason = (lat, month) => {
	if(month > 2 && month < 9){
		return lat > 0 ? 'summer' : 'winter';
	}
	else {
		return lat > 0 ? 'winter' : 'summer';
	}
}


const SeasonDisplay = (props) => {

	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`${iconName}  massive icon icon-left`}></i>
			<h1>{text}</h1>
			<i className={`${iconName} massive icon icon-right`}></i>
		</div>
	)
}


export default SeasonDisplay;
