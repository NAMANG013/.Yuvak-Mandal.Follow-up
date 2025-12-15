// Auth Data
const FOLLOWUP_LEADERS = [
    { uid: "ADMIN", name: "Admin (Full Access)", password: "KYM@2025#Admin" },
    { uid: "UID075", name: "Maulik Patel", password: "8471" },
    { uid: "UID076", name: "Tapan Patel", password: "1593" },
    { uid: "UID070", name: "Sneh Patel", password: "6947" },
    { uid: "UID072", name: "Vivek Prajapati", password: "6382" },
    { uid: "UID073", name: "Urvish Patel", password: "5914" },
    { uid: "UID074", name: "Palak Patel", password: "3628" },
    { uid: "UID069", name: "Rushik Patel", password: "4829" },
    { uid: "UID071", name: "Naman Gajjar", password: "2210" },
    { uid: "UID077", name: "Dipesh Patel", password: "7265" },
    { uid: "UID078", name: "Keyur Patel", password: "4182" }
];

// Member Data with Assignments
const MEMBERS_DATA = [
    // Group 1 ->Maulik Patel (UID075)
    { id: "UID001", name: "Aalok B. Patel", phone: "8128625864", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID002", name: "Akshat J. Patel", phone: "9825634358", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID003", name: "Aaryan Gajjar", phone: "7043156067", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID004", name: "Akash P. Nayak", phone: "7984410577", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID005", name: "Akshat P Patel", phone: "9723205242", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID006", name: "Bhavik S. Patel", phone: "9875213515", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID007", name: "Bhavesh Sen", phone: "7016218283", role: "Yuvak", assignedTo: "UID075" },
    
    // Group 2 ->Tapan Patel (UID076)
    
    { id: "UID008", name: "Dhairya B Patel", phone: "7990664547", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID009", name: "Dax S Patel", phone: "9924290245", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID010", name: "Dax A Patel", phone: "9924693960", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID011", name: "Dev G Patel", phone: "7874388037", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID012", name: "Dev J Patel", phone: "9898904499", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID013", name: "Dharmik S Barot", phone: "9016757562", role: "Yuvak", assignedTo: "UID076" }
    { id: "UID014", name: "Dev Patel", phone: "7600183947", role: "Yuvak", assignedTo: "UID076" },
    
    // Group 3 ->Sneh Patel (UID070)
    
    { id: "UID015", name: "Dev Gajjar", phone: "9726051332", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID079", name: "Dhruvin Prajapati", phone: "9909287967", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID016", name: "Dharmik S Valand", phone: "9510423209", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID017", name: "Dhruvil Prajapati", phone: "9904016667", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID018", name: "Dipesh Patel", phone: "9712550675", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID019", name: "Harikrushna Patel", phone: "9824058234", role: "Yuvak", assignedTo: "UID070" },

    // Group 4 -> Vivek Prajapati (UID072)
    { id: "UID020", name: "Harikrushna R Patel", phone: "8320240696", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID021", name: "Harshil Valand", phone: "9499642919", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID022", name: "Het H Patel", phone: "9974543136", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID023", name: "Het M Patel", phone: "9824545982", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID024", name: "Jainam B Patel", phone: "9824563452", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID025", name: "Jay Patel", phone: "9909339898", role: "Yuvak", assignedTo: "UID072" },

    // Group 5 -> Urvish Patel (UID073)
    { id: "UID026", name: "Jaymin Y Nayi", phone: "9924249583", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID027", name: "Jayur K Patel", phone: "9316201477", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID028", name: "Jit B Nayi", phone: "8758815803", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID029", name: "Ketul D Patel", phone: "9725239090", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID030", name: "Keyur B Patel", phone: "7990458423", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID031", name: "Kirtan P Patel", phone: "9909544410", role: "Yuvak", assignedTo: "UID073" },

    // Group 6 -> Palak Patel (UID074)
    { id: "UID032", name: "Maulik J Patel", phone: "9512502048", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID033", name: "Meet G Patel", phone: "9033048008", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID034", name: "Meet M Prajapati", phone: "9265231089", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID035", name: "Meet N Patel", phone: "9924162518", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID036", name: "Meet Patel", phone: "9724029119", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID037", name: "Mihir B Patel", phone: "7016408403", role: "Yuvak", assignedTo: "UID074" },

    // Group 7 -> rushik Patel (UID069)
    { id: "UID038", name: "Naman Gajjar", phone: "9724335883", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID039", name: "Nayan G Panchal", phone: "9898837957", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID040", name: "Palak N Patel", phone: "7878765782", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID041", name: "Purvang K Patel", phone: "9998991677", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID042", name: "Prayush Prajapati", phone: "6351691266", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID043", name: "Purvang M Prajapati", phone: "7046630588", role: "Yuvak", assignedTo: "UID069" },

    // Group 8 ->Naman Gajjar (UID071)
    { id: "UID044", name: "Rushik Patel", phone: "8141956002", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID045", name: "Savan S Modi", phone: "7265067042", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID046", name: "Sharad Patel", phone: "9913124732", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID047", name: "Smit R Patel", phone: "9737401544", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID048", name: "Sneh G Patel", phone: "8320200887", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID049", name: "Snehansh V Patel", phone: "8733077693", role: "Yuvak", assignedTo: "UID071" },

    // Group 9 -> Dipesh Patel (UID077)
    { id: "UID050", name: "Sumit B Prajapati", phone: "9016958464", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID051", name: "Tapan A Patel", phone: "9106527737", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID052", name: "Tilak A Patel", phone: "8200199020", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID053", name: "Tirth Sanjaybhai P.", phone: "9727165594", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID054", name: "Tirth S Patel", phone: "9904969480", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID055", name: "Urvish R Patel", phone: "8866685864", role: "Yuvak", assignedTo: "UID077" },

    // Group 10 -> Keyur Patel (UID078)
    { id: "UID056", name: "Ved P Patel", phone: "7990627282", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID057", name: "Vivek R Prajapati", phone: "9998726021", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID058", name: "Yannsh", phone: "9265602150", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID059", name: "Yash A Patel", phone: "9409997721", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID060", name: "Yash B Patel", phone: "9537860957", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID061", name: "Yug B Patel", phone: "9537860975", role: "Yuvak", assignedTo: "UID078" },

    // Substitutes (Not strictly assigned, but can be viewed by all or specific logic)
    { id: "UID062", name: "Bhavya G Patel", phone: "7016663203", role: "Substitute" },
    { id: "UID063", name: "Harsh M Patel", phone: "7434912333", role: "Substitute" },
    { id: "UID064", name: "Meet Panchal", phone: "9662682051", role: "Substitute" },
    { id: "UID065", name: "Naitik K Prajapati", phone: "8511280499", role: "Substitute" },
    { id: "UID066", name: "Nand B Patel", phone: "9429420043", role: "Substitute" },
    { id: "UID067", name: "Priyanshu J Prajapati", phone: "9714393307", role: "Substitute" },
    { id: "UID068", name: "Shaurya Patel", phone: "8469869463", role: "Substitute" }
];

// State
let members = JSON.parse(localStorage.getItem('yuvakMandalMembers_v5')) || MEMBERS_DATA;
let currentUser = JSON.parse(localStorage.getItem('yuvakMandalUser')) || null;

// DOM Elements
const loginContainer = document.getElementById('loginContainer');
const loginForm = document.getElementById('loginForm');
const uidInput = document.getElementById('uidInput');
const passwordInput = document.getElementById('passwordInput');
const appContainer = document.getElementById('appContainer');
const welcomeText = document.getElementById('welcomeText');
const logoutBtn = document.getElementById('logoutBtn');
const memberListEl = document.getElementById('memberList');
const searchInput = document.getElementById('searchInput');

// Initialize Login Logic
function initAuth() {
    // Populate User Dropdown
    uidInput.innerHTML = '<option value="" disabled selected>Select assigned leader...</option>';
    FOLLOWUP_LEADERS.forEach(leader => {
        const option = document.createElement('option');
        option.value = leader.uid;
        option.textContent = leader.name;
        uidInput.appendChild(option);
    });

    // Check Login Status
    if (currentUser) {
        showApp();
    } else {
        showLogin();
    }
}

// UI Toggles
function showLogin() {
    loginContainer.style.display = 'flex';
    appContainer.style.display = 'none';
    passwordInput.value = '';
}

function showApp() {
    loginContainer.style.display = 'none';
    appContainer.style.display = 'block';
    welcomeText.textContent = `List for ${currentUser.name}`;

    // Admin Dashboard Logic
    if (currentUser.uid === "ADMIN") {
        welcomeText.innerHTML = `Admin Dashboard <span style="font-size:0.8rem; display:block; opacity:0.8;">Total: ${members.length} Members</span>`;
        // We could inject more stats here if needed
    }

    renderMembers();
}

// Login Handler
const loginErrorEl = document.getElementById('loginError');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectedUid = uidInput.value;
    const password = passwordInput.value;

    const leader = FOLLOWUP_LEADERS.find(l => l.uid === selectedUid);

    if (leader && leader.password === password) {
        currentUser = leader;
        localStorage.setItem('yuvakMandalUser', JSON.stringify(currentUser));
        showApp();
        loginErrorEl.classList.remove('visible');
    } else {
        // Show inline error
        loginErrorEl.textContent = "Invalid Password or User";
        loginErrorEl.classList.add('visible');

        // Shake animation effect
        loginContainer.classList.add('shake');
        setTimeout(() => loginContainer.classList.remove('shake'), 400);
    }
});

// Clear error on input
passwordInput.addEventListener('input', () => {
    loginErrorEl.classList.remove('visible');
});
uidInput.addEventListener('change', () => {
    loginErrorEl.classList.remove('visible');
});

// Logout Handler
logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('yuvakMandalUser');
    showLogin();
});

// Render Members (Filtered by Logged In User)
function renderMembers(filterText = '') {
    if (!currentUser) return;

    memberListEl.innerHTML = '';

    // IF ADMIN: Render Leader Dashboard
    if (currentUser.uid === "ADMIN") {
        renderAdminDashboard(filterText);
        return;
    }

    // Filter logic: Show members assigned to the leader OR all Substitutes.
    const myMembers = members.filter(member => {
        const isAssigned = member.assignedTo === currentUser.uid;
        const isSubstitute = member.role === "Substitute";

        // Filter by search text
        const matchesSearch = member.name.toLowerCase().includes(filterText.toLowerCase()) ||
            (member.phone && member.phone.includes(filterText));

        return (isAssigned) && matchesSearch;
    });

    if (myMembers.length === 0) {
        memberListEl.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-user-slash"></i>
                <p>No members found in your list</p>
            </div>
        `;
        return;
    }

    renderMemberListItems(myMembers);
}

// Search Listener
searchInput.addEventListener('input', (e) => {
    renderMembers(e.target.value);
});

// Admin Dashboard Renderer
function renderAdminDashboard(filterText = '') {
    memberListEl.innerHTML = '';

    const leaders = FOLLOWUP_LEADERS.filter(l => l.uid !== 'ADMIN');

    // Filter leaders by search
    const filteredLeaders = leaders.filter(l =>
        l.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredLeaders.length === 0) {
        memberListEl.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-users-slash"></i>
                <p>No leaders found</p>
            </div>
        `;
        return;
    }

    filteredLeaders.forEach(leader => {
        // Calculate Stats
        const assignedMembers = members.filter(m => m.assignedTo === leader.uid);
        const total = assignedMembers.length;
        // Optional: Count how many have phone numbers if needed
        // const withPhone = assignedMembers.filter(m => m.phone && m.phone !== "—").length;

        const card = document.createElement('div');
        card.className = 'member-card';
        card.style.cursor = 'pointer'; // Make it look clickable

        // Click handler to drill down
        card.onclick = (e) => {
            // Prevent drilling down if clicking a button/action inside
            if (e.target.closest('.actions')) return;
            viewLeaderList(leader);
        };

        card.innerHTML = `
            <div class="member-info">
                <div class="member-name">${leader.name}</div>
                <div class="member-details" style="display: flex; gap: 10px; align-items: center; margin-top: 5px;">
                    <div class="member-id" style="font-size: 0.8rem; color: #666;">
                        Pass: ${leader.password}
                    </div>
                </div>
            </div>
            <div class="actions" style="min-width: 60px; text-align: right;">
                <div style="background: var(--primary-color); color: white; padding: 5px 10px; border-radius: 12px; font-size: 0.9rem; font-weight: bold;">
                    ${total}
                </div>
            </div>
        `;
        memberListEl.appendChild(card);
    });
}

// Admin Drill-down View
function viewLeaderList(leader) {
    // specific filtering for this leader
    const leaderMembers = members.filter(m => m.assignedTo === leader.uid);

    // Update Header
    welcomeText.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fa-solid fa-arrow-left" onclick="showApp()" style="cursor: pointer;"></i>
            <div>
                ${leader.name}
                <span style="font-size:0.8rem; display:block; opacity:0.8;">${leaderMembers.length} Members</span>
            </div>
        </div>
    `;

    memberListEl.innerHTML = '';

    if (leaderMembers.length === 0) {
        memberListEl.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-user-slash"></i>
                <p>No members in this list</p>
            </div>
        `;
        return;
    }

    renderMemberListItems(leaderMembers);
}

// Helper to render member cards (reused to avoid duplication)
function renderMemberListItems(listToRender) {
    listToRender.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';

        const hasPhone = member.phone && member.phone !== "—" && member.phone.trim() !== "";

        card.innerHTML = `
            <div class="member-info">
                <div class="member-name">${member.name}</div>
                <div class="member-details" style="display: flex; gap: 10px; align-items: center; margin-top: 5px;">
                    <div class="member-phone">
                        <i class="fa-solid fa-phone" style="font-size: 0.8rem;"></i>
                        ${hasPhone ? member.phone : 'No Phone'}
                    </div>
                    <div class="member-id" style="font-size: 0.8rem; color: #666;">
                        #${member.id.toString().replace('UID', '')}
                    </div>
                </div>
            </div>
            <div class="actions">
                ${hasPhone ? `
                <a href="tel:${member.phone}" class="call-btn">
                    <i class="fa-solid fa-phone"></i>
                </a>
                ` : ''}
            </div>
        `;
        memberListEl.appendChild(card);
    });
}

// Save Data Helper
function saveData() {
    localStorage.setItem('yuvakMandalMembers_v5', JSON.stringify(members));
}

// Initialize
initAuth();
