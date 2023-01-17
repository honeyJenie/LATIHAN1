const getMonth = (callback)  => {
    setTimeout(()=>{
        let error = false;
        let month = ["January", "February", "March", "April", "May", "Juni", "Juli", "August", 
            "September", "October", "November", "Desember"]
        
        if (!error){
            callback(null, month)
        }else{
            callback(new Error("Sorry data not found"), [])
        }
    }, 4000)
}

getMonth((a, b)=>{
    b.map((item)=>{console.log(item)})
})
