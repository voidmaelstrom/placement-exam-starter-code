// First, tell us your name
let yourName = "Brad Stouffer" // HINT: Replace this with your own name!
const gingerBreadQty = document.getElementById('qty-gb')
const chocChipQty = document.getElementById('qty-cc')
const sugarCookieQty = document.getElementById('qty-sugar')
const cookieTotalQty = document.getElementById('qty-total')

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Initialize cookie totals
let cookieTotals = (gb + cc + sugar)

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

document.getElementById('minus-gb').addEventListener('click', function() {
    // decrement gingerbread cookies and update totals on page
    if ( !gb == 0 ) {
        gb--;
        gingerBreadQty.textContent = gb
        cookieTotals = (gb + cc + sugar)
        cookieTotalQty.textContent = parseInt(cookieTotals)
    }
})

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // increment gingerbread cookies and update totals on page
    gb++;
    gingerBreadQty.textContent = gb
    cookieTotals = (gb + cc + sugar)
    cookieTotalQty.textContent = parseInt(cookieTotals)
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    // decrement chocolate chip cookies and update totals on page
    if ( !cc == 0 ) {
        cc--;
        chocChipQty.textContent = cc
        cookieTotals = (gb + cc + sugar)
        cookieTotalQty.textContent = parseInt(cookieTotals)
    }
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // increment chocolate chip cookies and update totals on page
    cc++;
    chocChipQty.textContent = cc
    cookieTotals = (gb + cc + sugar)
    cookieTotalQty.textContent = parseInt(cookieTotals)
})

// Event listener for clicks on the "-" button for Sugar cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    // decrement sugar cookies and update totals on page
    if ( !sugar == 0 ) {
        sugar--;
        sugarCookieQty.textContent = sugar
        cookieTotals = (gb + cc + sugar)
        cookieTotalQty.textContent = parseInt(cookieTotals)
    }
})

// Event listener for clicks on the "+" button for sugar cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    // increment sugar cookies and update totals on page
    sugar++;
    sugarCookieQty.textContent = sugar
    cookieTotals = (gb + cc + sugar)
    cookieTotalQty.textContent = parseInt(cookieTotals)
})