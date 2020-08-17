const { get } = require("http");

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari','Februari','Maret','April','Mei','Juni','Juli',
        'Agustus','September','Oktober','November','Desember']
        if(!error){
            callback(null, month)
        } else{
            callback(new Error('Sorry data not found',[]))
        }
    }, 4000);
}


const callback = (error, result) => {
    if(!error){
        return result.map(num => console.log(num))
    }else{
        console.log(error)
    }
}

getMonth(callback)

// Negasi/kebalikan	!