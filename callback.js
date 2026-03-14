// document.getElementById('btn').addEventListener('click', function (event) {

// });

// addEventListener('click', function (event) {

// });

function settleLife(name, isBCS, marriage, Patree) {
    if (isBCS) {
        marriage(Patree);
    }
}

function boloKobul(Parti) {
    console.log('Kobul', Parti);
}

settleLife('John', true, boloKobul, 'Nari');