(function ($) {
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
                    $(this).attr('data-toggle', 'tooltip');
                    $(this).attr('title', text.trim());
                    break;
                case 'collapse':
                    let content = $(this);
                    content.add('.dots').click(function (event) {
                        console.log($(this));
                    });
                    break;
            }
        }
    });
}($));