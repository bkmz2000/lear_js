function delay(ms) {
    return new Promise(resolve => setTimeout(resolve));
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));