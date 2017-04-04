$(document).ready(function() {
    var $p = $("p");
    $p.each(function() {
        var data = {}
        var str = $(this).html();
        data.bodyText = highlight(str);
        $(this).html(data.bodyText);
    });
});
