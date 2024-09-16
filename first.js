const validPin = "1234";
let balance = 1000;

function login() {
    const pinInput = document.getElementById('pin').value;
    if (pinInput === validPin) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('atm-screen').style.display = 'block';
        document.getElementById('atm-message').textContent = '';
    } else {
        document.getElementById('login-message').textContent = 'Invalid PIN';
    }
}

function checkBalance() {
    document.getElementById('atm-message').textContent = `Your balance is $${balance}`;
}

function showWithdrawal() {
    document.getElementById('atm-screen').style.display = 'none';
    document.getElementById('withdrawal-screen').style.display = 'block';
}

function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('withdrawal-message').textContent = 'Invalid amount';
    } else if (amount > balance) {
        document.getElementById('withdrawal-message').textContent = 'Insufficient balance';
    } else {
        balance -= amount;
        document.getElementById('withdrawal-message').textContent = `You withdrew $${amount}`;
        document.getElementById('atm-message').textContent = `Your new balance is $${balance}`;
        document.getElementById('withdrawal-screen').style.display = 'none';
        document.getElementById('atm-screen').style.display = 'block';
    }
}

function goBack() {
    document.getElementById('withdrawal-screen').style.display = 'none';
    document.getElementById('atm-screen').style.display = 'block';
}

function logout() {
    document.getElementById('atm-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('pin').value = '';
    document.getElementById('login-message').textContent = '';
}
