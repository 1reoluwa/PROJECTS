document.querySelector('.button').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const type = document.querySelector('input[name="type"]:checked');
  
    if (!amount || !term || !rate || !type) {
      alert('Please fill in all fields and select a mortgage type.');
      return;
    }
  
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
  
    let monthlyPayment;
  
    if (type.value === 'repayment') {
      monthlyPayment = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    } else {
      monthlyPayment = amount * monthlyRate;
    }
  
    const totalRepayment = monthlyPayment * numberOfPayments;
  
    document.querySelector('.p4').textContent = `£${monthlyPayment.toFixed(2)}`;
    document.querySelector('.p5').textContent = `£${totalRepayment.toFixed(2)}`;
  });