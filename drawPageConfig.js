module.exports = {
	url: 'http://localhost:8080',
	output: {
		filepath: '../../example/index.html',
		injectSelector: '#app'
	},
	headless: false,
	includeElement: function(node, draw) {
		if(node.id == 'weather') {
			return false;
		}
		// if(node.tagName.toLowerCase()=='img') {
		//   draw({
		//     width: 100,
		//     height: 8,
      //     left: 0,
      //     top: 0,
      //     zIndex: 99999999,
      //     background: '#F63515'
      //   });return false;
      // } 
	},
	init: function() {
		document.title = '123';
	}
}