function calculateZakah() {
    const goldValue = parseFloat(document.getElementById('goldValue').value) || 0;
    const cashValue = parseFloat(document.getElementById('cashValue').value) || 0;
    const otherAssets = parseFloat(document.getElementById('otherAssets').value) || 0;

    const totalAssets = goldValue + cashValue + otherAssets;
    const nisab = 85000; // نصاب الزكاة بالجنيه
    const zakahRate = 0.025; // نسبة الزكاة

    if (totalAssets >= nisab) {
        const zakah = totalAssets * zakahRate;
        document.getElementById('result').innerText = `مقدار الزكاة الواجبة: ${zakah.toFixed(2)} جنيه`;
    } else {
        document.getElementById('result').innerText = 'إجمالي أموالك أقل من النصاب، لا زكاة واجبة.';
    }
}
