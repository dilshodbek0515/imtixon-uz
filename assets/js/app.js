const input1El = document.querySelector(".input1");
const input2El = document.querySelector(".input2");
const input3El = document.querySelector(".input3");
const input4El = document.querySelector(".input4");
const input5El = document.querySelector(".input5");
const sectionEl = document.querySelector(".section");
const btnEl = document.querySelector(".btn");
const formEl = document.querySelector(".form");
const boxEl = document.querySelector(".box")

formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const poneEl = document.createElement("p");
        const pwonEl = document.createElement("p");
        const pthreEl = document.createElement("p");
        const pEl = document.createElement("p");

        const buttononeEl = document.createElement("button");
        const buttonwonEl = document.createElement("button");
        const buttonthreEl = document.createElement("button");

        const imgEl = document.createElement("img");
        const divoneEl = document.createElement("div");
        const divwonEl = document.createElement("div");
        const divthreEl = document.createElement("div");

        poneEl.className = "p1"
        pwonEl.className = "p2"
        pthreEl.className = "p3"
        pEl.className = "p4"

        sectionEl.className = "content"
        divoneEl.className = "boxn1"
        divwonEl.className = "box1"
        divthreEl.className = "box2"

        imgEl.className = "img"

        buttononeEl.className = "btn1"
        buttonwonEl.className = "btn2"
        buttonthreEl.className = "btn3"

        const data = new Date();

        const sana =
            data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();

        imgEl.src = "" + input1El.value;
        poneEl.innerText = `taom nomi:` + input1El.value;
        pwonEl.innerText = `taom narxi: $` + input1El.value;
        pthreEl.innerText = `taom oshpazi:` + input1El.value;
        pEl.innerText = `taom restorani:` + input1El.value;

        buttononeEl.innerText = `taom o'chirish`
        buttonwonEl.innerText = `${sana}`
        buttonthreEl.innerText = `taom tugagan`

        sectionEl.appendChild(divoneEl);
        divoneEl.appendChild(imgEl);
        sectionEl.appendChild(divwonEl);
        sectionEl.appendChild(divthreEl);

        divwonEl.appendChild(poneEl);
        divwonEl.appendChild(pwonEl);
        divwonEl.appendChild(pthreEl);
        divwonEl.appendChild(pEl);
        divthreEl.appendChild(buttononeEl);
        divthreEl.appendChild(buttonwonEl);
        divthreEl.appendChild(buttonthreEl);

        input1El.value = ""
        input2El.value = ""
        input3El.value = ""
        input4El.value = ""
        input5El.value = ""

        buttononeEl.addEventListener('click', () => {
            e.preventDefault();
            const agree = confirm("Are you sure to delete this?");

            if (agree) {
                sectionEl.remove();
            };
        });

        buttonthreEl.addEventListener('click', (e) => {
            sectionEl.style.backgroundColor = "greenyellow"
        });
});
