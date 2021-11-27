
$(window).on('load', function() {
    let load = $('.load')
    load.fadeOut(1000)
})

function headleMenu() {
    let btnmenuLeft = document.querySelector(".menu-hover");
    let menuLeft = document.querySelector('.menu-left');

    let close = document.querySelectorAll('.close');
    let overlay = document.querySelector('.overlay-menu');

    // btn menuMobile
    let menuMobile = document.querySelector(".menu-mobile-icon");

    function remove() {
        menuLeft?.classList.remove('active');
        overlay?.classList.remove('active');
    }

    btnmenuLeft?.addEventListener('click', function (e) {
        e.stopPropagation()
        menuLeft?.classList.add('active');
        overlay?.classList.add('active');
    })

    menuLeft?.addEventListener('click', function (e) {
        e.stopPropagation()
    })

    close.forEach(function (item) {
        item.addEventListener('click', function () {
            remove()
        })
    })

    menuMobile?.addEventListener('click', function (e) {
        e.stopPropagation()
        menuLeft?.classList.toggle('active');
        overlay?.classList.add('active');
    })

    window.addEventListener('click', function () {
        remove()
    })
}

// show menu scroll

function showMenufixed() {
    let menufixed = document.querySelector('.menu-fixed');
    let menuproduct = document.querySelector('.productpage .menu-fixed');
    let menuproduct1 = document.querySelector('.productpage1 .menu-fixed');
    let menuproductdetails = document.querySelector('.productdetailspage .menu-fixed');
    let menuservice = document.querySelector('.servicepage .menu-fixed');
    let menuDuan = document.querySelector('.duanpage .menu-fixed');
    let menuabout = document.querySelector('.aboutpage .menu-fixed');
    let menucontact = document.querySelector('.contactpage .menu-fixed');
    let menunews = document.querySelector('.newspage .menu-fixed');
    let menunewdetails = document.querySelector('.newdetailspage .menu-fixed');


    let banner = document.querySelector('.banner');
    let heightImgdetails = document.querySelector('.productdetailspage .img-list')?.clientHeight;

    let offsetTopMenuhover = document.querySelector('.menu-hover')?.getBoundingClientRect().top;
    let heightMenuhover = document.querySelector('.menu-hover')?.clientHeight;
    

    let slider = document.querySelector('.slider');
    let heightSlide = slider?.clientHeight;
    let heightBanner =  banner?.clientHeight;
    let heightMenufixed = menufixed?.clientHeight;
    window.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset;
        if (scrollY > heightSlide - heightMenufixed) {
            menufixed?.classList.add('active');
        } else {
            menufixed?.classList.remove('active');
        }

        if(scrollY > heightBanner - heightMenufixed) {
            menuproduct?.classList.add('active');
            menuproduct1?.classList.add('active');
            menunews?.classList.add('active');
            

        } else {
            menuproduct?.classList.remove('active');
            menuproduct1?.classList.remove('active');
            menunews?.classList.remove('active');
        }

        if(scrollY > offsetTopMenuhover + heightMenuhover) {
            menuservice?.classList.add('active')
            menuDuan?.classList.add('active')
            menuabout?.classList.add('active')
            menucontact?.classList.add('active')
            menunewdetails?.classList.add('active');

        } else {
            menuservice?.classList.remove('active')
            menuDuan?.classList.remove('active')
            menuabout?.classList.remove('active')
            menucontact?.classList.remove('active')
            menunewdetails?.classList.remove('active');
        }

        if(scrollY > heightImgdetails) {
            menuproductdetails?.classList.add('active')
        } else {
            menuproductdetails?.classList.remove('active')
        }
    })

    window.addEventListener('resize', function() {

    })
}

// slider---------------


// backtotop
// window.addEventListener('load', function() {
//     handleslide()
// })
function handleslide() {
    $(".slider-list").flickity({
        cellAlign: 'left',
        // autoPlay: 3000,
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        friction: 0.8

    })

    $('.control_btn.--prew').on('click', function () {
        $(".slider-list").flickity('previous')
    })
    $('.control_btn.--next').on('click', function () {
        $(".slider-list").flickity('next')
    })

}

function backToTop() {
    let backtotopBtn = document.querySelector('.backtotop');

    backtotopBtn.onclick = function () {
        window.scrollTo({
            top: 0
        })
    }
}


// product

function hadleProduct() {
    $(".productpage .product-list").flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false, 
        // percentPosition: false
    })

    $(".productdetailspage .product-list").flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false
    })

    $(".newdetailspage .product-list").flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false
    })

    $(".productdetailspage .img-list").flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        friction: 0.5
    })

    $('.img-group').on('click', '.img-item', function() {
        var index = $(this).index();
        $(".productdetailspage .img-list").flickity( 'select', index, false, true );
    })

    // $('.prew').on('click', function (e) {
    //     e.preventDefault();
    //     $(".img-list").flickity('previous')
    // })
    $('.next').on('click', function (e) {
        e.preventDefault();
        $(".productdetailspage .product-list").flickity('next');
    })


    $('.next1').on('click', function (e) {
        e.preventDefault();
        $(".productpage .product-list.list1").flickity('next');
    })

    $('.next2').on('click', function (e) {
        e.preventDefault();
        $(".productpage .product-list.list2").flickity('next');
    })

    $('.next3').on('click', function (e) {
        e.preventDefault();
        $(".productpage .product-list.list3").flickity('next');
    })


    // let imgList = $('.img-list');
    // console.log(imgList);
    // $('.next').each(function(index, nextItem) {
    //     $(this).on('click', function(e) {
    //         e.preventDefault();
    //         $(imgList[index]).flickity('next')
    //     })
    // })
}


function handlePaging() {
    let pagingList = document.querySelectorAll(".paging li a");
    function remove() {
        pagingList.forEach(function (item) {
            item.classList.remove('active');
        })
    }
    pagingList.forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            remove()
            item.classList.add('active');
        })
    })
}


function duanBtn() {
    let btnduan = document.querySelector('.btnduan');
    let duancurent = document.querySelector('.duan-curent');
    let duanoptions = document.querySelectorAll('.duan-options a');

    let duanItem =document.querySelectorAll('.product-list');
    function remove() {
        duanoptions.forEach((item, index) => {
            duanItem[index].style.display = 'none';
        })
    }

    duancurent?.addEventListener('click', function (e) {
        e.stopPropagation();
        btnduan?.classList.toggle('active');
    })

    duanoptions.forEach(function (item, index) {
        item.onclick = function (e) {
            e.preventDefault();
            let current = duancurent.innerText;
            console.log(current);
            let duanitem = item.innerText;
            item.innerHTML = current;
            duancurent.innerHTML = duanitem;
            remove()
            // if(current) {
            //     duanItem.style = 'display: block'
            // } else {
            //     duanItem[index].style = 'display: block'
            // }
            // console.log(duanItem[index]);
            duanItem[index].style = 'display: block'
        };
    });

    window.addEventListener("click", function () {
        btnduan?.classList.remove("active");
    });
}

function start() {
    handleslide()
    headleMenu()
    showMenufixed()
    backToTop()
    hadleProduct()
    handlePaging()
    duanBtn()
}

start()
