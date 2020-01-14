document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    var sum = document.getElementById('sum');

    $("tr").click(function(){
        $(this).toggleClass("selected");
        var price = $(this).find("span").text();
        if($(this).hasClass("selected")){
            // TO DO plus
        } else{
            // TO DO minus
        }
    });

    // function addRowHandlers() {
    //     var table = document.getElementById("table");
    //     var rows = table.getElementsByTagName("tr");
    //     for (i = 0; i < rows.length; i++) {
    //         var currentRow = table.rows[i];
    //         var createClickHandler = function(row) {
    //         return function() {
    //             var cell = row.getElementsByTagName("td")[0];
    //             var price = cell.getElementByTagName("span");
    //             var id = price.innerHTML;
    //             sum.innerHTML = sum.innerHTML + id;
    //           };
    //         };
    //         currentRow.onclick = createClickHandler(currentRow);
    //     }
    // }


})