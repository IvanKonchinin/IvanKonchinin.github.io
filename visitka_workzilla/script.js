let box_img_1 = document.querySelector('.box_img_1'),
    box_img_2 = document.querySelector('.box_img_2'),
    box_img_3 = document.querySelector('.box_img_3'),
    box_img_4 = document.querySelector('.box_img_4'),
    box_img_5 = document.querySelector('.box_img_5'),
    box_img_6 = document.querySelector('.box_img_6'),
    box_img_7 = document.querySelector('.box_img_7');

box_img_1.addEventListener('click', () => {
    box_img_1.classList.toggle('box_img_mod');

    jQuery.ajax({
        url: "import1.html",
        dataType: "html",
        success: function (response) {
            document.getElementById('import1').innerHTML = response;
        }
    });

});
box_img_2.addEventListener('click', () => {
    box_img_2.classList.toggle('box_img_mod_1');

    jQuery.ajax({
        url: "import2.html",
        dataType: "html",
        success: function (response) {
            document.getElementById('import1').innerHTML = response;
        }
    });

});
box_img_3.addEventListener('click', () => {
    box_img_3.classList.toggle('box_img_mod_2');

    jQuery.ajax({
        url: "import3.html",
        dataType: "html",
        success: function (response) {
            document.getElementById('import1').innerHTML = response;
        }
    });

});
box_img_4.addEventListener('click', () => {
    box_img_4.classList.toggle('box_img_mod_3');

    jQuery.ajax({
        url: "import4.html",
        dataType: "html",
        success: function (response) {
            document.getElementById('import1').innerHTML = response;
        }
    });

});
box_img_5.addEventListener('click', () => {
    box_img_5.classList.toggle('box_img_mod_4');

    jQuery.ajax({
        url: "import5.html",
        dataType: "html",
        success: function (response) {
            document.getElementById('import1').innerHTML = response;
        }
    });

});








