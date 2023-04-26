const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.98,
        img: "./images/item-1.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 2,
        title: "double dinner",
        category: "lunch",
        price: 19.98,
        img: "./images/item-2.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 3,
        title: "bGodzilla MilkShake",
        category: "breakfast",
        price: 11.98,
        img: "./images/item-3.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 4,
        title: "country delight",
        category: "dinner",
        price: 9.98,
        img: "./images/item-4.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 5,
        title: "Egg Attack",
        category: "lunch",
        price: 20.98,
        img: "./images/item-5.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "dinner",
        price: 10.98,
        img: "./images/item-6.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 7,
        title: "becon overflow",
        category: "lunch",
        price: 19.98,
        img: "./images/item-7.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 8,
        title: "American classic",
        category: "breakfast",
        price: 12.98,
        img: "./images/item-8.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 9,
        title: "Quarantine buddy ",
        category: "shakes",
        price: 8.08,
        img: "./images/item-9.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
    {
        id: 10,
        title: "American shakes",
        category: "shakes",
        price: 22.98,
        img: "./images/item-10.jpeg",
        desc: `best of milk shake prepared by the
        best chefs. constisting of original milk and local eggs
        its the best you can have in town very fresh!`,
    },
];

const sectionCenter = document.querySelector('.section-center');


//load items
window.addEventListener("DOMContentLoaded", function (){
 displayMenuItems(menu);
 //adding buttons
 const container = this.document.querySelector('.btn-container')
 const categories = menu.reduce(function(values, item){
    if(!values.includes(item.category)){
        values.push(item.category);
    }
  return values;
  
 },
 ['all'])
 const categoryBtns = categories.map(function(category){
    return ` <button class="filter-btn" type="button"
     data-id=${category}>${category}</button>`
 }).join("");
 container.innerHTML = categoryBtns
 const filterBtns = document.querySelectorAll
 ('.filter-btn')
 filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
    const category = e.currentTarget.dataset.id;
     const menuCategory = menu.filter(function(menuItem){
        //console.log(menuItem.category)

        if(menuItem.category == category) {
            return menuItem
        }

     });
     //console.log(menuCategory)
     if(category === 'all'){
        displayMenuItems(menu)
     }
     else{
        displayMenuItems(menuCategory)
     }
    });
});

});

//filter items


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
    
        return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">$${item.price}</h4>
        </header>
         <p class="item-text"> 
         ${item.desc}
         </p>
        </div>
      </article>`
       });
       displayMenu = displayMenu.join("")
       sectionCenter.innerHTML=displayMenu
}
