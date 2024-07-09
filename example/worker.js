
import "../worker.js";

addEventListener("message", e => {
	if(e.data == "test") postMessage("ok");
});
