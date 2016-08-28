function test() {
	var big = G('big');
	var mid = G('mid');
	var sm = G('sm');
	big.onclick = function() {
		console.log("我是大，我很大");
	}
	mid.onclick = function() {
		console.log("我是中，我很中");
	}
	sm.onclick = function() {
		console.log("我是小，我很小");
	}
	// big.addEventListener("click",function () {
	// 	console.log("哇哈哈我是大，我很大");
	// },true)
	// mid.addEventListener("click",function () {
	// 	console.log("哇哈哈我是中，我很中");
	// },true)
	// sm.addEventListener("click",function () {
	// 	console.log("哇哈哈我是小，我很小");
	// },true)

}

function G(sID) {
	return document.getElementById(sID);
}

addOnLoad(test);