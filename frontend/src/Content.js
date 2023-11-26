import { useState } from "react";

const getSite = async (event, url, setData) => {
	if (event.key === "Enter") {
		const encodedURL = encodeURIComponent(url);
		const data = await (await fetch(`/api?url=${encodedURL}`)).text();
		console.log(data);
        setData(data);
	}
};

function Content() {
	const [url, setURL] = useState("");
	const [data, setData] = useState("");

	return (
		<>
			<input
				type="text"
				value={url}
				onChange={(e) => setURL(e.target.value)}
				onKeyDown={(e) => getSite(e, url, setData)}
			></input>
			<div style={{ border: "1px solid grey" }}>
                <h1>Webpage</h1>
				{data}
			</div>
		</>
	);
}

export default Content;
