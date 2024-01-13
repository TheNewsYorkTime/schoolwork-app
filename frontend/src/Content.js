import parse from "html-react-parser";
import { Buffer } from 'buffer'

function Content(props) {
	const data = URL.createObjectURL(props.data);
	const size = props.mime.match(/text/) ? {width: "90%", height: "100vw"} : {};
	return (
		<div id="content">
			<h1>Webpage</h1>
            <embed title="loadedpage" src={data} type={props.mime} style={size}></embed>
			
		</div>
	);
}

export default Content;
