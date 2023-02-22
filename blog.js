import {blogArticles} from './blogData.js'


const blogs = document.getElementById("blogs")

const blogsDisplay = blogArticles.map(article => 
        `<div class="blog-card">
            <div class="blog-card-body">
            <img class="article-image" src=${article.image} />
             <div class="blog-card-title">   
            <h1>${article.title}</h1>
            </div>
            
           
            <p class="lead">${article.tagline}</p>
               
            <a href=${article.link} class="blog-link">Read More...</a>
                      
            </div>
        </div>`
    
).join('')

blogs.innerHTML += blogsDisplay