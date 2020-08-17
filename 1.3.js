const janjian = (day) => {
    return new Promise((resolve, reject)=>{
        console.log('B : Kita ketemuan yuk ?')
        console.log('R : Kapan ?')
        setTimeout(() => {
            const dataDay = ['sabtu','minggu','senin']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek=='sabtu'){
                resolve('Kita ketemu jam 09.00 WIB')
            }else if(cek=='minggu'){
                resolve('Kita ketemu jam 14.00 WIB')
            }else if(cek=='senin'){
                resolve('Kita ketemu jam 13.00 WIB')
            }else{
                reject(new Error('Aku sibuk'))
            }
        }, 3000);
    })
}

// (then catch)
janjian('sabtu')
.then((response) => {
    console.log(response)
}).catch((error) => {
    console.log(error)
})

// const akuNembakDia = (hati) => {
//     return new Promise((resolve, reject)=>{
//         console.log('Bag : Aku suka kamu...')
//         console.log('Ros : Emmmmmmmmm......')
//         setTimeout(() => {
//             const status = hati
//             if(status){
//                 resolve('Kita Jadian')
//             }else{
//                 reject('Kamu terlalu baik buat aku')
//             }
//         }, 10000);
//     })
// }

// // (then catch)
// akuNembakDia(true)
// .then((response) => {
//     console.log('Ros :',response)
//     console.log('Hidup bahagia selamanya')
// }).catch((error) => {
//     console.log('Ros :',error)
//     console.log('Adek kakaan')
// })