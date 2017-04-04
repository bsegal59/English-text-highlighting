;(function(global) {

	var PREFIX = 'hl-';

	var GRAMMAR = {
		"in-quotes": "(\"[^\"].*?\")",
		"in-parentheses": "(\\(.*\\))",
		//"in-single-quotes": "('[^\'].*?')",
		"number": "(\\d+(?:\\.\\d+)?)",
		"period": "(\\.)",
		"comma": "(,)",
		"semicolon": "(;)",
		"question-mark": "(\\?)",
		"exclamation-point": "(!)",
		"dash": "(--)",
	};

	function highlight(text) {

		var result = text;

		var keys = Object.keys(GRAMMAR);

		for (key in GRAMMAR) {
			var regexp;
			var str = GRAMMAR[key];
			var flags = 'g';
			regexp = new RegExp(str, flags);
			var openTag = '<span class="' + PREFIX + key + '">';
			var closeTag = '</span>';
			result = result.replace(regexp, openTag + '$1' + closeTag);

		}

		return result;

	}

	if (global.module && module.exports)
		module.exports = highlight;
	else
		global.highlight = highlight;

})(this);
