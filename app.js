const bt1 = document.getElementById("btn");
const img = document.getElementById("im");
//client id Access Key (https://unsplash.com/)
const clientId = "_h56FGJDntiJTUNJsEEdQ8x4tOAoKBjVj5uvZOAqGek";


bt1.addEventListener("click",()=>{
    console.log("basıldı");
    var put = document.getElementById("input").value
    fetch("https://api.unsplash.com/search/photos?client_id="+ clientId +"&lang=tr&query=" + put).then((res)=>{
        return res.json();
    }).then((data)=>{
        document.getElementById("error").innerHTML = "";
        img.innerHTML = "";
        console.log(data)
        if(data.results.length == 0){
            document.getElementById("error").innerHTML = "fotoğraf bulunamamıştır";
        }else{
            var n = data.results.length;
            for(let i = 0; i < n; i++){
            var url = data.results[i].urls.small;
            img.innerHTML += "<div class='fo1'><img src='"+ url + "&h=400&h=400" +"'></div>"
            console.log(img.innerHTML.value)
        }
        }
        
        
    }).catch((err)=>{
        console.error(err);
        document.getElementById("error").innerHTML = "bilinmeyen bir hata oluştu :" + err;
    })
})