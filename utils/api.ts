
export async function createNewEntry (){

    const res = await fetch (new Request('http://localhost:3000/api/journal', {
        method : 'POST'
    }))
    console.log(res);
    
    if(res.ok){
        const data = await res.json()
        return data.data
    }
}