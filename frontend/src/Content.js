import parse from "html-react-parser";

function Content(props) {
	return (
		<div id="content">
			<h1>Webpage</h1>
            <iframe title="loadedpage">{parse(props.data)}</iframe>
			
		</div>
	);
}

export default Content;
