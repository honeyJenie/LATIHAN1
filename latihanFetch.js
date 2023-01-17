// 'https://jsonplaceholder.typicode.com/users'

const ambilData = async (url)=>{
    try {
        let res = await fetch(url);
        const data = await res.json();
        data.map((val,ix)=>{
            console.log(val.name)
        })
    } catch (error) {
        console.log(error)
    }
}

//ambilData('https://jsonplaceholder.typicode.com/users')

fetch('https://jsonplaceholder.typicode.com/users')
.then(async (res)=>{
    const data = await res.json();
    data.map((val,ix)=>{
        console.log(val.name, ix)
    })
})
.catch((error)=>{
    console.log(error)
})
