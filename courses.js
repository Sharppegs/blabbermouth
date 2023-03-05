import {courses} from './courseData.js'


const courseCards = document.getElementById("course-cards")

const courseDisplay = courses.map(course => 
        `<div class="course-card-info ${course.color}">
            <div class=course-titles>
                <h1 class="course-level">${course.level}</h1>
            </div>
            <h3 class="course-title">${course.name}</h3>
            <div>
                <h5 class="fw-bold">Course Length</h5>
                <p>${course.weeks}</p>
            </div>
            <div>
                <h5 class="fw-bold">When<h5>
                <p>${course.times}</p>
            </div>
            
            
        </div>`
).join(' ')

courseCards.innerHTML += courseDisplay




console.log(courses)
