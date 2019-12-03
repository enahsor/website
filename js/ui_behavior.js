var header = document.querySelector('header');
var list_items = document.querySelectorAll('ul.menu li');
var canvas_container = document.querySelector('div.canvas_container')
var canvas_con_2 = document.querySelector('div.canvas_container_2');

var canvas_con_height = canvas_container.offsetHeight;
var canvas_con_height_2 = canvas_con_2.offsetHeight;

var st0 = document.querySelectorAll('.st0');
var st1 = document.querySelectorAll('.st1');
var sec_r = document.querySelector('#XMLID_100_');

window.addEventListener('scroll', function(){

    curr_pos = window.pageYOffset || document.documentElement.scrollTop;
    
    if(curr_pos ==  0){
        header.style.backgroundColor = 'transparent';
        list_items.forEach(function(item){item.style.color = '#020F59'});
        st0.forEach(function(item){item.style.fill = '#3c3f9e'});
        st1.forEach(function(item){item.style.fill = '#020F59'});

    }

    if(curr_pos > header.offsetHeight){

        header.style.backgroundColor = '#020F59';
        list_items.forEach(function(item){item.style.color = '#F2F2F2';})
        st0.forEach(function(item){item.style.fill = '#F2F2F2'});
        sec_r.style.fill = '#F2F2F2';       
                
    }
    if(curr_pos >= canvas_con_height){

        header.style.backgroundColor = '#F2F2F2';
        list_items.forEach(function(item){item.style.color = '#020F59'});
        st1.forEach(function(item){item.style.fill = 'none'});
        st0.forEach(function(item){item.style.fill = '#020F59';});
        sec_r.style.fill = '#020F59';
    }
    
    if(curr_pos >= canvas_con_height+canvas_con_height_2){

        header.style.backgroundColor = '#020F59';
        list_items.forEach(function(item){item.style.color = '#F2F2F2';});
        st0.forEach(function(item){item.style.fill = '#F2F2F2'});
        sec_r.style.fill = '#F2F2F2';
    }
});

var modal = document.querySelector(".contact_modal");
var modalBtn = document.querySelector(".pop_btn");
var closeBtn = document.querySelector(".close");


modalBtn.addEventListener("click", function(event){
    modal.style.display = "grid";
});

closeBtn.addEventListener("click", function(event){
    modal.style.display = "none";
});

window.addEventListener("click", function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
});