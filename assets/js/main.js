const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let productItems = $$(".wrap-products--item");
let rowElement = $(".wrap-products--item-list .row");
let productItemsFirst = $(".wrap-products--item:first-child");
let itemsSuggester = $$(".suggest--collection-item");
let swiperWrapper = $(".swiper-wrapper");
let iconNavBarOTM = $(".nav-bar-on-tablet-mobile-icon");
let wrapperNavBarOTM = $(".wrapper__nav__bar--on-tablet-mobile");
let modalLayout = $(".wrapper__nav__bar--on-tablet-mobile");
let iconFunitureOpen = $(".nav__bar--item--otm.funiture .icon--add");
let iconFunitureClose = $(".nav__bar--item--otm.funiture .icon--minus");
let listCategoryFuniture = $(".category-funiture--list-title--otm");
let navBarOTM = $(".nav__bar--otm");
let iconFunitureCategoryOpen = $(".category-funiture--title-item--otm.Furniture .icon--add");
let iconBnmCategoryOpen= $(".category-funiture--title-item--otm.Bnm .icon--add");
let iconWFHCategoryOpen = $(".category-funiture--title-item--otm.WFH .icon--add");
let iconSnOCategoryOpen = $(".category-funiture--title-item--otm.SnO .icon--add");
let iconFunitureCategoryClose = $(".category-funiture--title-item--otm.Furniture .icon--minus");
let iconBnmCategoryClose= $(".category-funiture--title-item--otm.Bnm .icon--minus");
let iconWFHCategoryClose = $(".category-funiture--title-item--otm.WFH .icon--minus");
let iconSnOCategoryClose = $(".category-funiture--title-item--otm.SnO .icon--minus");
let listFuniture = $(".category-funiture--list-otm.Furniture");
let listBnm = $(".category-funiture--list-otm.Bnm");
let listWFH = $(".category-funiture--list-otm.WFH");
let listSnO = $(".category-funiture--list-otm.SnO");
let iconBedFunitureOpen = $(".nav__bar--item--otm.bedroom .icon--add");
let iconBedFunitureClose = $(".nav__bar--item--otm.bedroom .icon--minus");
let listBedFuniture = $(".category__bedroom--otm");
let iconListTitleProducts = $(".product-icon-on-tablet-mobile i");
let productsListTitle = $(".wrap__products--list");
let iconListTitleSuggest = $(".suggest-icon-on-tablet-mobile i");
let suggestListTitle = $(".suggest--collection-list");


Array.from(productItems).forEach((productItem) => {
    productItem.onclick=function(){
        $(".wrap-products--item.active").classList.remove("active");
        rowElement.classList.remove("active");
        productItem.classList.add("active");
        setTimeout(function(){
            rowElement.classList.add("active");
        },3000);        
        }    
});

Array.from(itemsSuggester).forEach((item) =>{
    item.onclick=() => {
        $(".active.suggest--collection-item").classList.remove("active");
        swiperWrapper.classList.remove("active");
        item.classList.add("active");
        setTimeout(() =>{
            swiperWrapper.classList.add("active");

        },1000)

    }
})

setTimeout(() => {
    productItemsFirst.classList.add("active");
    rowElement.classList.add("active");
}, 100);

function clickToggle(selector,elmentTochange) {
    selector.onclick = () => {
        elmentTochange.classList.toggle("active");
    }
}

function clickToAdd(selector,elmentTochange) {
    selector.onclick = () => {
        elmentTochange.classList.add("active");
    }
}

function clickToRemove(selector,elmentTochange) {
    selector.onclick = () => {
        elmentTochange.classList.remove("active");
    }
}

function clickToSetAttribute(element1,element2){
    element1.onclick = () => {
        element1.setAttribute("style", "display:none");
        element2.setAttribute("style", "display:block");
    }
}



clickToAdd(iconNavBarOTM,wrapperNavBarOTM);
clickToRemove(modalLayout,wrapperNavBarOTM);

navBarOTM.onclick = (e) => {
    e.stopPropagation();    
}

function clickOpen (elementOpen,elemntAdd,elemntClose) {
    elementOpen.onclick = () => {
        elemntAdd.classList.add("active");
        elementOpen.setAttribute("style", "display:none");
        elemntClose.setAttribute("style", "display:block");
    }
}

function clickClose(elemntClose,elemntRemove,elemntOpen){
    elemntClose.onclick = () => {
        elemntRemove.classList.remove("active");
        elemntOpen.setAttribute("style", "display:block");
        elemntClose.setAttribute("style", "display:none");
    }
}


clickOpen(iconFunitureOpen,listCategoryFuniture,iconFunitureClose);
clickOpen(iconFunitureCategoryOpen,listFuniture,iconFunitureCategoryClose);
clickOpen(iconBnmCategoryOpen,listBnm,iconBnmCategoryClose);
clickOpen(iconWFHCategoryOpen,listWFH,iconWFHCategoryClose);
clickOpen(iconSnOCategoryOpen,listSnO,iconSnOCategoryClose);
clickOpen(iconBedFunitureOpen,listBedFuniture,iconBedFunitureClose)

clickClose(iconFunitureClose,listCategoryFuniture,iconFunitureOpen);
clickClose(iconFunitureCategoryClose,listFuniture,iconFunitureCategoryOpen);
clickClose(iconBnmCategoryClose,listBnm,iconBnmCategoryOpen);
clickClose(iconWFHCategoryClose,listWFH,iconWFHCategoryOpen);
clickClose(iconSnOCategoryClose,listSnO,iconSnOCategoryOpen);
clickClose(iconBedFunitureClose,listBedFuniture,iconBedFunitureOpen)

clickToggle(iconListTitleProducts,productsListTitle);

window.addEventListener('click',(e) => {
    let productsListTitleActive = $(".wrap__products--list.active");
    if(!productsListTitleActive.contains(e.target) && (!iconListTitleProducts.contains(e.target))){
        productsListTitleActive.classList.remove("active");
    }
})

clickToggle(iconListTitleSuggest,suggestListTitle);

window.addEventListener('click',(e) => {
    let suggestListTitleActive = $(".suggest--collection-list.active");
    if(!suggestListTitleActive.contains(e.target) && (!iconListTitleSuggest.contains(e.target))){
        suggestListTitleActive.classList.remove("active");
    }
})