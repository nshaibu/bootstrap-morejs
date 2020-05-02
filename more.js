(function ($) {

    let bottomCaret = `<svg viewBox="0 0 32 32" class="icon icon-caret-bottom" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M24 11.305l-7.997 11.39L8 11.305z"/></svg>`;
    let topCaret = `<svg viewBox="0 0 32 32" class="icon icon-caret-top" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M8 20.695l7.997-11.39L24 20.695z"/></svg>`

    function toggle() {}

    $('.more-text').each(function () {
        let more_set = $(this).attr('data-more');
        let data_toggle = $(this).attr('data-toggle');
        let maxsize = parseInt($(this).attr('data-maxsize'));
        maxsize = maxsize? maxsize : 30;

        let text = $(this).text().trim();
        let visible_str = text.slice(0, maxsize-1);
        let hidden_str = text.slice(maxsize-1);

        if (more_set !== 'true') {
            if (text.length > maxsize)
                $(this).html(`${visible_str}<span class="dots">...</span><div class="more">${hidden_str}</div>`);

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
                    let dots = content.find('.dots');
                    content.add('.dots').click(function (event) {
                        console.log($(this));
                    });
                    content.find('.dots').click(function(event){});
                    break;
            }
        }
    });
}($));