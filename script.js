let url="https://jsonplaceholder.typicode.com/users";
// ?_sort=votes&_order=asc
let getdata= async (url)=>{
    let a=await fetch(`${url}?_sort=name&_order=asc`);
    let b=await a.json();
    console.log(b)
    display(b);
}
getdata(url)
function display(b){
    document.getElementById("tier").innerHTML=""
    b.forEach((v)=>{
        let di=document.createElement("div");
        let a=document.createElement("h1");
        a.textContent=v.name;
        di.append(a);
        document.getElementById("tier").append(di);
    })
}