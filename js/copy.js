// copy button traverse technique
// const copyBtns = document.getElementsByClassName('btn-copy');
// for (let copyBtn of copyBtns) {
//     copyBtn.addEventListener('click', function () {

//         const copyButton = copyBtn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[2].children[0].innerText;
//         // console.log(copyButton);

//         const copyNumber = Number(copyButton) + 1;

//         document.getElementById('copy-title').innerText = copyNumber;

//         navigator.clipboard.writeText(999).then(() => {
//             alert('নাম্বারটি কপি হয়েছে, 999')
//         })

//     })
// }




// copy button delegation technique
document.getElementById('card-box').addEventListener('click', function (e) {

    if (e.target.className.includes('btn-copy')) {
        const btnCopy = e.target;


        const nationalNum = btnCopy.parentNode.parentNode.children[3].innerText;

        const copyButton = btnCopy.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].children[1].children[2].children[0].innerText;


        const copyNumber = Number(copyButton) + 1;

        document.getElementById('copy-title').innerText = copyNumber;

        navigator.clipboard.writeText(nationalNum).then(() => {
            alert(`নাম্বারটি কপি হয়েছে, ${nationalNum}`)
        })


    }

})






