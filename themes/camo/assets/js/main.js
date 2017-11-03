(function($, Drupal) {

    // Functions calls
    //antiSpam();
    editMenuDropdown();
    pageSegmentScroller();
    closeUpdateMsg();
    mobileMenu();
    showMiniLogo();

    // Fancybox init
    $("a.fancybox").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600,
        'speedOut'		:	200,
        'loop'          :   true,
        'overlayShow'	:	false
    });

    // Toggles the node edit menu
    function editMenuDropdown() {
        $("#editBtn").on("click", function () {
            $("#nodeMenu").toggle();
        });
    }

    // Scroll to a page segment after clicking on a menu item
    function pageSegmentScroller() {
        $(".main-menu a").on("click", function () {
            var id = $(this).text().toLowerCase();

            $("html, body").animate({
                scrollTop: $("#" + id).offset().top
            }, 700);
        });
    }

    // Closes drupals status message for nodes
    function closeUpdateMsg() {
        $("div[role=contentinfo]").on("click", function () {
            $(this).remove();
        });
    }

    // opens/closes mobile menu
    function mobileMenu() {
        $("#menu-trigger").on("click", function () {
            if ($(this).hasClass("opened")) {
                setTimeout(
                    function()
                    {
                        $("body").removeClass("loading");
                    }, 310);
                $(".layout-container").removeClass("opened");
                $(this).removeClass("opened").addClass("closed");
                $("#side-menu").removeClass("opened");
                $("header").addClass("visible");
            } else {
                $(".layout-container").addClass("opened");
                $("#side-menu").addClass("opened");
                $("body").addClass("loading");
                $(this).removeClass("closed").addClass("opened");
                $("header").removeClass("visible");
            }
        });
    }

    function showMiniLogo() {
        $(document).on("scroll", function (e) {
            var $logoFull = $("#logo");
            var $logoMini = $("#mini-logo")
            var scrollPos = $(document).scrollTop();

            if (scrollPos > 400) {
                $logoFull.fadeOut(250);
                $logoMini.fadeIn(250);
            } else if (scrollPos < 400) {
                $logoFull.fadeIn(250);
                $logoMini.fadeOut(250);
            }
        });
    }

    function antiSpam() {
        var $captcha = $("#block-webform").find(".js-form-item-captcha-results input");
        var firstNumber = Math.floor((Math.random() * 20) + 1);
        var secondNumber = Math.floor((Math.random() * 10) + 1);
        var puzzle = firstNumber + " + " + secondNumber;
        var answer = firstNumber + secondNumber;
        var question = "<span>What is: <strong>" + puzzle + "</strong></span>";

        $(question).insertBefore($captcha);
    }

})(jQuery, Drupal);