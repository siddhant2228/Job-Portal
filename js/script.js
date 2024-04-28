function toggleLanguage() {
    const languageButton = document.querySelector('.language-selector button');
    const currentLanguage = languageButton.textContent.trim();
    const languageData = {
        'EN': {
            'home': 'Home',
            'about': 'About',
            'all jobs': 'All Jobs',
            'contact us': 'Contact Us',
            'account': 'Account',
            
        },
        'JP': {
            'home': 'ホーム',
            'about': '求人情報',
            'all jobs': '日本について',
            'contact us': '求人情報を検索...',
            'account': '検索',
            'languageButton': 'EN',
            
        }
    };

    // Toggle between languages
    if (currentLanguage === 'EN') {
        languageButton.textContent = 'JP';
        document.querySelector('nav ul li:nth-child(1) a').textContent = languageData.JP.home;
        document.querySelector('nav ul li:nth-child(2) a').textContent = languageData.JP.jobListings;
        document.querySelector('nav ul li:nth-child(3) a').textContent = languageData.JP.aboutJapan;
        document.getElementById('search-input').placeholder = languageData.JP.searchPlaceholder;
        document.getElementById('search-button').textContent = languageData.JP.searchButton;
        populateJobListings(languageData.JP.jobListingsJP);
    } else {
        languageButton.textContent = 'EN';
        document.querySelector('nav ul li:nth-child(1) a').textContent = languageData.EN.home;
        document.querySelector('nav ul li:nth-child(2) a').textContent = languageData.EN.jobListings;
        document.querySelector('nav ul li:nth-child(3) a').textContent = languageData.EN.aboutJapan;
        document.getElementById('search-input').placeholder = languageData.EN.searchPlaceholder;
        document.getElementById('search-button').textContent = languageData.EN.searchButton;
        populateJobListings(languageData.EN.jobListingsEN);
    }
}

// Function to fetch real-time job listings from API
async function fetchJobListingsFromAPI() {
    try {
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();
        populateJobListings(data.jobListings);
    } catch (error) {
        console.error('Error fetching job listings:', error);
    }
}

// Function to initialize Google Maps
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.6895, lng: 139.6917 }, // Tokyo coordinates
        zoom: 8,
    });
}

// Function to add animations or micro-interactions
function addAnimations() {
    // Implement animations or micro-interactions here
}

// Function to dynamically populate job listings
function populateJobListings(jobs) {
    const jobListingContainer = document.getElementById('job-listing-container');
    jobListingContainer.innerHTML = '';

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        jobListingContainer.appendChild(jobCard);
    });
}

// Function to search job listings
function searchJobs() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredJobs = jobListings.filter(job =>
        job.title.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm) ||
        job.description.toLowerCase().includes(searchTerm)
    );
    populateJobListings(filteredJobs);
}




let navbar = document.querySelector(' .header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber =>{
    inputNumber.oninput = () =>{
        if(inputNumber.value.length > inputNumber.maxLength ) inputNumber.value
        = inputNumber.value.slice(0, inputNumber.maxLength);
            
 };
});


  