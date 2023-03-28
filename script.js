async function fetchChars(urls) {
    var chars = [];
    for (var url=0; url<urls.length; url++) {
        try {
            var res = await fetch(urls[url]);
            var data = await res.json();
            chars.push({
                name: data.name,
                gender: data.gender
            });
        } catch (ex) {
            console.log(ex)
        }
    }
    console.log("chars", chars)
    return chars;
}


async function foo()
{
var res=await fetch("https://www.anapioficeandfire.com/api/books");
var res2=await res.json();
//var fin=await fetch("https://www.anapioficeandfire.com/api/characters");
//var fin2=await fin.json();

//console.log(res2);

//    for(var i=0;i<res2.length;i++){
        var container=document.createElement("div");
    container.className="container";
    var row=document.createElement("div");
    row.classList.add("row", "p-3");
    row.style.background="pink";
    container.append(row);
    for(var i=0;i<res2.length;i++)
    {
        var chars = await fetchChars(res2[i].characters.slice(0, 5));
        var charsTags = ``;
        for (var char=0; char<chars.length; char++) {
            charsTags += `<li class="list-group-item">${chars[char].name}</li>`
        }

        row.innerHTML+=`<div class="col-md-4 p-2"> 
        <div class="card">
  <div class="card-body">
  <p class="card-text"> Name:${res2[i].name}</p>
    <p class="card-text">isbn: ${res2[i].isbn}</p>
    <p class="card-text">authors: ${res2[i].authors}</p>
    <p class="card-text">No of pages: ${res2[i].numberOfPages}</p>
    <div id="${res2[i].isbn}">
        <ul class="list-group list-group-flush"><b>Characters<b>
            ${charsTags}
        </ul>
    </div>
  </div>
</div>
        </div>`         
    }
    
  
    
    document.body.append(container);

}foo()