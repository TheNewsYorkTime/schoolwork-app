import parse from "html-react-parser";

function Content(props) {
	return (
		<div id="content">
			<h1>Webpage</h1>
			{parse(props.data)}
		</div>
	);
}

export default Content;
