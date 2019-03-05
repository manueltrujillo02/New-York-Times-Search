function getData() {
    var page = $("#number").val();
    var search = $("#term").val();
    var startYear = $("#startYear").val();
    var endYear =  $("#endYear").val();
    var facet = "20120101&end_date=20121231";
    var api = " Q5Yeb1oBZ6pnbU7G90WjebwgB8MOC2EF";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+search+"&api-key=" +
    api;
    if (page) {
        queryURL+="&page="+page;
    }
    if (startYear) {
        queryURL+="&begin_date="+startYear+"0101";
    }
    if (endYear) {
        queryURL+="&end_date="+endYear+"1231";
    }
//console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response1) {
        //console.log(response1);
        var results = response1.response.docs;
        for (var i=0;i<results.length;i++)  {
            //article name
            console.log(results[i].headline.main);
            //author
            console.log(results[i].byline.original);
            //section
            console.log(results[i].section_name);
            //year
            console.log(results[i].pub_date);
            //url
            console.log(results[i].web_url);
            var div = $("<div>");
            div.append("<p>"+results[i].headline.main+"</p>" );
            div.append("<p>"+results[i].byline.original+"</p>");
            div.append("<p>"+results[i].section_name+"</p>");
            div.append("<p>"+results[i].pub_date+"</p>");
            div.append("<a href='"+results[i].web_url+"'>"+results[i].web_url+"</a>");
            $("#divDisplay").append(div);
        }

    });
}
$("#search").on("click",getData);
