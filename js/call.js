// call button traverse technique
// const callBtns = document.getElementsByClassName('call-btn');
// for (let callBtn of callBtns) {
//     callBtn.addEventListener('click', function () {

//         const coinTitle = document.getElementById('coin-title');
//         const currentCoin = Number(coinTitle.innerText)

//         const updateCoin = currentCoin - 20;

//         coinTitle.innerText = updateCoin;


//         const nameTitle = callBtn.parentNode.parentNode.children[1].innerText;
//         const nationalNum = callBtn.parentNode.parentNode.children[3].innerText;

//         const historyContainer = document.getElementById('history-container');
//         const newHistory = document.createElement('div');
//         const time = new Date().toLocaleTimeString();
//         newHistory.innerHTML = time;
//         newHistory.innerHTML = `
//                <div class="bg-[#f5fff6] mt-5 p-5 mx-5 flex justify-between items-center shadow-md rounded-md">
//                         <div>
//                             <h1 class="font-bold text-base">${nameTitle}</h1>
//                             <p class="font-bold text-base">${nationalNum}</p>
//                         </div>
//                         <div>
//                             <p class="font-bold text-base">${time}</p>

//                         </div>
//                     </div>
//         `

//         if (currentCoin >= 20) {
//             alert('📞 Calling National Emergency Service 999...')
//         }
//         else {
//             coinTitle.innerText = 0
//             alert('❌ আপনার পর্যাপ্ত কয়েন নেই; কল করতে কমপক্ষে ২০ কয়েন লাগবে');
//             appendChild()
//         }

//         historyContainer.appendChild(newHistory);
//     })

// }




// call button delegation technique
document.getElementById('card-box').addEventListener('click', function (e) {
    //  console.log(e.target.tagName)
    if (e.target.className.includes('call-btn')) {
        const callBtn = e.target;

        const coinTitle = document.getElementById('coin-title');
        const currentCoin = Number(coinTitle.innerText)

        const updateCoin = currentCoin - 20;

        coinTitle.innerText = updateCoin;


        const nameTitle = callBtn.parentNode.parentNode.children[1].innerText;
        const nationalNum = callBtn.parentNode.parentNode.children[3].innerText;

        const historyContainer = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        const time = new Date().toLocaleTimeString();
        newHistory.innerHTML = time;
        newHistory.innerHTML = `
               <div class="bg-[#f5fff6] mt-5 p-5 mx-5 flex justify-between items-center shadow-md rounded-md">
                        <div>
                            <h1 class="font-bold text-base">${nameTitle}</h1>
                            <p class="font-bold text-base">${nationalNum}</p>
                        </div>
                        <div>
                            <p class="font-bold text-base">${time}</p>

                        </div>
                    </div>
        `

        if (currentCoin >= 20) {
            alert(`📞 Calling ${nameTitle} (${nationalNum})...`);
            
        }
        else {
            coinTitle.innerText = 0
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই; কল করতে কমপক্ষে ২০ কয়েন লাগবে');
            appendChild()
        }

        historyContainer.appendChild(newHistory);
       
    }

})








// clear button
document.getElementById('clear-btn').addEventListener('click', function () {
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerText = ''
})












