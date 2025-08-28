// heart button
const heartBtns = document.getElementsByClassName('heart-btn');
for (let heartBtn of heartBtns) {
    heartBtn.addEventListener('click', function () {

        const heartButton = heartBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[0].children[0].innerText;

        const heartNumber = Number(heartButton) + 1;

        document.getElementById('heart-title').innerText = heartNumber;

    })
};