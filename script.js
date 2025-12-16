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
    // Group 1 -> Maulik Patel (UID075)
    { id: "UID001", name: "Aalok B. Patel", std: "T.Y.", phone: "8128625864", dob: "13/Jul/2004", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID002", name: "Akshat J. Patel", std: "10", phone: "9825634358", dob: "15/Apr/2010", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID003", name: "Aaryan Gajjar", std: "College", phone: "7043156067", dob: "15/Sep/2003", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID004", name: "Akash P. Nayak", std: "12", phone: "7984410577", dob: "1/Sep/2007", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID005", name: "Akshat P Patel", std: "12", phone: "9723205242", dob: "28/Mar/2009", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID006", name: "Bhavik S. Patel", std: "9", phone: "9875213515", dob: "21/May/2011", role: "Yuvak", assignedTo: "UID075" },
    { id: "UID007", name: "Bhavesh Sen", std: "B.Pham", phone: "7016218283", dob: "22/Mar/2006", role: "Yuvak", assignedTo: "UID075" },

    // Group 2 -> Tapan Patel (UID076)
    { id: "UID008", name: "Dhairya B Patel", std: "12", phone: "7990664547", dob: "7/Oct/2008", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID009", name: "Dax S Patel", std: "9", phone: "9924290245", dob: "1/May/2011", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID010", name: "Dax A Patel", std: "B COM", phone: "9924693960", dob: "15/Sep/2008", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID011", name: "Dev G Patel", std: "12", phone: "7874388037", dob: "23/Apr/2009", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID012", name: "Dev J Patel", std: "12", phone: "9898904499", dob: "20/May/2009", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID013", name: "Dharmik S Barot", std: "12", phone: "9016757562", dob: "4/Nov/2008", role: "Yuvak", assignedTo: "UID076" },
    { id: "UID079", name: "Dhruvin Prajapati", std: "11", phone: "9909287967", dob: "10/03/2010", role: "Yuvak", assignedTo: "UID076" },

    // Group 3 -> Sneh Patel (UID070)
    { id: "UID014", name: "Dev Patel", std: "—", phone: "7600183947", dob: "—", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID015", name: "Dev Gajjar", std: "—", phone: "9726051332", dob: "26-May-03", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID016", name: "Dharmik S Valand", std: "11", phone: "9510423209", dob: "26/Jun/2009", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID017", name: "Dhruvil Prajapati", std: "10", phone: "9904016667", dob: "3/Oct/2010", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID018", name: "Dipesh Patel", std: "Job", phone: "9712550675", dob: "30/Sep/1993", role: "Yuvak", assignedTo: "UID070" },
    { id: "UID019", name: "Harikrushna Patel", std: "Job", phone: "9824058234", dob: "7/Sep/1999", role: "Yuvak", assignedTo: "UID070" },

    // Group 4 -> Vivek Prajapati (UID072)
    { id: "UID020", name: "Harikrushna R Patel", std: "T.Y.", phone: "8320240696", dob: "30/Mar/2004", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID021", name: "Harshil Valand", std: "Deploma", phone: "9499642919", dob: "8/Mar/2009", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID022", name: "Het H Patel", std: "10", phone: "9974543136", dob: "3/Jan/2010", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID023", name: "Het M Patel", std: "10", phone: "9824545982", dob: "20/May/2010", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID024", name: "Jainam B Patel", std: "10", phone: "9824563452", dob: "14/May/2009", role: "Yuvak", assignedTo: "UID072" },
    { id: "UID025", name: "Jay Patel", std: "11", phone: "9909339898", dob: "16/Jan/2010", role: "Yuvak", assignedTo: "UID072" },

    // Group 5 -> Urvish Patel (UID073)
    { id: "UID026", name: "Jaymin Y Nayi", std: "10", phone: "9924249583", dob: "1/Jun/2010", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID027", name: "Jayur K Patel", std: "10", phone: "9316201477", dob: "21/Mar/2009", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID028", name: "Jit B Nayi", std: "12", phone: "8758815803", dob: "19/Oct/2007", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID029", name: "Ketul D Patel", std: "10", phone: "9725239090", dob: "10/Oct/2009", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID030", name: "Keyur B Patel", std: "Job", phone: "7990458423", dob: "9/May/1988", role: "Yuvak", assignedTo: "UID073" },
    { id: "UID031", name: "Kirtan P Patel", std: "10", phone: "9909544410", dob: "13/Nov/2009", role: "Yuvak", assignedTo: "UID073" },

    // Group 6 -> Palak Patel (UID074)
    { id: "UID032", name: "Maulik J Patel", std: "Job", phone: "9512502048", dob: "22/May/1999", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID033", name: "Meet G Patel", std: "11", phone: "9033048008", dob: "4/May/2009", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID034", name: "Meet M Prajapati", std: "Deploma", phone: "9265231089", dob: "17/Dec/2008", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID035", name: "Meet N Patel", std: "12", phone: "9924162518", dob: "22/Feb/2008", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID036", name: "Meet Patel", std: "College", phone: "9724029119", dob: "7/Oct/2007", role: "Yuvak", assignedTo: "UID074" },
    { id: "UID037", name: "Mihir B Patel", std: "College", phone: "7016408403", dob: "3/Sep/2005", role: "Yuvak", assignedTo: "UID074" },

    // Group 7 -> Rushik Patel (UID069)
    { id: "UID038", name: "Naman Gajjar", std: "College", phone: "9724335883", dob: "16/Dec/2006", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID039", name: "Nayan G Panchal", std: "T.Y.", phone: "9898837957", dob: "8/Oct/2005", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID040", name: "Palak N Patel", std: "Job", phone: "7878765782", dob: "8/May/1998", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID041", name: "Purvang K Patel", std: "College", phone: "9998991677", dob: "3/Nov/2002", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID042", name: "Prayush Prajapati", std: "College", phone: "6351691266", dob: "3/Oct/2004", role: "Yuvak", assignedTo: "UID069" },
    { id: "UID043", name: "Purvang M Prajapati", std: "T.Y.", phone: "7046630588", dob: "25/Oct/2003", role: "Yuvak", assignedTo: "UID069" },

    // Group 8 -> Naman Gajjar (UID071)
    { id: "UID044", name: "Rushik Patel", std: "C.A.", phone: "8141956002", dob: "23/Aug/2001", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID045", name: "Savan S Modi", std: "College", phone: "7265067042", dob: "7/Aug/2003", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID046", name: "Sharad Patel", std: "College", phone: "9913124732", dob: "—", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID047", name: "Smit R Patel", std: "College", phone: "9737401544", dob: "24/Jan/2004", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID048", name: "Sneh G Patel", std: "College", phone: "8320200887", dob: "13/Jan/2005", role: "Yuvak", assignedTo: "UID071" },
    { id: "UID049", name: "Snehansh V Patel", std: "12", phone: "8733077693", dob: "27/Jan/2009", role: "Yuvak", assignedTo: "UID071" },

    // Group 9 -> Dipesh Patel (UID077)
    { id: "UID050", name: "Sumit B Prajapati", std: "College", phone: "9016958464", dob: "17/Oct/2002", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID051", name: "Tapan A Patel", std: "F.Y.", phone: "9106527737", dob: "28/Mar/2005", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID052", name: "Tilak A Patel", std: "College", phone: "8200199020", dob: "11/Aug/2005", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID053", name: "Tirth Sanjaybhai P.", std: "10", phone: "9727165594", dob: "16/Aug/2010", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID054", name: "Tirth S Patel", std: "10", phone: "9904969480", dob: "19/Jul/2010", role: "Yuvak", assignedTo: "UID077" },
    { id: "UID055", name: "Urvish R Patel", std: "College", phone: "8866685864", dob: "17/Dec/2002", role: "Yuvak", assignedTo: "UID077" },

    // Group 10 -> Keyur Patel (UID078)
    { id: "UID056", name: "Ved P Patel", std: "B Pharm", phone: "7990627282", dob: "1/May/2006", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID057", name: "Vivek R Prajapati", std: "Diploma", phone: "9998726021", dob: "8/Aug/2007", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID058", name: "Yannsh", std: "—", phone: "9265602150", dob: "—", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID059", name: "Yash A. Patel", std: "Diploma", phone: "9409997721", dob: "22/Aug/2007", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID060", name: "Yash B. Patel", std: "10", phone: "9537860957", dob: "26/Feb/2011", role: "Yuvak", assignedTo: "UID078" },
    { id: "UID061", name: "Yug B. Patel", std: "10", phone: "9537860975", dob: "26/Feb/2011", role: "Yuvak", assignedTo: "UID078" },

    // Substitutes
    { id: "UID062", name: "Dhruvin Prajapati", std: "11", phone: "9909287967", dob: "10/03/2010", role: "Substitute" }
];

// State
let members = JSON.parse(localStorage.getItem('yuvakMandalMembers_v6')) || MEMBERS_DATA;
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

// Birthday Checker
function checkBirthdays() {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth(); // 0-indexed

    const birthdayMembers = members.filter(member => {
        if (!member.dob || member.dob === "—") return false;

        let day, month;
        const dob = member.dob;

        if (dob.includes('/')) {
            const parts = dob.split('/');
            // Format 1: 13/Jul/2004 or 10/03/2010
            day = parseInt(parts[0], 10);

            if (isNaN(parseInt(parts[1], 10))) {
                // Month is text (Jul)
                const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
                month = monthNames.indexOf(parts[1].toLowerCase().substring(0, 3));
            } else {
                // Month is number (03)
                month = parseInt(parts[1], 10) - 1;
            }
        } else if (dob.includes('-')) {
            // Format: 26-May-03
            const parts = dob.split('-');
            day = parseInt(parts[0], 10);
            const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
            month = monthNames.indexOf(parts[1].toLowerCase().substring(0, 3));
        }

        return day === currentDay && month === currentMonth;
    });

    if (birthdayMembers.length > 0) {
        const alertContainer = document.createElement('div');
        alertContainer.className = 'alert alert-info';
        alertContainer.innerHTML = `
            <strong>🎂 Today is a Birthday!</strong><br>
            ${birthdayMembers.map(m => `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                    <span>Happy Birthday <b>${m.name}</b>!</span>
                    ${m.phone && m.phone.length >= 10 ? `
                        <a href="https://wa.me/91${m.phone}?text=Happy Birthday ${encodeURIComponent(m.name)}! 🎂🎉" target="_blank" 
                           style="background:#25D366; color:white; padding:4px 10px; border-radius:20px; text-decoration:none; font-size:0.85rem; display:flex; align-items:center; gap:5px;">
                           <i class="fa-brands fa-whatsapp"></i> Wish
                        </a>
                    ` : ''}
                </div>
            `).join('')}
        `;
        // Insert after header
        const header = document.querySelector('.app-header');
        header.parentNode.insertBefore(alertContainer, header.nextSibling);
    }
}

// Render Members (Filtered by Logged In User)
function renderMembers(filterText = '') {
    // Check birthdays on first render if not already shown
    if (!document.querySelector('.alert-info')) {
        checkBirthdays();
    }

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
        // const isSubstitute = member.role === "Substitute"; // Removed substitute visibility for cleaner list if requested, or keep it.
        // Actually user just said remove search bar. I should keep the logic but remove the name filter.

        return isAssigned;
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
        // Staggered animation delay
        card.style.animationDelay = `${filteredLeaders.indexOf(leader) * 0.1}s`;

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
        // Staggered animation delay
        card.style.animationDelay = `${listToRender.indexOf(member) * 0.05}s`;

        const hasPhone = member.phone && member.phone !== "—" && member.phone.trim() !== "";

        card.innerHTML = `
            <div class="member-info">
                <div class="member-name">
                    ${member.name} 
                    <span style="font-size: 0.8em; opacity: 0.6; font-weight: 400; margin-left: 8px;">
                        #${member.id.toString().replace('UID', '')}
                    </span>
                </div>
                <div class="member-details" style="display: flex; flex-direction: column; gap: 4px; margin-top: 5px;">
                   <div style="display: flex; gap: 15px; font-size: 0.85rem; color: var(--text-secondary);">
                        <span><i class="fa-solid fa-graduation-cap" style="width:16px"></i> ${member.std || '12th'}</span>
                        <span><i class="fa-solid fa-cake-candles" style="width:16px"></i> ${member.dob || '01/01/2000'}</span>
                   </div>
                   <!-- Phone removed slightly -->
                </div>
            </div>
            <div class="actions" style="display: flex; align-items: center; gap: 10px;">
                ${hasPhone ? `
                <button class="view-btn" onclick="alert('${member.phone}')">
                    M
                </button>
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
