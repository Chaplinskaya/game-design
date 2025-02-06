
window.addEventListener('DOMContentLoaded', () => {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    //Table of content 

    const tableOfContent = document.querySelector('.table_of_content'),
        tableOfContentList = document.querySelectorAll('.table_of_content-block-list'),
        svgClick = document.querySelectorAll('.svg-click');

    //svgClick.addEventListener('click', () => {
    //tableOfContentList.classList.toggle('table_of_content-block-list-active');
    //svgClick.classList.toggle('svg-click-active');
    //});

    svgClick.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('svg-click-active');
            tableOfContentList.forEach(item => {
                item.classList.toggle('table_of_content-block-list-active');

            });
        });
    });
    //tableOfContentList.forEach(item => {
    //item.addEventListener('click', () => {
    //tableOfContentList.classList.toggle('table_of_content-block-list-active');
    //});
    //});


    //$('.svg-click').click(function () {
    //$('path').attr('d', 'M1.5 2L12 12L22 2');
    //});

    //Scroll

    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            const hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    //////Select

    $('.select').each(function () {
        const _this = $(this),
            selectOption = _this.find('option'),
            selectOptionLength = selectOption.length,

            duration = 450;

        _this.hide();
        _this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'new-select',
            text: _this.children('option:disabled').text()
        }).insertAfter(_this);

        const selectHead = _this.next('.new-select');
        $('<div>', {
            class: 'new-select__list'
        }).insertAfter(selectHead);

        const selectList = selectHead.next('.new-select__list');
        for (let i = 1; i < selectOptionLength; i++) {
            $('<div>', {
                class: 'new-select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }

        const selectItem = selectList.find('.new-select__item');
        selectList.slideUp(0);
        selectHead.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(duration);

                selectItem.on('click', function () {
                    let chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectHead.text($(this).find('span').text());

                    selectList.slideUp(duration);
                    selectHead.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(duration);
            }
        });
    });



});