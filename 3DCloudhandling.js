	$(document).ready(function () {
	    var entries = [];
	    $('*.title').each(function (index) {
	        var title = $(this).text().split(')')[0];
	        title = title.split('(')[0];
	        title = title.split(',')[0];
	        title = title.split('&')[0];
	        title = title.split(':')[0];
	        title = title.replace('"', '');
            // Insère une ancre pour etre plus tard utilisée pour le 3D Tag Cloud
	        $(`<anchor id="${title}"></anchor>`).insertBefore(this)
	        // var link = $(this).attr('href')
	        var anchor = `#${title}`
	        $('#summary-list ul').append(`<li href="${anchor}">${title}</li>`)

	        entries.push({
	            label: title,
	            url: anchor,
	            target: '_self'
	        })
	    })
	    console.log(entries)

	    var settings = {
	        entries: entries,
	        width: '100%',
	        height: '100%',
	        radius: '65%',
	        radiusMin: 75,
	        bgDraw: false,
	        bgColor: '#111',
	        opacityOver: 1.00,
	        opacityOut: 0.15,
	        opacitySpeed: 6,
	        fov: 800,
	        speed: 1,
	        fontFamily: 'Nunito Sans, Oswald, Arial, sans-serif',
	        fontSize: '18',
	        fontColor: '#00d900',
	        fontWeight: 'bold', //bold
	        fontStyle: 'normal', //italic 
	        fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
	        fontToUpperCase: true
	    };
	    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
	    $('#tag-cloud').svg3DTagCloud(settings);

	    $("#list-toggle").click(function () {
	        $(this).text(function (i, v) {
	            console.log(v);
	            if (v === 'Sphere') {
	                $('#tag-cloud, #tag-cloud svg').hide();
	                $('#summary-list').show();
	            } else if (v === 'Liste') {
	                $('#tag-cloud, #tag-cloud svg').show();
	                $('#summary-list').hide();
	            }
	            return v === 'Sphere' ? 'Liste' : 'Sphere'
	        })
	    })

	    $('#list-button').click(function () {
	        $("#list-toggle").toggle()
	        $('#tag-cloud, #tag-cloud svg').toggle()
	    })

	});