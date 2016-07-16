var mdext = (function(){
	const regex = {
			heading: /^#+\s*(.*)$/gm,
			line: /^(.*)$/gm
		};

	var mdext = {};

	// bonus function
	function formal(str){
		while (str.length > 0 && str[0] === ' ' || str[0] === '\t')
			str = str.substr(1, str.length - 1);
		
		while (str.length > 0 && str[str.length - 1] === ' ' || str[str.length - 1] === '\t')
			str = str.substr(0, str.length - 1);
		
		return str;
	}

	// get headings
	mdext.heading = function(data){
		// get all heading in data
		var heading_list = data.match(regex.heading);
		
		// replace # in heading to heading type
		for (var i = 0; i < heading_list.length; i++){
			var heading = heading_list[i];
			var counter = 0;
			
			while (heading.length > 0 && heading[0] === '#' || heading[0] === ' '){
				if (heading[0] === '#')
					counter++;
				heading = heading.substr(1, heading.length - 1);
			}
			
			heading_list[i] = {
				type: 'h' + counter,
				data: heading
			};
		}
		
		return heading_list;
	};

	mdext.metadata = function(data){
		// all line
		var line_list = data.match(regex.line);
		
		var flag = false;
		var rel = {};
		
		// each line
		for (var i = 0; i < line_list.length; i++){
			var line = formal(line_list[i]);
			
			// end block
			if (line == '-->'){
				flag = false;
			}
			
			// when line in meta block
			if (flag && line){
				var arr = line.split(':');
				
				var key = formal(arr[0] || ''),
					val = formal(arr[1] || '');
					
				rel[key] = val;
			}
			
			// start meta block
			if (line == '<!--metadata'){
				flag = true;
			}
				
		}
		
		return rel;
	};

	// check server-side or client-side
	try {
		module.exports = mdext;
	}catch(e){
		return mdext;
	}
})();