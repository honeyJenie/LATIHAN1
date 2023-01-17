const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
                let cek = dataDay.find((item)=>{
                    return item === day
                })
                if(cek){
                    resolve(cek)
                }else{
                    reject(new Error('Hari ini bukan hari kerja'))
                }
            }, 3000)
    })
};

//const cekhari = cekHariKerja("sabtu").then((res)=>{console.log(`${res} = hari kerja`)}).catch((err)=>{console.error(err)})

const cekhari2 = async()=>{
    try {
        res = await cekHariKerja("senin")
        console.log(`${res} = hari kerja say`)
    } catch (err) {
        console.log(err)
    }
}
console.log(cekhari2())

