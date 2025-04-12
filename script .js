// DOM Elements
const adminLoginBtn = document.getElementById('admin-login');
const adminModal = document.getElementById('admin-modal');
const adminDashboard = document.getElementById('admin-dashboard');
const adminLoginForm = document.getElementById('admin-login-form');
const closeBtns = document.querySelectorAll('.close');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.admin-tab-content');
const addSchemeBtns = document.getElementById('add-scheme-btn');
const addNewsBtn = document.getElementById('add-news-btn');
const addJobBtn = document.getElementById('add-job-btn');
const addBeneficiaryBtn = document.getElementById('add-beneficiary-btn');
const beneficiaryFormModal = document.getElementById('beneficiary-form-modal');
const beneficiaryForm = document.getElementById('beneficiary-form');
const beneficiaryPhotoInput = document.getElementById('beneficiary-photo');
const beneficiaryPhotoPreview = document.getElementById('beneficiary-photo-preview');

// Mock data for demonstration
const mockSchemes = [
  {
    id: 1,
    title: "PM Kisan Samman Nidhi",
    category: "farmers",
    description: "Direct income support of ₹6,000 per year to farmers",
    eligibility: "Small and marginal farmers with cultivable land",
    documents: ["Aadhaar Card", "Land Records", "Bank Account Details"],
    applicationUrl: "https://pmkisan.gov.in/",
    imageUrl: "https://via.placeholder.com/300x200?text=PM+Kisan"
  },
  {
    id: 2,
    title: "PM-KISAN Credit Card",
    category: "farmers",
    description: "Credit support for farmers with concessional interest rates",
    eligibility: "All farmers eligible for PM-KISAN",
    documents: ["Aadhaar Card", "PM-KISAN Beneficiary Status", "Bank Account Details"],
    applicationUrl: "https://pmkisan.gov.in/",
    imageUrl: "https://via.placeholder.com/300x200?text=Kisan+Credit+Card"
  },
  {
    id: 3,
    title: "National Scholarship Portal",
    category: "students",
    description: "Single platform for various scholarship schemes",
    eligibility: "Students from economically weaker sections",
    documents: ["Aadhaar Card", "Income Certificate", "Previous Year Marksheet"],
    applicationUrl: "https://scholarships.gov.in/",
    imageUrl: "https://via.placeholder.com/300x200?text=Scholarship+Portal"
  },
  {
    id: 4,
    title: "Sukanya Samriddhi Yojana",
    category: "women",
    description: "Savings scheme for girl child education and marriage expenses",
    eligibility: "Parents/guardians of girl child below 10 years",
    documents: ["Child's Birth Certificate", "Guardian's ID Proof", "Address Proof"],
    applicationUrl: "https://www.indiapost.gov.in/",
    imageUrl: "https://via.placeholder.com/300x200?text=Sukanya+Samriddhi"
  },
  {
    id: 5,
    title: "PM Awas Yojana",
    category: "housing",
    description: "Housing subsidy for affordable housing",
    eligibility: "Economically weaker sections, lower income group",
    documents: ["Aadhaar Card", "Income Certificate", "Land Documents"],
    applicationUrl: "https://pmaymis.gov.in/",
    imageUrl: "https://via.placeholder.com/300x200?text=PM+Awas+Yojana"
  },
  {
    id: 6,
    title: "Atal Pension Yojana",
    category: "senior-citizens",
    description: "Pension scheme for unorganized sector",
    eligibility: "Workers in unorganized sector between 18-40 years",
    documents: ["Aadhaar Card", "Bank Account Details", "Mobile Number"],
    applicationUrl: "https://www.npscra.nsdl.co.in/",
    imageUrl: "https://via.placeholder.com/300x200?text=Atal+Pension+Yojana"
  }
];

const mockNews = [
  {
    id: 1,
    title: "PM Kisan 16th Installment Released",
    date: "2025-04-05",
    content: "The 16th installment of PM Kisan has been released. Check your bank account for the credited amount."
  },
  {
    id: 2,
    title: "Deadline for Scholarship Applications Extended",
    date: "2025-04-03",
    content: "The last date to apply for national scholarships has been extended to April 30, 2025."
  },
  {
    id: 3,
    title: "New Healthcare Scheme Announced",
    date: "2025-03-28",
    content: "Government announces new healthcare scheme for senior citizens. Registration starts next month."
  }
];

const mockJobs = [
  {
    id: 1,
    title: "Gram Rozgar Sevak",
    department: "Panchayati Raj",
    lastDate: "2025-04-25",
    vacancies: 120,
    qualifications: "Graduate in any discipline",
    url: "#"
  },
  {
    id: 2,
    title: "Primary School Teacher",
    department: "Education Department",
    lastDate: "2025-04-30",
    vacancies: 350,
    qualifications: "B.Ed. with 50% marks",
    url: "#"
  },
  {
    id: 3,
    title: "Block Development Officer",
    department: "Rural Development",
    lastDate: "2025-05-10",
    vacancies: 45,
    qualifications: "Master's degree in relevant field",
    url: "#"
  }
];

const mockBeneficiaries = [
  {
    id: 1,
    name: "Ramesh Kumar",
    scheme: "PM Kisan Samman Nidhi",
    photo: "https://via.placeholder.com/150x150?text=RK",
    quote: "The financial support helped me invest in better seeds and equipment. My yield has increased by 30%."
  },
  {
    id: 2,
    name: "Priya Sharma",
    scheme: "National Scholarship Portal",
    photo: "https://via.placeholder.com/150x150?text=PS",
    quote: "Thanks to the scholarship, I was able to complete my engineering degree without financial burden on my family."
  },
  {
    id: 3,
    name: "Lakshmi Devi",
    scheme: "PM Awas Yojana",
    photo: "https://via.placeholder.com/150x150?text=LD",
    quote: "After 40 years of living in a mud house, I now have a pucca house with proper facilities. It's a dream come true."
  }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  loadSchemes();
  loadNews();
  loadJobs();
  loadBeneficiaries();
  setupAdminFunctionality();
  setupEventListeners();
});

// Load schemes from API (mock data for now)
function loadSchemes() {
  const schemesContainer = document.getElementById('schemes-container');
  const schemesLoader = document.getElementById('schemes-loader');
  
  // Simulate API delay
  setTimeout(() => {
    // Hide loader
    schemesLoader.style.display = 'none';
    
    // Generate scheme cards
    mockSchemes.forEach(scheme => {
      const schemeCard = createSchemeCard(scheme);
      schemesContainer.appendChild(schemeCard);
    });
  }, 1000);
}

// Create a scheme card DOM element
function createSchemeCard(scheme) {
  const card = document.createElement('div');
  card.className = 'scheme-card';
  card.dataset.category = scheme.category;
  
  card.innerHTML = `
    <div class="scheme-img">
      <img src="${scheme.imageUrl}" alt="${scheme.title}">
    </div>
    <div class="scheme-content">
      <h3>${scheme.title}</h3>
      <p>${scheme.description}</p>
      <div class="scheme-eligibility">
        <h4>Eligibility:</h4>
        <p>${scheme.eligibility}</p>
      </div>
      <div class="scheme-documents">
        <h4>Required Documents:</h4>
        <ul>
          ${scheme.documents.map(doc => `<li>${doc}</li>`).join('')}
        </ul>
      </div>
      <a href="${scheme.applicationUrl}" class="btn" target="_blank">Apply Now</a>
    </div>
  `;
  
  return card;
}

// Load news from API (mock data for now)
function loadNews() {
  const newsContainer = document.getElementById('news-container');
  const newsLoader = document.getElementById('news-loader');
  
  // Simulate API delay
  setTimeout(() => {
    // Hide loader
    newsLoader.style.display = 'none';
    
    // Generate news
    mockNews.forEach(news => {
      const newsItem = document.createElement('div');
      newsItem.className = 'news-item';
      
      const date = new Date(news.date);
      const formattedDate = date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
      
      newsItem.innerHTML = `
        <div class="news-date">${formattedDate}</div>
        <h3>${news.title}</h3>
        <p>${news.content}</p>
      `;
      
      newsContainer.appendChild(newsItem);
    });
  }, 800);
}

// Load jobs from API (mock data for now)
function loadJobs() {
  const jobsContainer = document.getElementById('jobs-container');
  const jobsLoader = document.getElementById('jobs-loader');
  
  // Simulate API delay
  setTimeout(() => {
    // Hide loader
    jobsLoader.style.display = 'none';
    
    // Generate job listings
    mockJobs.forEach(job => {
      const jobItem = document.createElement('div');
      jobItem.className = 'job-item';
      
      const date = new Date(job.lastDate);
      const formattedDate = date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
      
      jobItem.innerHTML = `
        <h3>${job.title}</h3>
        <div class="job-details">
          <p><strong>Department:</strong> ${job.department}</p>
          <p><strong>Last Date:</strong> ${formattedDate}</p>
          <p><strong>Vacancies:</strong> ${job.vacancies}</p>
          <p><strong>Qualifications:</strong> ${job.qualifications}</p>
        </div>
        <a href="${job.url}" class="btn">Apply Now</a>
      `;
      
      jobsContainer.appendChild(jobItem);
    });
  }, 900);
}

// Load beneficiaries from API (mock data for now)
function loadBeneficiaries() {
  const beneficiaryContainer = document.getElementById('beneficiary-container');
  const beneficiaryLoader = document.getElementById('beneficiary-loader');
  
  // Simulate API delay
  setTimeout(() => {
    // Hide loader
    beneficiaryLoader.style.display = 'none';
    
    // Generate beneficiary cards
    mockBeneficiaries.forEach(beneficiary => {
      const beneficiaryCard = document.createElement('div');
      beneficiaryCard.className = 'beneficiary-card';
      
      beneficiaryCard.innerHTML = `
        <div class="beneficiary-photo">
          <img src="${beneficiary.photo}" alt="${beneficiary.name}">
        </div>
        <div class="beneficiary-content">
          <h3>${beneficiary.name}</h3>
          <p class="beneficiary-scheme">${beneficiary.scheme}</p>
          <p class="beneficiary-quote">"${beneficiary.quote}"</p>
        </div>
      `;
      
      beneficiaryContainer.appendChild(beneficiaryCard);
    });
  }, 1100);
}

// Setup admin functionality
function setupAdminFunctionality() {
  // Admin login button
  adminLoginBtn.addEventListener('click', () => {
    adminModal.style.display = 'block';
  });
  
  // Admin login form
  adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple authentication for demo
    if (username === 'admin' && password === 'admin123') {
      adminModal.style.display = 'none';
      adminDashboard.style.display = 'block';
      loadAdminDashboardData();
    } else {
      alert('Invalid credentials');
    }
  });
  
  // Close modals
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      adminModal.style.display = 'none';
      adminDashboard.style.display = 'none';
      beneficiaryFormModal.style.display = 'none';
    });
  });
  
  // Tab navigation
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all tabs
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab
      btn.classList.add('active');
      document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
    });
  });
  
  // Add scheme button
  addSchemeBtns.addEventListener('click', () => {
    console.log('Add scheme clicked');
    // Open scheme form modal (to be implemented)
  });
  
  // Add news button
  addNewsBtn.addEventListener('click', () => {
    console.log('Add news clicked');
    // Open news form modal (to be implemented)
  });
  
  // Add job button
  addJobBtn.addEventListener('click', () => {
    console.log('Add job clicked');
    // Open job form modal (to be implemented)
  });
  
  // Add beneficiary button
  addBeneficiaryBtn.addEventListener('click', () => {
    document.getElementById('beneficiary-form-title').textContent = 'Add Beneficiary';
    document.getElementById('beneficiary-id').value = '';
    beneficiaryForm.reset();
    beneficiaryPhotoPreview.src = '';
    populateSchemesDropdown();
    beneficiaryFormModal.style.display = 'block';
  });
  
  // Handle beneficiary form submission
  beneficiaryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('beneficiary-id').value;
    const name = document.getElementById('beneficiary-name').value;
    const scheme = document.getElementById('beneficiary-scheme').value;
    const quote = document.getElementById('beneficiary-quote').value;
    
    // Get photo if available
    let photo = beneficiaryPhotoPreview.src;
    if (!photo || photo === '') {
      photo = 'https://via.placeholder.com/150x150?text=' + name.split(' ').map(n => n[0]).join('');
    }
    
    // If id exists, update existing beneficiary, otherwise add new one
    if (id) {
      // Update existing beneficiary (demo only)
      console.log('Updating beneficiary:', { id, name, scheme, quote, photo });
    } else {
      // Add new beneficiary (demo only)
      console.log('Adding new beneficiary:', { name, scheme, quote, photo });
    }
    
    // Close modal
    beneficiaryFormModal.style.display = 'none';
  });
  
  // Alt+A to open admin panel only
document.addEventListener('keydown', (e) => {
  if (e.altKey && e.key === 'a') {
    e.preventDefault();
    adminModal.style.display = 'block';
  }
});
 
  beneficiaryPhotoInput.addEventListener('change', handlePhotoChange);
}

// Load data for admin dashboard
function loadAdminDashboardData() {
  // Load schemes
  const adminSchemesList = document.getElementById('admin-schemes-list');
  adminSchemesList.innerHTML = '';
  
  mockSchemes.forEach(scheme => {
    const schemeItem = document.createElement('div');
    schemeItem.className = 'admin-list-item';
    
    schemeItem.innerHTML = `
      <div class="admin-item-info">
        <h4>${scheme.title}</h4>
        <p>Category: ${scheme.category}</p>
      </div>
      <div class="admin-item-actions">
        <button class="btn edit-btn" data-id="${scheme.id}"><i class="fas fa-edit"></i></button>
        <button class="btn delete-btn" data-id="${scheme.id}"><i class="fas fa-trash"></i></button>
      </div>
    `;
    
    adminSchemesList.appendChild(schemeItem);
  });
  
  // Load news
  const adminNewsList = document.getElementById('admin-news-list');
  adminNewsList.innerHTML = '';
  
  mockNews.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.className = 'admin-list-item';
    
    const date = new Date(news.date);
    const formattedDate = date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    
    newsItem.innerHTML = `
      <div class="admin-item-info">
        <h4>${news.title}</h4>
        <p>Date: ${formattedDate}</p>
      </div>
      <div class="admin-item-actions">
        <button class="btn edit-btn" data-id="${news.id}"><i class="fas fa-edit"></i></button>
        <button class="btn delete-btn" data-id="${news.id}"><i class="fas fa-trash"></i></button>
      </div>
    `;
    
    adminNewsList.appendChild(newsItem);
  });
  
  // Load jobs
  const adminJobsList = document.getElementById('admin-jobs-list');
  adminJobsList.innerHTML = '';
  
  mockJobs.forEach(job => {
    const jobItem = document.createElement('div');
    jobItem.className = 'admin-list-item';
    
    const date = new Date(job.lastDate);
    const formattedDate = date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
    
    jobItem.innerHTML = `
      <div class="admin-item-info">
        <h4>${job.title}</h4>
        <p>Last Date: ${formattedDate} | Vacancies: ${job.vacancies}</p>
      </div>
      <div class="admin-item-actions">
        <button class="btn edit-btn" data-id="${job.id}"><i class="fas fa-edit"></i></button>
        <button class="btn delete-btn" data-id="${job.id}"><i class="fas fa-trash"></i></button>
      </div>
    `;
    
    adminJobsList.appendChild(jobItem);
  });
  
  // Load beneficiaries
  const adminBeneficiariesList = document.getElementById('admin-beneficiaries-list');
  adminBeneficiariesList.innerHTML = '';
  
  mockBeneficiaries.forEach(beneficiary => {
    const beneficiaryItem = document.createElement('div');
    beneficiaryItem.className = 'admin-list-item';
    
    beneficiaryItem.innerHTML = `
      <div class="admin-item-info">
        <h4>${beneficiary.name}</h4>
        <p>Scheme: ${beneficiary.scheme}</p>
      </div>
      <div class="admin-item-actions">
        <button class="btn edit-btn" data-id="${beneficiary.id}"><i class="fas fa-edit"></i></button>
        <button class="btn delete-btn" data-id="${beneficiary.id}"><i class="fas fa-trash"></i></button>
      </div>
    `;
    
    adminBeneficiariesList.appendChild(beneficiaryItem);
    
    // Add edit event listener
    const editBtn = beneficiaryItem.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
      openBeneficiaryEditForm(beneficiary);
    });
    
    // Add delete event listener
    const deleteBtn = beneficiaryItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      if (confirm(`Are you sure you want to delete ${beneficiary.name}?`)) {
        console.log('Deleting beneficiary:', beneficiary.id);
        // Delete functionality would be implemented with actual API
      }
    });
  });
}

// Open beneficiary edit form
function openBeneficiaryEditForm(beneficiary) {
  document.getElementById('beneficiary-form-title').textContent = 'Edit Beneficiary';
  document.getElementById('beneficiary-id').value = beneficiary.id;
  document.getElementById('beneficiary-name').value = beneficiary.name;
  document.getElementById('beneficiary-quote').value = beneficiary.quote;
  beneficiaryPhotoPreview.src = beneficiary.photo;
  
  populateSchemesDropdown(beneficiary.scheme);
  beneficiaryFormModal.style.display = 'block';
}

// Populate schemes dropdown
function populateSchemesDropdown(selectedScheme = '') {
  const dropdown = document.getElementById('beneficiary-scheme');
  dropdown.innerHTML = '';
  
  mockSchemes.forEach(scheme => {
    const option = document.createElement('option');
    option.value = scheme.title;
    option.textContent = scheme.title;
    if (scheme.title === selectedScheme) {
      option.selected = true;
    }
    dropdown.appendChild(option);
  });
}

// Handle photo change
function handlePhotoChange(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      beneficiaryPhotoPreview.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Setup additional event listeners
function setupEventListeners() {
  // Sidebar category filters
  const categoryLinks = document.querySelectorAll('.sidebar-menu a[data-category]');
  categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      document.querySelectorAll('.sidebar-menu a').forEach(a => a.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');
      
      const category = link.dataset.category;
      filterSchemes(category);
    });
  });
  
  // "All Schemes" link
  const allSchemesLink = document.querySelector('.sidebar-menu a:not([data-category])');
  if (allSchemesLink) {
    allSchemesLink.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      document.querySelectorAll('.sidebar-menu a').forEach(a => a.classList.remove('active'));
      
      // Add active class to clicked link
      allSchemesLink.classList.add('active');
      
      // Show all schemes
      document.querySelectorAll('.scheme-card').forEach(card => {
        card.style.display = 'block';
      });
    });
  }
  
  // Search functionality
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  searchBtn.addEventListener('click', () => {
    searchSchemes(searchInput.value);
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      searchSchemes(searchInput.value);
    }
  });
  
  // Language toggle
  const languageBtn = document.querySelector('.language-btn');
  languageBtn.addEventListener('click', () => {
    const currentLang = languageBtn.textContent;
    if (currentLang === 'हिंदी') {
      languageBtn.textContent = 'English';
      // Here you would implement actual language change functionality
      console.log('Switching to Hindi');
    } else {
      languageBtn.textContent = 'हिंदी';
      console.log('Switching to English');
    }
  });
  
  // Close modals when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === adminModal) {
      adminModal.style.display = 'none';
    }
    if (e.target === adminDashboard) {
      adminDashboard.style.display = 'none';
    }
    if (e.target === beneficiaryFormModal) {
      beneficiaryFormModal.style.display = 'none';
    }
  });
}

// Filter schemes by category
function filterSchemes(category) {
  document.querySelectorAll('.scheme-card').forEach(card => {
    if (card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Search schemes
function searchSchemes(query) {
  query = query.toLowerCase().trim();
  
  if (query === '') {
    // If search is empty, show all schemes
    document.querySelectorAll('.scheme-card').forEach(card => {
      card.style.display = 'block';
    });
    return;
  }
  
  document.querySelectorAll('.scheme-card').forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    const eligibility = card.querySelector('.scheme-eligibility p').textContent.toLowerCase();
    
    if (title.includes(query) || description.includes(query) || eligibility.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
