// The "Name" field:
let name = document.getElementById('name');
name.focus();

// "Job Role" section:
let selectjobRole = document.getElementById('title');
let otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';
selectjobRole.addEventListener('change', (e) => {
	if (selectjobRole.value === 'other') {
		otherJobRole.style.display = 'block';
	} else {
		otherJobRole.style.display = 'none';
	}
});

// "T-Shirt Info" section:
let design = document.getElementById('design');
let color = document.getElementById('color');
let colorOption = color.children;
color.disabled = true;

design.addEventListener('change', (e) => {
	color.disabled = false;
	for (let i = 0; i < colorOption.length; i++) {
		let designTheme = e.target.value;
		let colorAttribuate = colorOption[i].getAttribute('data-theme');

		if (designTheme === colorAttribuate) {
			colorOption[i].hidden = false;
			colorOption[i].selected = true;
		} else {
			colorOption[i].hidden = true;
			colorOption[i].selected = false;
		}
	}
});

// Register for Activities" section
let registerFieldTest = document.getElementById('activities');
let activitiesCost = document.getElementById('activities-cost');
let totalCost = 0;

registerFieldTest.addEventListener('change', (e) => {
	let dataCost = e.target.getAttribute('data-cost');

	if (e.target.checked) {
		totalCost += parseInt(dataCost);
		sum = totalCost;
	} else {
		totalCost -= parseInt(dataCost);
		sum = totalCost;
	}
	activitiesCost.innerHTML = `total:$${sum}`;
});

// "Payment Info" section:
let Payment = document.getElementById('payment');
let creditCard = document.getElementById('credit-card');
let payPal = document.getElementById('paypal');
let bitCoin = document.getElementById('bitcoin');
payPal.hidden = true;
bitCoin.hidden = true;
secondChild = Payment.children[1];
secondChild.setAttribute('selected', true);

Payment.addEventListener('change', (e) => {
	if (Payment.value === 'paypal') {
		payPal.hidden = false;
		creditCard.hidden = true;
		bitCoin.hidden = true;
	} else if (Payment.value === 'bitcoin') {
		payPal.hidden = true;
		creditCard.hidden = true;
		bitCoin.hidden = false;
	} else if (Payment.value === 'credit-card') {
		payPal.hidden = true;
		creditCard.hidden = false;
		bitCoin.hidden = true;
	}
});

//      Form Validation:
let activitiesBoxes = document.getElementById('activities-box');
let activitiesBox = activitiesBoxes.querySelectorAll('input');
let email = document.getElementById('email');
let cardNumber = document.getElementById('cc-num');
let zipCode = document.getElementById('zip');
let cvv = document.getElementById('cvv');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	let nameValue = name.value;
	let emailValue = email.value;
	let cardNumberValue = cardNumber.value;
	let zipCodeValue = zipCode.value;
	let cvvValue = cvv.value;

	let nameTest = /^[a-zA-Z]+$/.test(nameValue);
	emailTest =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			emailValue
		);
	cardNumberValueTest = /^\d{13,16}$/.test(cardNumberValue);
	zipCodeValueTest = /^\d{5}$/.test(zipCodeValue);
	cvvValueTest = /^\d{3}$/.test(cvvValue);
	// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

	if (nameTest === true) {
		name.parentElement.classList.add('valid');
		name.parentElement.classList.remove('.not-valid');
		name.parentElement.lastElementChild.style.display = 'none';
	} else {
		name.parentElement.classList.add('not-valid');
		name.parentElement.lastElementChild.style.display = 'block';
		e.preventDefault();
	}

	if (emailTest === true) {
		email.parentElement.classList.add('valid');
		email.parentElement.classList.remove('.not-valid');
		email.parentElement.lastElementChild.style.display = 'none';
	} else {
		email.parentElement.classList.add('not-valid');
		email.parentElement.lastElementChild.style.display = 'block';
		e.preventDefault();
	}
	if (Payment.value === 'credit-card') {
		if (cardNumberValueTest === true) {
			cardNumber.parentElement.classList.add('valid');
			cardNumber.parentElement.classList.remove('.not-valid');
			cardNumber.parentElement.lastElementChild.style.display = 'none';
		} else {
			cardNumber.parentElement.classList.add('not-valid');
			cardNumber.parentElement.lastElementChild.style.display = 'block';
			e.preventDefault();
		}

		if (cvvValueTest === true) {
			cvv.parentElement.classList.add('valid');
			cvv.parentElement.classList.remove('.not-valid');
			cvv.parentElement.lastElementChild.style.display = 'none';
		} else {
			cvv.parentElement.classList.add('not-valid');
			cvv.parentElement.lastElementChild.style.display = 'block';
			e.preventDefault();
		}

		if (zipCodeValueTest === true) {
			zipCode.parentElement.classList.add('valid');
			zipCode.parentElement.classList.remove('.not-valid');
			zipCode.parentElement.lastElementChild.style.display = 'none';
		} else {
			zipCode.parentElement.classList.add('not-valid');
			zipCode.parentElement.lastElementChild.style.display = 'block';
			e.preventDefault();
		}
	}

	if (totalCost > 0) {
		activitiesBoxes.parentElement.classList.add('valid');
		activitiesBoxes.parentElement.classList.remove('.not-valid');
		activitiesBoxes.parentElement.lastElementChild.style.display = 'none';
	} else {
		activitiesBoxes.parentElement.classList.add('not-valid');
		activitiesBoxes.parentElement.lastElementChild.style.display = 'block';
		e.preventDefault();
	}
});

// Accessibility:
for (let i = 0; i < activitiesBox.length; i++) {
	activitiesBox[i].addEventListener('focus', (e) => {
		activitiesBox[i].parentElement.classList = 'focus';
	});
	activitiesBox[i].addEventListener('blur', (e) => {
		activitiesBox[i].parentElement.classList = 'blur';
	});
}
