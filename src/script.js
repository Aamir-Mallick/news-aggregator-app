"use strict";



let input = document.getElementById('search');

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {

    fetchNewsApi(e.target.value);

   }


 })
 
async function fetchNewsApi(fill) {

document.getElementById('loading').style.display = "";

let url = await `http://newsapi.org/v2/everything?q=${fill}&from=2020-02-15&to=2020-02-15&sortBy=popularity&apiKey=ee6b965b04b94b2d8376bfae914af2be`;
const response = await fetch(url);
const data = await response.json();
console.log(data);



 document.getElementById("main-container").innerHTML =  `

${data.articles.map(function(x) {

     return `
           <li>
             <div class="card">
              <img src="${x.urlToImage}" class="card-img-top" alt="..." class="article-img"><br/>
              <h2 class="article-title">${x.title}</h2>
              <p class="article-description">${x.description}</p>
              <span class="article-author">${x.author}</span>
              <a class="article-link" href="${x.url}">Go for full article</a>
            </div>    
           </li>
 `
    }).join('') }
  
  `


if (data.articles.length === 0) {
   document.getElementById('msg').textContent = "result not found"
 }

  input.addEventListener('input', evt => {
  const value = input.value;
 

  if (value == '') {
      
   
      document.getElementById('msg').textContent = ""

      fetchNewsApi("apple");
      document.getElementById('loading').style.display = "none";
  } 

})

  document.getElementById('loading').style.display = "none";

}

  fetchNewsApi("apple");

 

