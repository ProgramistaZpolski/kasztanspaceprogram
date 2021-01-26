"use strict";

let ksp = function (selector) {
	let el;

	let obj = {
		getEl(selector) {
			if (el) {
				return el;
			};
			return document.querySelector(selector);
		},
		embed(width = 550, height = 400) {
			el.innerHTML = `<embed src="https://cdn.jsdelivr.net/gh/programistazpolski/kasztanspaceprogram@master/gra.swf" 
				type="application/x-shockwave-flash" width="${width}" height="${height}">`;
			let ksp__ruffle = document.createElement('script');
			ksp__ruffle.src = "https://cdn.jsdelivr.net/gh/programistazpolski/kasztanspaceprogram/ruffle.js";
			document.body.append(ksp__ruffle);
			return this;
		},
		clear() {
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			};
		}
	};

	el = obj.getEl(selector);
	return obj;
};