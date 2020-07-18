function searchYoutube()
{
    var key = document.getElementById("youtube").value;
    key=key.replace(/ /g,"+");
    var urlnew = "https://www.youtube.com/results?search_query="+key;
    window.location.assign(urlnew);
    // alert();
}

function enterKey(e) 
{
    if(event.key === 'Enter')
    {
        searchYoutube();
    }
}