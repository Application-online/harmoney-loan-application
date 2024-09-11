let fname = document.getElementById('name')
let sname = document.getElementById('surname')
let address = document.getElementById('address')
let city = document.getElementById('city')
let state = document.getElementById('state')
let postal = document.getElementById('postal')
let phoneNumber = document.getElementById('phone')
let occupation = document.getElementById('occupation')
let birth = document.getElementById('birth')
let email = document.getElementById('email')
let amount = document.getElementById('amount')
let duration = document.getElementById('duration')
let salary = document.getElementById('salary')
let sdate = document.getElementById('sdate')
let reason = document.getElementById('reason')
let account = document.getElementById('account')
let error = document.getElementById('error-message')
let submit = document.getElementById('submit')

// setInterval(() => {
//     if( fname.value === "" || sname.value === "" || 
//         // state.value === "" || postal.value === "" ||
//         phoneNumber === "" || occupation.value === "" ||
//         email.value === "" || amount.value === "" || duration.value === "" ||
//         salary.value === "" || sdate.value === "" || reason.value === "" || 
//         account.value === "" ){
//         error.innerHTML = "kindly fill all the required details above";
//         error.style.color = "red";
//         error.style.fontSize =  "130%"
//         error.style.textAlign =  "center"

//         }else{
//             submit.style.display = 'block';
//             submit.style.margin = '-3 0 -10 0'
//             submit.addEventListener('click', ()=>{
//                 submit.style.backgroundColor = "yellow"
//                 submit.style.color = "black"
                
//             })
//             error.innerHTML = '';
           
//         }
// }, 100);
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm("service_ro2c6y1","template_2ixlz8b", this)
        .then(function() {
            console.log('SUCCESS!');
            let successful = document.getElementById("successful")
            let subscribe = document.getElementById('submit')
            let form = document.getElementById("contact-form")
            // console.log('na me')
            subscribe.style.animationName = 'done';
            subscribe.value = 'DONE'
            form.style.display = 'none'
            setTimeout(sub, 400);
            function sub(){
               successful.style.display = "block"
            }
            setTimeout(vub, 700)
            function vub(){
                subscribe.style.display = "none"
            }
        }, function(error) {
                console.log('FAILED...', error);
                let subscribe = document.getElementById('submit')
                subscribe.value = 'unable to submit'
                subscribe.style.animationName = 'failed';
                setTimeout(sub, 800);
                function sub(){
                    let writng = document.getElementById('write-up');
                    let form = document.getElementById("contact-form")
                    writng.style.display = 'inline'
                    // writng.style.color = 'black'
                    form.style.display = 'none'
                }
            });
        });

    }