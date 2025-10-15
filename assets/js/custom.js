(function ($) {
  "use strict";

  // Navbar Fixed
  function navbarFixed() {
    if ($(".sticky_nav").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        $(".sticky_nav").toggleClass("navbar_fixed", scroll > 0);
      });
    }
  }
  navbarFixed();

  // Menu JavaScript
  function Menu_js() {
    if ($(".submenu").length) {
      $(".submenu > .dropdown-toggle").click(function () {
        var location = $(this).attr("href");
        window.location.href = location;
        return false;
      });
    }
  }
  Menu_js();

  // Mobile Dropdown Menu
  function menu_dropdown() {
    if ($(window).width() < 992) {
      $(".menu > li .mobile_dropdown_icon").on("click", function (event) {
        event.preventDefault();
        $(this).parent().find(".dropdown-menu").first().slideToggle(700);
        $(this).parent().siblings().find(".dropdown-menu").slideUp(700);
      });
    }
  }
  menu_dropdown();

  // Background Color and Image
  $("[data-bg-color]").each(function () {
    var bg_color = $(this).data("bg-color");
    $(this).css("background-color", bg_color);
  });

  $("[data-bg-image]").each(function () {
    var bg = $(this).data("bg-image");
    $(this).css("background", `no-repeat center 0/cover url(${bg})`);
  });

  // Slick Sliders
  if ($(".testimonial_slider_one").length) {
    $(".testimonial_slider_one").slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      speed: 1000,
      dots: false,
      arrows: true,
      prevArrow: ".prev",
      nextArrow: ".next",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".testimonial_slider_two").length) {
    $(".testimonial_slider_two").slick({
      autoplay: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "200px",
      speed: 1000,
      dots: false,
      arrows: true,
      prevArrow: ".prevs",
      nextArrow: ".nexts",
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "200px",
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "30px",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  if ($(".client_logo_slider").length) {
    $(".client_logo_slider").slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 4000,
      cssEase: "linear",
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  }

  if ($(".why_institutions_slider").length) {
    $(".why_institutions_slider").slick({
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: "60px",
      dots: false,
      arrows: true,
      infinite: true,
      appendArrows: ".why_institutions_nav",
      prevArrow:
        '<button type="button" class="slick-prev" aria-label="Previous"><i class="ti-arrow-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next" aria-label="Next"><i class="ti-arrow-right"></i></button>',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
            centerMode: true,
            centerPadding: "120px",
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  // Counter Up
  if ($(".counter").length) {
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
  }

  // Marquee Animation
  if ($(".marquee").length) {
    const Increment = 1; // Amount to move per tick...
    const LoopDelay = 500 / 30; // How fast ticks happen...
    let Loop;

    function DestroyLoop() {
      clearInterval(Loop);
    }

    function CreateLoop() {
      Loop = setInterval(function () {
        const FirstSlide = $(".marquee .slide:first-child");
        const FirstMargin = parseInt(FirstSlide.css("margin-left")) - Increment;
        FirstSlide.css("margin-left", FirstMargin);

        if (Math.abs(FirstMargin) >= FirstSlide.outerWidth()) {
          FirstSlide.css("margin-left", 0).appendTo($(".marquee"));
        }
      }, LoopDelay);
    }

    $(".marquee").on("mouseenter", DestroyLoop).on("mouseleave", CreateLoop);
    CreateLoop();
  }

  // Accordion
  $(".saas_accordion_item").each(function () {
    var $accordion = $(".saas_accordion_item");
    if ($accordion.length > 0) {
      $(".saas_accordion_item .accordion-item").first().addClass("is-active");
      $accordion.find(".accordion-item").on("click", function () {
        $(this).siblings(".accordion-item").removeClass("is-active");
        $(this).toggleClass("is-active");
      });
    }
  });

  // Nice Select
  if ($(".select").length > 0) {
    $(".select").niceSelect();
  }

  // Blog Isotope
  function blogMasonry() {
    if ($("#blog_masonry").length) {
      $("#blog_masonry").isotope({
        layoutMode: "masonry",
        itemSelector: ".col-lg-4",
      });
    }
  }
  blogMasonry();

  /*-------------------------------------------------------------------------------
	  popup js
	-------------------------------------------------------------------------------*/
  function popupGallery() {
    if ($(".popup-youtube").length) {
      $(".popup-youtube").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: "mfp-with-zoom mfp-img-mobile",
      });
    }
  }
  popupGallery();

  // Portfolio Isotope
  function portfolioMasonry() {
    var portfolio = $("#work-portfolio");
    if (portfolio.length) {
      portfolio.imagesLoaded(function () {
        portfolio.isotope({
          layoutMode: "masonry",
          filter: "*",
          animationOptions: {
            duration: 1000,
          },
          transitionDuration: "0.5s",
          masonry: {},
        });

        $("#portfolio_filter div").on("click", function () {
          $("#portfolio_filter div").removeClass("active");
          $(this).addClass("active");

          var selector = $(this).attr("data-filter");
          portfolio.isotope({
            filter: selector,
            animationOptions: {
              animationDuration: 750,
              easing: "linear",
              queue: false,
            },
          });
          return false;
        });
      });
    }
  }
  portfolioMasonry();

  // Title Animation with GSAP

  // Tab Functionality with Progress Bar
  $(document).ready(function () {
    function changeTab(tabJs, index) {
      tabJs
        .closest(".promo_tab_box .nav")
        .find("li .nav-link")
        .removeClass("active");
      tabJs.addClass("active");

      var target = tabJs.attr("data-bs-target");
      $(target)
        .addClass("active show")
        .siblings(".tab-pane")
        .removeClass("active show");

      $(".progress-bar").not(tabJs.find(".progress-bar")).stop().width(0);
      updateProgressBar(tabJs.find(".progress-bar"), 5000);
    }

    function updateProgressBar(progressBar, duration) {
      progressBar
        .stop()
        .width(0)
        .animate({ width: "100%" }, duration, "linear");
    }

    var tabJs = $(".promo_tab_box .nav li .nav-link");
    var firstTab = tabJs.first();
    changeTab(firstTab, tabJs.index(firstTab));
    updateProgressBar(firstTab.find(".progress-bar"), 5000);

    tabJs.on("click", function (e) {
      e.preventDefault();
      changeTab($(this), tabJs.index($(this)));
      return false;
    });

    var currentIndex = 0;
    var intervalDuration = 5000;

    function autoCycleTabs() {
      var nextIndex = (currentIndex + 1) % tabJs.length;
      var activeTab = tabJs.eq(nextIndex);
      changeTab(activeTab, nextIndex);
      currentIndex = nextIndex;
    }

    var tabCycle = setInterval(autoCycleTabs, intervalDuration);

    $(".promo_tab_box .nav li .nav-link").hover(
      function () {
        clearInterval(tabCycle);
        $(".progress-bar").stop();
      },
      function () {
        tabCycle = setInterval(autoCycleTabs, intervalDuration);
        updateProgressBar(
          $(".nav-link.active .progress-bar"),
          intervalDuration
        );
      }
    );
  });

  // Features Scroll Animation
  if ($(".features_animation").length) {
    $(".features_animation .feature_item_inner").each(function (index) {
      $(this).css("top", 50 + index * 15 + "px");
    });

    const cards = gsap.utils.toArray(".feature_item_inner");
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          end: "top top+=40",
          scrub: true,
          markers: false,
          invalidateOnRefresh: true,
        },
        ease: "none",
        scale: () => 1 - (cards.length - index) * 0.025,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        pin: true,
        pinSpacing: false,
        markers: false,
        id: "pin",
        end: "max",
        invalidateOnRefresh: true,
      });
    });
  }

  // WOW.js Scroll Animations
  function bodyScrollAnimation() {
    var scrollAnimate = $("body").data("scroll-animation");
    if (scrollAnimate) {
      new WOW().init();
    }
  }
  bodyScrollAnimation();

  // Preloader

  function loader() {
    $(window).on("load", function () {
      // Animate loader off screen
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }

  loader();

  document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("institutionsHeroTrack");
    if (!track) return;

    const cards = Array.from(track.querySelectorAll(".institutions-hero-card"));
    const prevButton = document.getElementById("institutionsHeroPrev");
    const nextButton = document.getElementById("institutionsHeroNext");

    if (cards.length === 0 || !prevButton || !nextButton) return;

    let activeIndex = cards.findIndex((card) => card.classList.contains("is-active"));
    if (activeIndex < 0) {
      activeIndex = 0;
    }

    let touchStartX = null;

    const updateAccessibility = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      cards.forEach((card, index) => {
        const isActive = index === activeIndex;
        const isHidden = card.classList.contains("is-hidden");

        if (isMobile) {
          card.setAttribute("aria-hidden", isActive ? "false" : "true");
          card.tabIndex = isActive ? 0 : -1;
        } else {
          card.setAttribute("aria-hidden", isHidden ? "true" : "false");
          card.tabIndex = isHidden ? -1 : 0;
        }
      });
    };

    const applyPositions = () => {
      const leftIndex = (activeIndex + cards.length - 1) % cards.length;
      const rightIndex = (activeIndex + 1) % cards.length;

      cards.forEach((card, index) => {
        card.classList.remove("is-left", "is-center", "is-right", "is-hidden", "is-active", "is-primary");

        if (index === activeIndex) {
          card.classList.add("is-center", "is-active", "is-primary");
        } else if (index === leftIndex) {
          card.classList.add("is-left");
        } else if (index === rightIndex) {
          card.classList.add("is-right");
        } else {
          card.classList.add("is-hidden");
        }
      });

      updateAccessibility();
    };

    const setActiveIndex = (index) => {
      activeIndex = ((index % cards.length) + cards.length) % cards.length;
      applyPositions();
    };

    const handleMove = (delta) => {
      setActiveIndex(activeIndex + delta);
    };

    prevButton.addEventListener("click", () => handleMove(-1));
    nextButton.addEventListener("click", () => handleMove(1));

    cards.forEach((card, index) => {
      card.addEventListener("focus", () => {
        setActiveIndex(index);
      });
    });

    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handleMove(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleMove(1);
      }
    });

    track.addEventListener("touchstart", (event) => {
      touchStartX = event.touches[0]?.clientX ?? null;
    });

    track.addEventListener("touchend", (event) => {
      if (touchStartX === null) return;
      const deltaX = event.changedTouches[0]?.clientX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        handleMove(deltaX < 0 ? 1 : -1);
      }
      touchStartX = null;
    });

    window.addEventListener("resize", applyPositions);

    applyPositions();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("tokenizedRwaTrack");
    if (!track) return;

    const prevButton = document.getElementById("tokenizedRwaPrev");
    const nextButton = document.getElementById("tokenizedRwaNext");

    if (!prevButton || !nextButton) return;

    let isAnimating = false;
    let touchStartX = null;
    let pendingFrame = null;
    let activeTransitionCleanup = null;

    const getGapValue = () => {
      const style = window.getComputedStyle(track);
      const gap = parseFloat(style.columnGap || style.gap || "0");
      return Number.isNaN(gap) ? 0 : gap;
    };

    const getStepDistance = () => {
      const firstCard = track.querySelector(".token-rwa-card");
      if (!firstCard) return 0;
      return firstCard.getBoundingClientRect().width + getGapValue();
    };

    const translateValue = (value) => `translate3d(${value}px, 0, 0)`;

    const clearTransitionListeners = () => {
      if (typeof activeTransitionCleanup === "function") {
        activeTransitionCleanup();
        activeTransitionCleanup = null;
      }
    };

    const clearPendingFrame = () => {
      if (pendingFrame !== null) {
        cancelAnimationFrame(pendingFrame);
        pendingFrame = null;
      }
    };

    const resetTrack = () => {
      clearPendingFrame();
      clearTransitionListeners();
      track.style.transition = "none";
      track.style.transform = translateValue(0);
      isAnimating = false;
    };

    const startTransition = (from, to, { onFinish, onCancel } = {}) => {
      clearTransitionListeners();
      clearPendingFrame();

      const handleTransitionEnd = (event) => {
        if (event.type === "transitionend" && event.propertyName !== "transform") {
          return;
        }

        clearTransitionListeners();

        if (event.type === "transitioncancel") {
          if (typeof onCancel === "function") {
            onCancel();
          } else {
            resetTrack();
          }
          return;
        }

        if (typeof onFinish === "function") {
          onFinish();
        }
      };

      track.addEventListener("transitionend", handleTransitionEnd);
      track.addEventListener("transitioncancel", handleTransitionEnd);

      activeTransitionCleanup = () => {
        track.removeEventListener("transitionend", handleTransitionEnd);
        track.removeEventListener("transitioncancel", handleTransitionEnd);
      };

      track.style.transition = "none";
      track.style.transform = translateValue(from);
      track.getBoundingClientRect();

      pendingFrame = requestAnimationFrame(() => {
        pendingFrame = null;
        track.style.transition = `transform 520ms cubic-bezier(0.45, 0, 0.55, 1)`;
        track.style.transform = translateValue(to);
      });
    };

    const shift = (direction) => {
      if (isAnimating) return;
      const distance = getStepDistance();
      if (!distance) return;

      isAnimating = true;

      if (direction === -1) {
        const lastCard = track.lastElementChild;
        if (!lastCard) {
          resetTrack();
          return;
        }

      track.insertBefore(lastCard, track.firstElementChild);

      startTransition(-distance, 0, {
          onFinish: () => {
            resetTrack();
          },
          onCancel: () => {
            const insertedCard = track.firstElementChild;
            if (insertedCard) {
              track.appendChild(insertedCard);
            }
            resetTrack();
          },
        });
        return;
      }

      const firstCard = track.firstElementChild;
      if (!firstCard) {
        resetTrack();
        return;
      }

      startTransition(0, -distance, {
        onFinish: () => {
          track.style.transition = "none";
          track.appendChild(firstCard);
          track.style.transform = translateValue(0);
          isAnimating = false;
        },
        onCancel: () => {
          resetTrack();
        },
      });
    };

    const moveNext = () => shift(1);
    const movePrev = () => shift(-1);

    prevButton.addEventListener("click", movePrev);
    nextButton.addEventListener("click", moveNext);

    track.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        movePrev();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        moveNext();
      }
    });

    track.addEventListener("touchstart", (event) => {
      touchStartX = event.touches[0]?.clientX ?? null;
    });

    track.addEventListener("touchend", (event) => {
      if (touchStartX === null) return;
      const deltaX = event.changedTouches[0]?.clientX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        if (deltaX < 0) {
          moveNext();
        } else {
          movePrev();
        }
      }
      touchStartX = null;
    });

    track.addEventListener(
      "wheel",
      (event) => {
        if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
          return;
        }

        event.preventDefault();
        if (event.deltaX > 0) {
          moveNext();
        } else if (event.deltaX < 0) {
          movePrev();
        }
      },
      { passive: false }
    );

    window.addEventListener("resize", resetTrack);
  });

})(jQuery);
