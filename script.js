$(function () {

    var menu_item_open = false;

    $(".main-item").click(function () {
        var id = this.id;
        var ul = id.replace('item-', '');

        if (menu_item_open)
        {

            $('.ul-subitem').css('display', 'none');

            $("#ul-"+ul).css('display', 'none');

            menu_item_open = !menu_item_open;
        }
        else{
            $('.ul-subitem').css('display', 'none');

            $("#ul-"+ul).css('display', 'block');

            menu_item_open = !menu_item_open;
        }

    });

    $("#general-search-icon").click(function () {

        $(this).css('display', 'none');

        $("#general-search-input").css("display", "inline-block");
    });
})