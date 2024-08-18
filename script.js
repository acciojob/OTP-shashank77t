//your JS code here. If required.
const codes = document.querySelectorAll('.codes');
console.log(codes);
codes.forEach((code, index) => {
//	console.log(code)
    code.addEventListener('input', () => {
		console.log(code);
        if (code.value.length > 1) {
            code.value = code.value.slice(0, 1); // Keep only the first character
        }
        
        if (code.value !== '') {
            const nextCode = codes[index + 1];
			console.log(nextCode);
            if (nextCode) {
                nextCode.focus();
            }
        }
    });
	code.addEventListener('keydown', (e) => {
		if (e.key === 'Backspace') {
			if (code.value === '') {
				const prevCode = codes[index - 1];
				if (prevCode) {
					prevCode.focus();
				}
			} else {
				code.value = ''; // Clear the current input
			}
		}
	});

})

