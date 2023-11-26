function Content(props) {
    console.log(props.data);
	return (
			<div style={{ border: "1px solid grey" }}>
                <h1>Webpage</h1>
				{props.data}
			</div>
	);
}

export default Content;
