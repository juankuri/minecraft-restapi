var url = "http://localhost:3300/api/paintings"; 
function postPainting() { 
    console.log(url);

    var myName = $('#name').val();
    var myImageUrl = $('#image_url').val();     
    var myWidth = $('#width').val();
    var myHeight = $('#height').val();
    var myArtist = $('#artist').val();
    var myGameVersion = $('#game_version').val(); 

    var myPainting = {
	name: myName,
        image_url: myImageUrl, 
        width: myWidth,
        height: myHeight,
        artist: myArtist,
        game_version: myGameVersion 
    };

    console.log(myPainting);

    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(myPainting),
        success: function (data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.painting)); 
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
            $('#resultado').html("Error posting painting."); 
        }
    });
}

function getPaintings() {

    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            $('#resultado').html(JSON.stringify(data.paintings));
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error("Error:", textStatus, errorThrown);
            $('#resultado').html("Error getting paintings."); 
        }
    });
}
