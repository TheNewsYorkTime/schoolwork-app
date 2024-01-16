import parse from "html-react-parser";
import { Buffer } from 'buffer'

function Content(props) {
	const data = URL.createObjectURL(props.data);
	const size = {
		width: "90%",
		height: "100vw"
	};
	return (
		<div id="content">
			<h1>Webpage</h1>
            <iframe title="loadedpage" src={data} type={props.mime} style={size} sandbox></iframe>
			
		</div>
	);
}

export default Content;
