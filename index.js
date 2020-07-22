let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != "number" || typeof b != "number") {
                return reject(new Error ('Tham so phai la kieu number'));
            }
            resolve( a + b );
        }, 2000);
    });
}

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != "number" || typeof b != "number") {
                return reject(new Error ('Tham so phai la kieu number'));
            }
            resolve( a * b );
        }, 1000);
    })
}

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != "number" || typeof b != "number") {
                return reject(new Error ('Tham so phai la kieu number'));
            }
            if(b === 0) return reject (new Error('Chia cho 0'))
            resolve( a / b );
        }, 2000);
    });
}

let tinhDienTich = async (a, b, h, cb) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let square = await divide(abh, 2);
        return Promise.resolve(square);
    } catch (e) {
        return Promise.reject(e);
    }
    
}

tinhDienTich(4, 5, '6')
.then(res => console.log(res))
.catch(err => console.log(err + ''));



// let add = async () => {
//     let res = await addPr(4, 5);
//     console.log(res);
// }

// add()