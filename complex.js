class complex {
	constructor(real, imag) {
		let answer;
		if (!isNaN(real) && !isNaN(imag)) {
			this.real = real;
			this.imag = imag;
			answer = true;
		} else {
			answer = false;
		}
		return false;
	}
	power(n) {
		let i,
			real = 0,
			imag = 0;
		const pAry = this._pascal_triangle(n);
		for (i = 0; i <= n; i++) {
			if (i === 0) {
				real += this.real ** n * pAry[i];
			} else { //
				if (i % 2 === 0) {
					if (i % 4 === 0) {
						real += (this.real ** (n - i)) * (this.imag ** i) * pAry[i];
					} else {
						real -= (this.real ** (n - i)) * (this.imag ** i) * pAry[i];
					}
				} else if (i % 2 === 1) {
					if ((i - 1) % 4 === 0 || i === 1) {
						imag += (this.real ** (n - i)) * (this.imag ** i) * pAry[i];
					} else {
						imag -= (this.real ** (n - i)) * (this.imag ** i) * pAry[i];
					}
				}
			}
		}
		return [real, imag]
	}
	_pascal_triangle(n) {
		let answer = [1, 1],
			i;
		for (i = 1; i < n; i++) {
			let temp = [],
				j;
			temp.push(1);
			for (j = 0; j < answer.length - 1; j++) {
				temp.push(answer[j] + answer[j + 1])
			}
			temp.push(1);
			answer = temp.slice();
		}
		return answer;
	}
}
