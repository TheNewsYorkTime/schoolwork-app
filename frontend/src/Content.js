import parse from "html-react-parser";
import { Buffer } from 'buffer'

function Content(props) {
	return (
		<div id="content">
			<h1>Webpage</h1>
            <iframe title="loadedpage" src={"data:text/html;base64," + Buffer.from(props.data).toString('base64')}></iframe>
			
		</div>
	);
}

export default Content;
