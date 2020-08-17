const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

//(then catch)
// proses synchronous (berurutan), proses dibawahnya akan dibuat menunggu sampai proses yang diatasnya selesai.
// untuk mengolah hasil sukses dan gagal.
// cekHariKerja('selasa')
// .then((response) => {
//     console.log(response,'adalah hari kerja')
// }).catch((error) => {
//     console.log(error)
// })

//try catch
// mengatasi Error pada async/await
// proses asynchronous, hasil eksekusi tidak harus berurutan melainkan dari waktu proses.
// const blabla = async() =>{
//     try{
//         const result = await cekHariKerja('sabtu')
//         console.log(result, 'adalah hari kerja')
//     }catch(error){
//         console.log(error)
//     }finally{
//         console.log('selesai')
//     }
// }
    
// blabla()