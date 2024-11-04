// Mock data for blog posts (You can replace this with data from a backend/database)
const blogs = [
    { id: 1, title: "Exploring Anime Worlds", author: "John Doe", date: "2024-10-12", image: "img/1.jpg" },
    { id: 2, title: "The Rise of Shonen Series", author: "Jane Smith", date: "2024-09-30", image: "img/2.jpg" },
    { id: 3, title: "Fantasy vs Reality in Anime", author: "Alex Kim", date: "2024-09-20", image: "img/3.jpg" },
    { id: 4, title: "Top 10 Anime to Watch This Year", author: "Chris Lee", date: "2024-08-15", image: "img/4.jpg" },
    { id: 5, title: "Anime and the Art of Storytelling", author: "Emma Green", date: "2024-08-02", image: "img/5.jpg" },
    { id: 6, title: "The Influence of Anime on Pop Culture", author: "Michael Brown", date: "2024-07-25", image: "img/6.jpg" },
    { id: 7, title: "Underrated Anime Gems", author: "Sara White", date: "2024-07-12", image: "img/7.jpg" },
    { id: 8, title: "How to Start Your Anime Journey", author: "Daniel Black", date: "2024-06-30", image: "images/blog8.jpg" },
    { id: 9, title: "Anime Conventions: What to Expect", author: "Laura Adams", date: "2024-06-15", image: "images/blog9.jpg" },
    { id: 10, title: "Anime Genres Explained", author: "Robert Tanaka", date: "2024-05-28", image: "images/blog10.jpg" },
    { id: 11, title: "Slice of Life: Everyday Anime Stories", author: "Lily Brown", date: "2024-05-10", image: "images/blog11.jpg" },
    { id: 12, title: "Psychological Anime That Will Blow Your Mind", author: "Henry Chang", date: "2024-04-25", image: "images/blog12.jpg" },
    { id: 13, title: "The Best Soundtracks in Anime", author: "Sophia Lin", date: "2024-04-12", image: "images/blog13.jpg" },
    { id: 14, title: "Top Anime Movies to Watch", author: "Kevin Park", date: "2024-03-28", image: "images/blog14.jpg" },
    { id: 15, title: "How Anime Handles Mental Health", author: "Nina Brown", date: "2024-03-10", image: "images/blog15.jpg" },
    { id: 16, title: "Anime for Beginners: Where to Start", author: "Olivia Turner", date: "2024-02-22", image: "images/blog16.jpg" },
    // Add more blog entries as needed
];

let currentPage = 1;
const blogsPerPage = 4;

// Function to render blogs based on the current page
function renderBlogs() {
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = '';

    // Sort blogs by date (latest first)
    const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Paginate blogs
    const startIndex = (currentPage - 1) * blogsPerPage;
    const paginatedBlogs = sortedBlogs.slice(startIndex, startIndex + blogsPerPage);

    // Render each blog item
    paginatedBlogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.classList.add('blog-item');
        blogItem.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-image">
            <div class="blog-content">
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-meta">By ${blog.author} on ${blog.date}</p>
            </div>
        `;
        blogList.appendChild(blogItem);
    });
}

// Function to change the page and re-render blogs
function changePage(page) {
    currentPage = page;
    renderBlogs();
    updateActivePageButton();
}

// Function to highlight the active page button
function updateActivePageButton() {
    document.querySelectorAll('.pagination button').forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(`page${currentPage}`).classList.add('active');
}

// Initial render
renderBlogs();
updateActivePageButton();
