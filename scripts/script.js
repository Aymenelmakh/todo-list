let flag = null;

//===============================================================================================================================
// Local Storage
function saveMissions() {
    const missions = [];

    document.querySelectorAll('.element1').forEach(mission => {
        missions.push({
            text: mission.querySelector('.t1').textContent,
            done: mission.style.backgroundColor === 'rgb(128, 212, 128)',
            date: mission.querySelector('.t2').textContent
        });
    });

    localStorage.setItem('missions', JSON.stringify(missions));
}

window.addEventListener('DOMContentLoaded', () => {
    const missions = JSON.parse(localStorage.getItem('missions')) || [];

    missions.forEach(m => {
        const e1 = document.createElement('div');
        e1.className = 'element1';

        e1.innerHTML = `
        <div class="e1">
            <button class="btn1"><span class="material-symbols-outlined">edit</span></button>
            <button class="btn2">
                <span class="material-symbols-outlined">${m.done ? 'close' : 'check'}</span>
            </button>
            <button class="btn3"><span class="material-symbols-outlined">delete</span></button>
        </div>
        <div class="e2">
            <p class="t1">${m.text}</p>
            <div class="date">
                <p class="t2">${m.date}</p>
                <span class="material-symbols-outlined">calendar_month</span>
            </div>
        </div>
        `;

        if (m.done) {
            e1.style.backgroundColor = 'rgb(128, 212, 128)';
            const btn2 = e1.querySelector('.btn2');
            btn2.style.backgroundColor = 'rgb(47, 2, 85)';
        }

        document.getElementById('body').appendChild(e1);
    });
});

//===========================================================================================================================
//display the input field when click on add button
const btn = document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.getElementById("test").style.display = "block";
});

//===========================================================================================================================================
//diapear the input field when click on cancel and clear user input
const cancel = document.getElementById("cancel");
cancel.addEventListener("click",()=>{
    document.getElementById("input").value = '';
    document.getElementById("test").style.display = "none";
});

//===================================================================================================================================================
//add div containing the mission with title and date
const valid = document.getElementById("valid");
valid.addEventListener("click", () =>{
    let input = document.getElementById("input");
    const value = input.value.trim();
    if (!value)
    {
        // if input is null do nothing
        return ;
    }
    if (flag)
    {
        //update
        flag.querySelector(".t1").textContent = value;
        flag = null;
    }
    else{
        const now = new Date().toLocaleDateString('en-GB');
        const e1 = document.createElement("div");
        e1.className = "element1";
        e1.innerHTML = `
            <div class="e1">
                <button class="btn1" type="button"><span class="material-symbols-outlined">edit</span></button>
                <button class="btn2" type="button"><span class="material-symbols-outlined">check</span></button>
                <button class="btn3" type="button"><span class="material-symbols-outlined">delete</span></button>
            </div>
            <div class="e2">
                <p class="t1">${value}</p>
                <div class="date">
                    <p class="t2">${now}</p>
                    <span class="material-symbols-outlined">calendar_month</span>
                </div>
            </div>
        `
        document.getElementById("body").appendChild(e1);
    }
    input.value = '';
    document.getElementById("test").style.display = 'none';
    saveMissions();
});

//===================================================================================================================================================
//remove item
document.getElementById('body').addEventListener('click', (e) => {
    const butonBtn = e.target.closest('.btn3');
    if (!butonBtn)
    {
        return ;
    }
    let trust = confirm("You sure about deleting this mission");
    if (trust)
    {
        butonBtn.closest(".element1").remove();
    }
    saveMissions();
});

//=====================================================================================================================================================
//check && uncheck
document.getElementById('body').addEventListener("click", (e) =>{
    const checkBtn = e.target.closest(".btn2");
    if (!checkBtn) {
        return;
    }
    if (checkBtn.querySelector('span').textContent == 'check') {
        checkBtn.querySelector('span').textContent = 'close';
        checkBtn.style.backgroundColor = 'rgb(47, 2, 85)';
        checkBtn.closest(".element1").style.backgroundColor = 'rgb(128, 212, 128)';
    }
    else{
        checkBtn.querySelector('span').textContent = 'check';
        checkBtn.style.backgroundColor = 'green';
        checkBtn.closest(".element1").style.backgroundColor = '#fff';
    }
    saveMissions();
});

//===========================================================================================================================================================
//Update
document.getElementById('body').addEventListener("click", (e)=>{
    const editBtn = e.target.closest(".btn1");
    if (!editBtn) {
        return;
    }
    flag = editBtn.closest(".element1");
    const text = flag.querySelector(".t1");
    document.getElementById("test").style.display = "block";
    document.getElementById("input").value = text.textContent;
});

//=========================================================================================================================================================================