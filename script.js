window.addEventListener("DOMContentLoaded",()=>{
    let contents= document.querySelector(".content");
    let content="";
    let more= document.querySelector(".other")
    console.log(more)
    let story= document.querySelector(".stories");
    console.log(story);
    ;

 for (const infos of info) {
    let reel=
    `
    <div class="stories">
      <article class="story">
          <img class="str" src="${infos.photo}" alt="">
          <label class="person">${infos.name} </label>
      </article>
  </div>
    `
console.log(reel)
story.innerHTML+=reel;

 }
 for (const secs of sec) {
    let other=
    `
    <div class="contain">
                <img class="str2" src="${secs.photo}" alt="">
                <label class="person">
                    <p class="name">${secs.name}</p>
                    <p class="acc">${secs.status}</p>
                </label>
                <button class="into">follow</button>
            </div>
    `
console.log(other)
more.innerHTML+=other;

 }
 for (const conts of cont) {
    let content=
    `
    <article class="posts">
    <div class="upload">
 <article class="uploader">
    <img class="str3" src="${conts.photo}" alt="">
   <p class="poster">${conts.name} <span class="time">.${Math.floor(Math.random()*6)}d</span></p> 
   
</article><button class="more">...</button>
</div>
<section class="image">
    <img class="photo" src="${conts.post}" alt="">
</section>    
<div class="reactions">
    <label class="react">
        <div class="left">
        <svg aria-label="Like" class="like" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
        <svg aria-label="Comment" class="commenting" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        <svg aria-label="Share Post" class="share" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
    </div>
        <div class="right">
            <svg aria-label="Save" class="save" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        </div>
    </label><br>
    <label>${Math.floor(Math.random()*1000)} likes</label><br>
    <label >${conts.descript}</label><br>
    <label class="">view all ${Math.floor(Math.random()*100)} comments</label><br>
    <div class="comments">      
  <input class="comment" type="text" placeholder="Add a comment">
    <button class="emoji">👩‍💻</button>
</div>

</div>
</article>    
    `
contents.innerHTML+=content;
}
})
var cont=[
    {
        name:"you",
        descript:"love and live",
        post:"https://images.unsplash.com/photo-1626469028023-896eda77d814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        photo:"data:image/jpeg;base64,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",
        status:true
    },
    {
        name:"Bipul",
        descript:"world is beauty",
        post:"https://images.unsplash.com/photo-1631094237046-01a50d3d9a98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        photo:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDRANDQ8NDQ4NDQ0REBAODxANDw8PFhIWFhYRExMYHSggGBomGxMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0ODw0NDysZFRkyKzctKysuKzcrKzctKys3KystKzctNysrNysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQQFBgMCB//EADUQAQACAAMEBwYFBQEAAAAAAAABAgMFEQQhMVESQVJxgZKxFSIzobLBEzJhkdEjQnKC8HP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A/RJAdGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfXTAfIAAAAAAAAAAAAaINVIjVIgAAAAAAAAAAAAAAAAAAAAAAABXfuji0Nkyq1t956Mco46LGVbDER+JbfaY3RPVDUYtVVwsvwa8K6zHXOsrFcOvKP2fSUV5WwKTxrG9Ux8rw7R7sdGf010aCBHN7Tsd8P80axzjgruqxKRas1nfExpLntu2acK+nGs8JalFYBpAAAAAAAAAAAAAAAAAABcyvZ4vib41isaypN3JaaYfS67SzVaEQkGVQkQACQQrbds8YlJjTfG+J5LQI5KRZzHDiuNaI69/7qzegISqAAAAAAAAAAAAAAAAGjpdirEYVYjd7sOZdRsvw6f4V9Gar2EJZUAAAAQlAMXO49+s84nx4M1qZ7xp3W+zLWICEtoAAAAAAAAAAAAAAAAh0mXYnSwqzyjT9tznGtkmNG/Dnjxju/wClnpWvAhLKgAAAAPm9oiNZ4QDDzrF1xYr2Y9VB6bXidO9rc5nTueTSCQVABQAAAAAAAAAAAAAAfeBizS8XjjEvghKOo2fGi9YtExv5dUvVzmwbX+FbfrNZ4x93QYeJFoiY4Swr7AFAAGVm+17pwq8d3S9Vjb9tjDrpG+86xGnVPOWBa0zMzO+Z4rEQA2gAAAAAAAAAAAAAAAAAABAD22far4f5Z8J3w8RnFa2z5x1Xr4ws1zXB5z5bfw5+SJTBu3zfCjhrbwmPVSxc1xba6aVju3s81XB9XvMzrMzMygFQAUAAAAAAAAAAAAAAAIgB9YeHa06ViZ8F7Ycum/vX1iu7TnLZwsClY0rERozarHwMpvO+89H9FymUYUcZvPjp9mgM6YpeysHlPmk9l4HZnzSugql7KwOzPmlHsrA7M+aV4BR9lYHZnzSeysDsz5pXgFH2VgdmfNL5tlGFPCbx3TH3hoBoyb5LH9t58a6qmNlmNX+3pxzrOvy4uhF1MclaJidJiYmOqd0jqMfZ6XjS9Yn1julibdl9sPfHvU59cd7UopAKgAAAAAAAAAA1suy6JiL38IV8p2bp36U8K+reiGLVIhIIqEgAAAAAAAAAAAiY13SkBg5nsH4c9On5J6uzP8KDq70i0TWY1iY0mHM7XgTh3mk9XCecdTUqPIBpAAAAAABNKzMxEcZmIhC/k2D0sXpTwpGvjPD7pVbGybPGHSKx4zznm9gYUAAAAAAAAAAAAAAAAZ2dYHSp0440+mWi+ManSravarMfIHKiIS6MgAAAAADbyKv9O087+kR/LEb+TR/Rj9bW9dPsnSxeAYUAAAAAAAAAAAAAAAAAByuPXS9o5XtHzfD22z4uJ/6X9ZeLpGQAAAAAB0OUfAr/ALfVLnnQZR8Cvfb6pZ6WLoDKgAAAAAAAAAAAAAAAAiZSDmNu+Nif52eKzmUaY9++J+UKzpEABAAAAB0GT/Ar32+qQZ6WLoDKgAAAAAAAAAAAAAAAIlIA5zNfj3/1+mFUG4gAqAAP/9k=",
        status:true
    },
    {
        name:"Prbesh",
        descript:"chase your dreams",
        photo:"https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        post:"https://images.unsplash.com/photo-1635932992974-8b4425231d4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        status:true
    },
    {
        name:"suyog",
        descript:"love yourslf and money",
        post:"https://images.unsplash.com/photo-1626847037657-fd3622613ce3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        photo:"https://images.unsplash.com/photo-1619412112597-0ac2d2a2d0f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:true
    },
    {
        name:"Rabi", descript:"chapriboy",
        post:"https://plus.unsplash.com/premium_photo-1664117436431-aaa0d75814fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        photo:"https://images.unsplash.com/photo-1553658024-39485fea1f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:true
    },
    {
        name:"Raze",
        descript:"beaty inside",
        post:"https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        photo:"https://images.unsplash.com/photo-1639103616650-487540dc0384?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        status:false
    },
    {
        name:"Abhi",
        descript:"go on",
        post:"https://images.unsplash.com/photo-1626469215775-5bb781dcfd99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        photo:"https://images.unsplash.com/photo-1624024000238-b31760e3cf02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:false
    },
    {
        name:"Bhupesh",
        post:"https://images.unsplash.com/photo-1624024516439-8f0ff83a3904?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        photo:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:true
    },
   
   

]
var info=[
    {
        name:"you",
        photo:"data:image/jpeg;base64,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",
        status:true
    },
    {
        name:"Bipul",
        photo:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDRANDQ8NDQ4NDQ0REBAODxANDw8PFhIWFhYRExMYHSggGBomGxMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0ODw0NDysZFRkyKzctKysuKzcrKzctKys3KystKzctNysrNysrLSsrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQQFBgMCB//EADUQAQACAAMEBwYFBQEAAAAAAAABAgMFEQQhMVESQVJxgZKxFSIzobLBEzJhkdEjQnKC8HP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A/RJAdGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfXTAfIAAAAAAAAAAAAaINVIjVIgAAAAAAAAAAAAAAAAAAAAAAABXfuji0Nkyq1t956Mco46LGVbDER+JbfaY3RPVDUYtVVwsvwa8K6zHXOsrFcOvKP2fSUV5WwKTxrG9Ux8rw7R7sdGf010aCBHN7Tsd8P80axzjgruqxKRas1nfExpLntu2acK+nGs8JalFYBpAAAAAAAAAAAAAAAAAABcyvZ4vib41isaypN3JaaYfS67SzVaEQkGVQkQACQQrbds8YlJjTfG+J5LQI5KRZzHDiuNaI69/7qzegISqAAAAAAAAAAAAAAAAGjpdirEYVYjd7sOZdRsvw6f4V9Gar2EJZUAAAAQlAMXO49+s84nx4M1qZ7xp3W+zLWICEtoAAAAAAAAAAAAAAAAh0mXYnSwqzyjT9tznGtkmNG/Dnjxju/wClnpWvAhLKgAAAAPm9oiNZ4QDDzrF1xYr2Y9VB6bXidO9rc5nTueTSCQVABQAAAAAAAAAAAAAAfeBizS8XjjEvghKOo2fGi9YtExv5dUvVzmwbX+FbfrNZ4x93QYeJFoiY4Swr7AFAAGVm+17pwq8d3S9Vjb9tjDrpG+86xGnVPOWBa0zMzO+Z4rEQA2gAAAAAAAAAAAAAAAAAABAD22far4f5Z8J3w8RnFa2z5x1Xr4ws1zXB5z5bfw5+SJTBu3zfCjhrbwmPVSxc1xba6aVju3s81XB9XvMzrMzMygFQAUAAAAAAAAAAAAAAAIgB9YeHa06ViZ8F7Ycum/vX1iu7TnLZwsClY0rERozarHwMpvO+89H9FymUYUcZvPjp9mgM6YpeysHlPmk9l4HZnzSugql7KwOzPmlHsrA7M+aV4BR9lYHZnzSeysDsz5pXgFH2VgdmfNL5tlGFPCbx3TH3hoBoyb5LH9t58a6qmNlmNX+3pxzrOvy4uhF1MclaJidJiYmOqd0jqMfZ6XjS9Yn1julibdl9sPfHvU59cd7UopAKgAAAAAAAAAA1suy6JiL38IV8p2bp36U8K+reiGLVIhIIqEgAAAAAAAAAAAiY13SkBg5nsH4c9On5J6uzP8KDq70i0TWY1iY0mHM7XgTh3mk9XCecdTUqPIBpAAAAAABNKzMxEcZmIhC/k2D0sXpTwpGvjPD7pVbGybPGHSKx4zznm9gYUAAAAAAAAAAAAAAAAZ2dYHSp0440+mWi+ManSravarMfIHKiIS6MgAAAAADbyKv9O087+kR/LEb+TR/Rj9bW9dPsnSxeAYUAAAAAAAAAAAAAAAAAByuPXS9o5XtHzfD22z4uJ/6X9ZeLpGQAAAAAB0OUfAr/ALfVLnnQZR8Cvfb6pZ6WLoDKgAAAAAAAAAAAAAAAAiZSDmNu+Nif52eKzmUaY9++J+UKzpEABAAAAB0GT/Ar32+qQZ6WLoDKgAAAAAAAAAAAAAAAIlIA5zNfj3/1+mFUG4gAqAAP/9k=",
        status:true
    },
    {
        name:"Prbesh",
        photo:"https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:true
    },
    {
        name:"suyog",
        photo:"https://images.unsplash.com/photo-1619412112597-0ac2d2a2d0f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:true
    },
    {
        name:"Rabi",
        photo:"https://images.unsplash.com/photo-1553658024-39485fea1f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:true
    },
    {
        name:"Raze",
        photo:"https://images.unsplash.com/photo-1639103616650-487540dc0384?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        status:false
    },
    {
        name:"Abhi",
        photo:"https://images.unsplash.com/photo-1624024000238-b31760e3cf02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:false
    },
    {
        name:"Bhupesh",
        photo:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:true
    },
   
   

]

var sec=[
    {
        name:"Prbesh",
        photo:"https://plus.unsplash.com/premium_photo-1689606093808-3cb4393248d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:'cool-boyyyyy'
    },
    {
        name:"suyog",
        photo:"https://images.unsplash.com/photo-1619412112597-0ac2d2a2d0f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:"devil on way"
    },
    {
        name:"Rabi",
        photo:"https://images.unsplash.com/photo-1553658024-39485fea1f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:"Girls lover"
    },
    {
        name:"Raze",
        photo:"https://images.unsplash.com/photo-1639103616650-487540dc0384?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluc3RhZ3JhbSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        status:"certified chapri"
    },
    {
        name:"Abhi",
        photo:"https://images.unsplash.com/photo-1624024000238-b31760e3cf02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:"@bhilama"
    },
    {
        name:"Bhupesh",
        photo:"https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        status:"Bhupendrajogi"
    },
   
   

]


