
import "../main.js";

const worker = new Worker("./example/worker.js", { type: "module" });

worker.onmessage = e => {
	console.log("from worker", e.data);
	worker.terminate();
};
worker.postMessage("test");