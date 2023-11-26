import parse from "html-react-parser";

function Content(props) {
	return (
		<div style={{ border: "2px solid grey" }}>
			<h1>Webpage</h1>
			{parse(props.data)}
		</div>
	);
}

export default Content;
