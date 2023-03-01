import {blogArticles} from './blogData.js'


const blogs = document.getElementById("blogs")

const blogsDisplay = blogArticles.map(article => 
        `<a href=${article.link}>
            <div class="blog-card ${article.color}">
                <div class="blog-card-body">
                <img class="article-image" src=${article.image} />
                <div class="blog-card-title">   
                <h1>${article.title}</h1>
                </div>
                
            
                <p class="lead">${article.tagline}</p>
                
                <button class="blog-link">Read More...</button>
                        
                </div>
            </div>
        </a>`
    
).join('')

blogs.innerHTML += blogsDisplay

