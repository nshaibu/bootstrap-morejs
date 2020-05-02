(function ($) {

    let bottomCaret = `<img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMjQgMTEuMzA1bC03Ljk5NyAxMS4zOUw4IDExLjMwNXoiLz48L3N2Zz4='/>`;
    let topCaret = `<img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNOCAyMC42OTVsNy45OTctMTEuMzlMMjQgMjAuNjk1eiIvPjwvc3ZnPg=='/>`;

    function toggle(content, caret) {}

    $('.more-text').each(function () {
        let more_set = $(this).attr('data-more');
        let data_toggle = $(this).attr('data-toggle');
        let maxsize = parseInt($(this).attr('data-maxsize'));

        maxsize = maxsize ? maxsize : 30;

        let text = $(this).text().trim();
        let visible_str = text.slice(0, maxsize-1);
        let hidden_str = text.slice(maxsize-1);

        if (more_set !== 'true') {
            if (text.length > maxsize)
                $(this).html(`${visible_str}<span class="dots">...</span><div style="display:none;">${hidden_str}</div>`);

            $(this).attr('data-more', true);

            data_toggle = (data_toggle)? data_toggle.toLowerCase() : '';
            switch (data_toggle) {
                case 'tooltip':
                    $(this).attr('title', text.trim());
                    $(this).tooltip({container: 'body', placement: 'auto'});
                    break;
                case 'popover':
                    $(this).attr('title', text.trim());
                    $(this).popover({
                        container: 'body',
                        trigger: 'hover focus',
                        placement: 'auto'
                    });
                    break;
                case 'collapse':
                    let content = $(this);
                    let truncatedTextCaret = content.find('.dots');
                    let moreText = content.find('.more');

                    let moreTextCaret = `<span class="more-dots ml-2" style="cursor:pointer">${topCaret}</span>`;

                    truncatedTextCaret.html(bottomCaret);
                    truncatedTextCaret.addClass('ml-2');
                    truncatedTextCaret.css("cursor", "pointer");

                    moreText.append(moreTextCaret);

                    truncatedTextCaret.click(function(event) {
                        console.log($(this))
                    });

                    moreTextCaret.click(function(event) {
                        
                    });
                    break;
            }
        }
    });
}($));