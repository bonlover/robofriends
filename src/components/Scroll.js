import React from 'react';

const Scroll = (props) => {

	return (

		<div style={{ overflowY: 'scroll', border: '2px solid white', height: '100vh', borderRadius: '20px', marginTop: '20px'}} >

			{ props.children }

		</div>
	);
};

export default Scroll;