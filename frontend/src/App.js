import { useState } from "react";
import "./App.css";
import Content from "./Content";

const getSite = async (event, url, setData) => {
	if (event.key === "Enter") {
		const encodedURL = encodeURIComponent(url);
		const data = await (await fetch(`/api?url=${encodedURL}`)).text();
		//console.log(data);
		setData(data);
	}
};

function App() {
	const [url, setURL] = useState("");
	const [data, setData] = useState("");
	return (
		<div id="app">
			<header>
				<h1>Welcome the the proxy</h1>
			</header>
			<p>Enter a url in the input box. Then press enter.</p>
			<input
				type="text"
				value={url}
				onChange={(e) => setURL(e.target.value)}
				onKeyDown={(e) => getSite(e, url, setData)}
			></input>
      {data !== "" ? <Content data={data} />: ""} 
		</div>
	);
}

export default App;
