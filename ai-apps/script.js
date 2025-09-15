// AI Apps Showcase JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize apps
    initializeOpexApp();
    initializeRoiApp();
    initializeMarketApp();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('button[data-mobile-menu]');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
});

// Chatbot functionality
let chatStep = 0;
let bookingData = {};
let serviceSpecificStep = 0;
let currentService = '';

function sendMessage() {
    // Implementation for sending messages
}

function selectService(service) {
    addUserMessage(service);
    bookingData.service = service;
    currentService = service;
    
    setTimeout(() => {
        addBotMessage(`Great choice! ${service} it is. Let's start with your company name.`);
        chatStep = 1;
        serviceSpecificStep = 0;
    }, 1000);
}

function processChatMessage(message) {
    switch(chatStep) {
        case 1:
            bookingData.company = message;
            addBotMessage(`Perfect, ${message}! What's your contact name?`);
            chatStep = 2;
            break;
        case 2:
            bookingData.contact = message;
            addBotMessage(`Nice to meet you, ${message}! What's your business email address? (Note: We require business domains)`);
            chatStep = 3;
            break;
        case 3:
            bookingData.email = message;
            if (isPersonalEmail(message)) {
                addBotMessage(`I notice that's a personal email domain. We typically require business emails, but I can make a note for admin review. What's your phone number?`);
            } else {
                addBotMessage(`Great! What's your phone number?`);
            }
            chatStep = 4;
            break;
        case 4:
            bookingData.phone = message;
            addBotMessage(`Thanks! Now I need the full service location address including street, city, state, ZIP, and if applicable - building name, floor, and suite number.`);
            chatStep = 5;
            break;
        case 5:
            bookingData.address = message;
            addBotMessage(`Perfect! Any general notes about the job or special access instructions?`);
            chatStep = 6;
            break;
        case 6:
            bookingData.notes = message;
            addBotMessage(`Great! Please upload up to 5 photos (clear, well-lit): Wide shot of the full area, closer detail shots, access points, and any obstacles. You can describe them for this demo.`);
            chatStep = 7;
            break;
        case 7:
            bookingData.photos = message;
            addBotMessage(`Perfect! Now I need some specific details about your ${currentService} service. Let me ask you a few targeted questions...`);
            chatStep = 8;
            serviceSpecificStep = 1;
            setTimeout(() => {
                askServiceSpecificQuestions();
            }, 1500);
            break;
        case 8:
            handleServiceSpecificResponse(message);
            break;
        case 9:
            bookingData.preferredDateTime = message;
            addBotMessage(`Excellent! 🎉 Your ${bookingData.service} request for ${bookingData.company} is now complete and pending review. You'll receive an email confirmation shortly with booking ID, and we'll get back to you within 2 hours with approval and next steps. Need something urgent? Call (917) 535-3787. Thanks for choosing Highline Building Services!`);
            chatStep = 0;
            serviceSpecificStep = 0;
            break;
        default:
            addBotMessage("I'd be happy to help you schedule a service! Please select one of the service options above to get started with our comprehensive intake process.");
    }
}

function askServiceSpecificQuestions() {
    switch(currentService) {
        case 'Deep Cleaning':
            switch(serviceSpecificStep) {
                case 1:
                    addBotMessage("What's the approximate square footage of the space to be cleaned? (Must be between 300-200,000 sq ft)");
                    break;
                case 2:
                    addBotMessage("What type of space is this? (office / medical / retail / industrial / mixed)");
                    break;
                case 3:
                    addBotMessage("How many floors or levels need to be serviced?");
                    break;
                case 4:
                    addBotMessage("What type of flooring? (carpet / VCT / LVT / stone / tile / mixed)");
                    break;
                case 5:
                    addBotMessage("Is there a kitchen or break area? If yes, how many?");
                    break;
                case 6:
                    addBotMessage("How many restrooms or fixtures need cleaning?");
                    break;
                case 7:
                    addBotMessage("When was the last professional deep clean? (date or 'unknown')");
                    break;
                case 8:
                    addBotMessage("Is after-hours cleaning acceptable? (yes/no)");
                    break;
                case 9:
                    addBotMessage("Is a Certificate of Insurance (COI) required? If yes, please specify building requirements.");
                    break;
                case 10:
                    addBotMessage("Please describe freight/loading dock access and hours.");
                    break;
                case 11:
                    addBotMessage("Who will be the on-site contact day-of? (name + phone)");
                    break;
                default:
                    addBotMessage("Finally, when would you like to schedule this? I have availability tomorrow at 2:00 PM, Friday at 10:00 AM, or Monday at 9:00 AM.");
                    chatStep = 9;
            }
            break;
            
        case 'Office Walkthrough':
            switch(serviceSpecificStep) {
                case 1:
                    addBotMessage("What's the total approximate square footage of your office?");
                    break;
                case 2:
                    addBotMessage("How many employees or daily occupancy does the space have?");
                    break;
                case 3:
                    addBotMessage("What are your days and hours of operation?");
                    break;
                case 4:
                    addBotMessage("Do you currently have a cleaning provider? If yes, what's the scope and any pain points?");
                    break;
                case 5:
                    addBotMessage("Which areas should we prioritize? (reception, conference rooms, pantries, restrooms, executive offices, labs, etc.)");
                    break;
                case 6:
                    addBotMessage("What are the security/access requirements? (badges, escort, COI needed?)");
                    break;
                case 7:
                    addBotMessage("Any parking or loading notes for our team?");
                    break;
                default:
                    addBotMessage("Perfect! When would you prefer the walkthrough? I have availability tomorrow at 2:00 PM, Friday at 10:00 AM, or Monday at 9:00 AM.");
                    chatStep = 9;
            }
            break;
            
        case 'Pressure Washing':
            switch(serviceSpecificStep) {
                case 1:
                    addBotMessage("What type of surface needs pressure washing? (concrete / pavers / stone / brick / metal / other)");
                    break;
                case 2:
                    addBotMessage("What's the area size? (square feet or linear feet)");
                    break;
                case 3:
                    addBotMessage("What's the height? (ground-level only / up to 1 story / 2-3 stories / 4+ stories)");
                    break;
                case 4:
                    addBotMessage("Is there a water source on site? (hose bib / interior hookup / none)");
                    break;
                case 5:
                    addBotMessage("What power is available? (110V / 220V / generator needed)");
                    break;
                case 6:
                    addBotMessage("Is there grease or oil present? (yes/no)");
                    break;
                case 7:
                    addBotMessage("Are there any noise or time restrictions? (yes/no - if yes, please specify)");
                    break;
                case 8:
                    addBotMessage("Will permits or scaffolding be needed? (yes/no/unknown)");
                    break;
                default:
                    addBotMessage("Great! When would you like to schedule the pressure washing? I have availability tomorrow at 2:00 PM, Friday at 10:00 AM, or Monday at 9:00 AM.");
                    chatStep = 9;
            }
            break;
            
        case 'Graffiti Removal':
            switch(serviceSpecificStep) {
                case 1:
                    addBotMessage("What's the substrate/surface? (painted wall / brick / stone / metal / glass / other)");
                    break;
                case 2:
                    addBotMessage("What's the coating type? (sealed / unsealed / unknown)");
                    break;
                case 3:
                    addBotMessage("What's the coverage area (sq ft) and height from ground (ft)?");
                    break;
                case 4:
                    addBotMessage("Is the graffiti fresh or aged? (≤72hrs / >72hrs / unknown)");
                    break;
                case 5:
                    addBotMessage("Are there sensitive areas or landmark review requirements? (yes/no)");
                    break;
                case 6:
                    addBotMessage("Is there a water source available? (yes/no)");
                    break;
                case 7:
                    addBotMessage("Is after-hours work acceptable? (yes/no)");
                    break;
                case 8:
                    addBotMessage("Please ensure your photos include close-ups and wide shots of the graffiti area. Are your photos comprehensive?");
                    break;
                default:
                    addBotMessage("Perfect! When would you like to schedule the graffiti removal? I have availability tomorrow at 2:00 PM, Friday at 10:00 AM, or Monday at 9:00 AM.");
                    chatStep = 9;
            }
            break;
    }
}

function handleServiceSpecificResponse(message) {
    // Store the response
    if (!bookingData.serviceSpecific) {
        bookingData.serviceSpecific = {};
    }
    bookingData.serviceSpecific[`step${serviceSpecificStep}`] = message;
    
    // Validation and special handling
    if (currentService === 'Deep Cleaning' && serviceSpecificStep === 1) {
        const sqft = parseInt(message);
        if (sqft < 300 || sqft > 200000) {
            addBotMessage("Please enter a square footage between 300 and 200,000 sq ft.");
            return;
        }
        if (sqft >= 20000) {
            addBotMessage("Got it! For large spaces like this, we may recommend multiple crews. Continuing...");
        }
    }
    
    if (currentService === 'Pressure Washing' && serviceSpecificStep === 3) {
        if (message.includes('2-3 stories') || message.includes('4+ stories')) {
            addBotMessage("Noted! Access planning (boom/scaffold) may be required for elevated work. Continuing...");
        }
    }
    
    if (currentService === 'Graffiti Removal' && serviceSpecificStep === 1) {
        if (message.toLowerCase().includes('landmark')) {
            addBotMessage("Important! Landmark approval may be required. Our admin will verify this. Continuing...");
        }
    }
    
    serviceSpecificStep++;
    
    setTimeout(() => {
        askServiceSpecificQuestions();
    }, 1000);
}

function isPersonalEmail(email) {
    const personalDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com'];
    const domain = email.split('@')[1];
    return personalDomains.includes(domain?.toLowerCase());
}

// OPEX Benchmarking App
function initializeOpexApp() {
    const container = document.getElementById('opex-app');
    if (!container) return;
    
    container.innerHTML = `
        <div class="app-interface">
            <h4 class="text-2xl font-semibold mb-6 text-center">OPEX Benchmarking Calculator</h4>
            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium mb-2 text-gray-300">Square Footage</label>
                        <input type="number" id="opex-sqft" class="app-input" placeholder="50,000" value="50000">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2 text-gray-300">Property Type</label>
                        <select id="opex-type" class="app-input">
                            <option value="residential">Residential</option>
                            <option value="commercial">Commercial</option>
                            <option value="mixed">Mixed-Use</option>
                        </select>
                    </div>
                </div>
                <div class="flex items-center justify-between py-4">
                    <span class="text-gray-300">Union Labor?</span>
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="opex-union" class="sr-only peer">
                        <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                </div>
                <button onclick="calculateOpex()" class="app-button w-full">
                    <i data-lucide="calculator" class="w-4 h-4 inline mr-2"></i>
                    Calculate OPEX Score
                </button>
                <div id="opex-results" class="hidden mt-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">Efficiency Score</div>
                            <div id="opex-score" class="result-number">--</div>
                            <div class="text-xs text-gray-500">out of 100</div>
                        </div>
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">Your OPEX/sqft</div>
                            <div id="opex-cost" class="result-number">$--</div>
                        </div>
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">Benchmark/sqft</div>
                            <div id="opex-benchmark" class="result-number">$--</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Re-initialize icons for the new content
    lucide.createIcons();
}

// ROI Calculator App
function initializeRoiApp() {
    const container = document.getElementById('roi-app');
    if (!container) return;
    
    container.innerHTML = `
        <div class="app-interface">
            <h4 class="text-2xl font-semibold mb-6 text-center">Renovation ROI Calculator</h4>
            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium mb-2 text-gray-300">Property Value</label>
                        <input type="number" id="roi-value" class="app-input" placeholder="1,500,000" value="1500000">
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2 text-gray-300">Property Type</label>
                        <div class="flex bg-gray-800 p-1 rounded-lg">
                            <button type="button" onclick="setRoiType('residential')" id="roi-residential" class="flex-1 py-2 px-4 rounded-md bg-green-500 text-white text-sm font-medium">
                                Residential
                            </button>
                            <button type="button" onclick="setRoiType('commercial')" id="roi-commercial" class="flex-1 py-2 px-4 rounded-md text-gray-300 text-sm font-medium">
                                Commercial
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium mb-2 text-gray-300">Renovation Project</label>
                    <select id="roi-project" class="app-input">
                        <option value="kitchen">Luxury Kitchen Remodel</option>
                        <option value="master">Master Suite Addition</option>
                        <option value="office">High-End Home Office</option>
                    </select>
                </div>
                <button onclick="calculateRoi()" class="app-button green w-full">
                    <i data-lucide="trending-up" class="w-4 h-4 inline mr-2"></i>
                    Analyze ROI
                </button>
                <div id="roi-results" class="hidden mt-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">Estimated ROI</div>
                            <div id="roi-percentage" class="result-number text-green-400">--%</div>
                        </div>
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">Value Increase</div>
                            <div id="roi-increase" class="result-number">$--</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    lucide.createIcons();
}

// Market Trend Analyzer App
function initializeMarketApp() {
    const container = document.getElementById('market-app');
    if (!container) return;
    
    container.innerHTML = `
        <div class="app-interface">
            <h4 class="text-2xl font-semibold mb-6 text-center">Market Trend Analyzer</h4>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium mb-2 text-gray-300">Location</label>
                    <div class="relative">
                        <i data-lucide="map-pin" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"></i>
                        <input type="text" id="market-location" class="app-input pl-10" placeholder="Enter ZIP code or city" value="10012">
                    </div>
                </div>
                <button onclick="analyzeMarket()" class="app-button purple w-full">
                    <i data-lucide="bar-chart" class="w-4 h-4 inline mr-2"></i>
                    Analyze Market
                </button>
                <div id="market-results" class="hidden mt-6">
                    <div class="text-center mb-4">
                        <h5 class="text-lg font-semibold text-white">Market Analysis: <span id="market-area" class="text-purple-400">--</span></h5>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">1-Yr Appreciation</div>
                            <div id="market-appreciation" class="result-number text-purple-400">--%</div>
                        </div>
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">Rental Demand</div>
                            <div id="market-demand" class="result-number">--</div>
                        </div>
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">Neighborhood Score</div>
                            <div id="market-score" class="result-number">--/100</div>
                        </div>
                        <div class="result-card">
                            <div class="text-sm text-gray-400 mb-1">Days on Market</div>
                            <div id="market-days" class="result-number">--</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    lucide.createIcons();
}

// OPEX Calculation
function calculateOpex() {
    const sqft = parseInt(document.getElementById('opex-sqft').value) || 50000;
    const isUnion = document.getElementById('opex-union').checked;
    const propertyType = document.getElementById('opex-type').value;
    
    // Simulate calculation
    setTimeout(() => {
        const baseScore = Math.floor(Math.random() * 30) + 70; // 70-100
        const yourCost = (Math.random() * 5 + 8).toFixed(2); // $8-13 per sqft
        const benchmark = (Math.random() * 3 + 7).toFixed(2); // $7-10 per sqft
        
        document.getElementById('opex-score').textContent = baseScore;
        document.getElementById('opex-cost').textContent = `$${yourCost}`;
        document.getElementById('opex-benchmark').textContent = `$${benchmark}`;
        document.getElementById('opex-results').classList.remove('hidden');
    }, 1000);
}

// ROI Calculation
function calculateRoi() {
    const propertyValue = parseInt(document.getElementById('roi-value').value) || 1500000;
    const project = document.getElementById('roi-project').value;
    
    // Simulate calculation
    setTimeout(() => {
        const roiPercentage = (Math.random() * 20 + 15).toFixed(1); // 15-35%
        const valueIncrease = Math.floor(Math.random() * 100000 + 50000); // $50k-150k
        
        document.getElementById('roi-percentage').textContent = `${roiPercentage}%`;
        document.getElementById('roi-increase').textContent = `$${valueIncrease.toLocaleString()}`;
        document.getElementById('roi-results').classList.remove('hidden');
    }, 1000);
}

// Market Analysis
function analyzeMarket() {
    const location = document.getElementById('market-location').value || '10012';
    
    // Simulate analysis
    setTimeout(() => {
        const appreciation = (Math.random() * 5 + 5).toFixed(1); // 5-10%
        const demands = ['High', 'Medium', 'Very High'];
        const demand = demands[Math.floor(Math.random() * demands.length)];
        const score = Math.floor(Math.random() * 20) + 80; // 80-100
        const days = Math.floor(Math.random() * 30) + 30; // 30-60 days
        
        document.getElementById('market-area').textContent = `${location} Area`;
        document.getElementById('market-appreciation').textContent = `${appreciation}%`;
        document.getElementById('market-demand').textContent = demand;
        document.getElementById('market-score').textContent = `${score}/100`;
        document.getElementById('market-days').textContent = days;
        document.getElementById('market-results').classList.remove('hidden');
    }, 1500);
}

// ROI Type Selection
function setRoiType(type) {
    const residentialBtn = document.getElementById('roi-residential');
    const commercialBtn = document.getElementById('roi-commercial');
    const projectSelect = document.getElementById('roi-project');
    
    if (type === 'residential') {
        residentialBtn.classList.add('bg-green-500', 'text-white');
        residentialBtn.classList.remove('text-gray-300');
        commercialBtn.classList.remove('bg-green-500', 'text-white');
        commercialBtn.classList.add('text-gray-300');
        
        projectSelect.innerHTML = `
            <option value="kitchen">Luxury Kitchen Remodel</option>
            <option value="master">Master Suite Addition</option>
            <option value="office">High-End Home Office</option>
        `;
    } else {
        commercialBtn.classList.add('bg-green-500', 'text-white');
        commercialBtn.classList.remove('text-gray-300');
        residentialBtn.classList.remove('bg-green-500', 'text-white');
        residentialBtn.classList.add('text-gray-300');
        
        projectSelect.innerHTML = `
            <option value="office-tech">Office Tech Upgrade</option>
            <option value="retail">Retail Storefront Facelift</option>
            <option value="lobby">Lobby Modernization</option>
        `;
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    // Implementation for mobile menu toggle
    console.log('Mobile menu toggle');
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});