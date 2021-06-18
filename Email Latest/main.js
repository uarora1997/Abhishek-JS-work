const tabNavList = document.querySelectorAll('.tab-nav li');
const tabBody = document.querySelectorAll('#row');


tabNavList.forEach((item, index, listArray) => {
    item.addEventListener('click',()=>{
        item.style.backgroundColor = "#DC3545";
        item.style.color = "white";
        if(item.classList.contains('active')){
            return;
        }else{
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
        }

        if(listArray[0].classList.contains('active')){
            tabBody[0].classList.add('active');
            tabBody[1].classList.remove('active');
            tabBody[2].classList.remove('active');
            tabBody[3].classList.remove('active');
            tabBody[4].classList.remove('active');
        }
        if(listArray[1].classList.contains('active')){
            tabBody[1].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[2].classList.remove('active');
            tabBody[3].classList.remove('active');
            tabBody[4].classList.remove('active');
        }
        if(listArray[2].classList.contains('active')){
            tabBody[2].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[1].classList.remove('active');
            tabBody[3].classList.remove('active');
            tabBody[4].classList.remove('active');
        }
        if(listArray[3].classList.contains('active')){
            tabBody[3].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[1].classList.remove('active');
            tabBody[2].classList.remove('active');
            tabBody[4].classList.remove('active');
        }
        if(listArray[4].classList.contains('active')){
            tabBody[4].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[1].classList.remove('active');
            tabBody[3].classList.remove('active');
            tabBody[2].classList.remove('active');
        }

    })
})

function closebtn() {
    const close = document.querySelector(".timer-cut");
    close.style.display = "none";
}
function hidebtn() {
    const hide = document.querySelector(".time-cut");
    hide.style.display = "none";
}
function noneBtn () {
    const none = document.querySelector(".timer");
    none.style.display = "none";
}

function time__btn() {
    const close = document.querySelector(".timeCut");
    close.style.display = "none";
}
function time_Btn() {
    const hide = document.querySelector(".timerCut");
    hide.style.display = "none";
}
function timeBtn() {
    const none = document.querySelector(".timer_cut");
    none.style.display = "none";
}

// on/off

const toggle = document.querySelector('.toggle input')

toggle.addEventListener('click', () => {
    const onOff = toggle.parentNode.querySelector('.onoff')
    onOff.textContent = toggle.checked ? 'ON' : 'OFF'
});

const toggl = document.querySelector('.toggl .input')

toggl.addEventListener('click', () => {
    const offOn = toggl.parentNode.querySelector('.offon')
    offOn.textContent = toggl.checked ? 'ON' : 'OFF'
});