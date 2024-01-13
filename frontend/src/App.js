import { useState } from "react";
import "./App.css";
import Content from "./Content";

const getSite = async (event, url, setData, setMime) => {
	if (event.key === "Enter") {
		const encodedURL = encodeURIComponent(url);
		const response = await fetch(`/api?url=${encodedURL}`);
		const data = await response.blob();
		setMime(response.headers.get("content-type"));
		setData(data);
	}
};

function App() {
	const [url, setURL] = useState("");
	const [data, setData] = useState("");
	const [mime, setMime] = useState("text/html");
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
				onKeyDown={(e) => getSite(e, url, setData, setMime)}
			></input>
      		{data !== "" ? <Content data={data} mime={mime}/>: ""} 
		</div>
	);
}

export default App;
