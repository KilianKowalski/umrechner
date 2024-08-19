function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;
    const exchangeRate = {
        eur: 1.16, // 1€ = 1.16£ (Beispielwert)
        gbp: 0.86  // 1£ = 0.86€ (Beispielwert)
    };

    let result = 0;
    if (currency === 'eur') {
        result = amount * exchangeRate.gbp;
        document.getElementById('result').innerText = `${amount}€ sind ${result.toFixed(2)}£`;
    } else {
        result = amount * exchangeRate.eur;
        document.getElementById('result').innerText = `${amount}£ sind ${result.toFixed(2)}€`;
    }
}
