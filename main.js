const star1 = document.getElementById('star-1');
const star2 = document.getElementById('star-2');
const star3 = document.getElementById('star-3');
const star4 = document.getElementById('star-4');
const star5 = document.getElementById('star-5');
const submitBtn = document.getElementById('submit-btn');

let stars = [star1, star2, star3, star4, star5];

function starsRating(num) {
    for (let each of stars) {
        if (each.classList.contains('fas') == true) {
            each.classList.remove('fas');
            each.classList.add('far');
            each.style.color = 'gray';
        }
    }
    //The following for loop that is commented out was intended to achieve a hover effect in a 
    //particular case. Imagine the end user gives a rating of 5 stars, then decides to give a 
    //rating of 4 stars, then decides again to give 5 stars. The idea is that, after having just given
    // a 4 star rating, when the user hovers their mouse over the fifth star the star will highlight yellow.
    // Unfortunately, I cannot get it to work.


    // for (let each of stars) {
    //     if (each.classList.contains('far') == true && each.style.color == 'gray' && each.classList.contains('fas') === false) {
    //         each.addEventListener('mouseenter', () => {
    //             each.style.color = 'yellow';
    //         })
    //     }
    //     if (each.classList.contains('far') === true && each.style.color == 'yellow' && each.classList.contains('fas') === false) {
    //         each.addEventListener('mouseleave', () => {
    //             each.style.color = 'gray';
    //         })
    //     }
    // }
    for (let each of stars) {
        if (stars.indexOf(each) == num) {
            break;
        }
        each.classList.remove('far');
        each.classList.add('fas');
        each.style.color = 'yellow';
        each.style.display = 'flex';
    }
    
}

star1.addEventListener('click', () => {
    starsRating(1);
});
star2.addEventListener('click', () => {
    starsRating(2);
})
star3.addEventListener('click', () => {
    starsRating(3);
})
star4.addEventListener('click', () => {
    starsRating(4);
})
star5.addEventListener('click', () => {
    starsRating(5);
})

submitBtn.addEventListener('click', () => {
    i = 0;
    for (let each of stars) {
        if (each.classList.contains('fas')) {
            i += 1;
        }
    }
    if (i > 0) {
        document.getElementById('dynamic-text').innerText = 'You gave us ' + i + ' out of 5 stars';
        document.getElementById('card').style.display = 'none';
        document.getElementById('post-submission-card').style.display = 'flex';
    } else {
        alert('Please choose a rating before continuing');
    }
})




