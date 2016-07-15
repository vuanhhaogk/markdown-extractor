const regex = {
		headings: /^#+\s*(.*)$/gm,
		metadata: /<!--metadata(.|\n)+?-->/gm
	};

var mdext = {};

// get headings
mdext.getHeadings = (data) => {
	// get all heading in data
	var heading_list = data.match(regex.headings);
	
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

// check server-side or client-side
if (module && module.exports)
	module.exports = mdext;