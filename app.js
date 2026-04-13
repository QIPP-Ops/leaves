// 1. YOUR DATABASE
const db = {
  "roster": [
    { "id": 1, "name": "Izhar Ali", "fullName": "IZHAR ALI", "empId": "500440", "crew": "C", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [{ "start": "2026-04-21", "end": "2026-05-02", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 2, "name": "Purushothaman", "fullName": "PURUSHOTHAMAN DEVARAJ", "empId": "500438", "crew": "A", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [{ "start": "2026-04-27", "end": "2026-05-07", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 3, "name": "Juma Khan", "fullName": "Juma Khan", "empId": "2028", "crew": "C", "role": "CCR Operator", "color": "crew-green", "leaves": [{ "start": "2026-04-29", "end": "2026-05-14", "type": "Applied on SAP" }], "conflict": true, "conflictWith": ["Mohammad Algarni"] },
    { "id": 4, "name": "Mustafa Salem", "fullName": "Mustafa Salem Mustafa", "empId": "2024", "crew": "D", "role": "Shift in Charge Engineer", "color": "crew-red", "leaves": [{ "start": "2026-05-19", "end": "2026-06-19", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 5, "name": "Ahmed Alsaqoor", "fullName": "AHMAD ALSQOOR", "empId": "3973", "crew": "D", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [{ "start": "2026-05-19", "end": "2026-06-11", "type": "Applied on SAP" }], "conflict": true, "conflictWith": ["Mark Ramirez"] },
    { "id": 6, "name": "Syed Shahnawaz Ahmed", "fullName": "Syed Shahnawaz Ahmed", "empId": "2025", "crew": "A", "role": "Supervisor", "color": "crew-red", "leaves": [{ "start": "2026-05-20", "end": "2026-06-04", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 7, "name": "Abdul Hameed", "fullName": "ABDUL HAMEED ABDULRASHEED", "empId": "1119", "crew": "General", "role": "Supervisor", "color": "crew-grey", "leaves": [{ "start": "2026-05-20", "end": "2026-06-10", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 8, "name": "Waleed Fayad", "fullName": "Walid Elshahhat Hussein Fayad", "empId": "501388", "crew": "C", "role": "CCR Operator", "color": "crew-green", "leaves": [{ "start": "2026-05-31", "end": "2026-06-23", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 9, "name": "Mark Ramirez", "fullName": "Mark Anthony Ramirez", "empId": "2237", "crew": "D", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [{ "start": "2026-05-31", "end": "2026-06-15", "type": "Applied on SAP" }], "conflict": true, "conflictWith": ["Ahmed Alsaqoor"] },
    { "id": 10, "name": "Ahmed Fathy", "fullName": "Ahmed Fathy Ibrahim AbduelKader", "empId": "2726", "crew": "A", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [{ "start": "2026-06-06", "end": "2026-06-14", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 11, "name": "Moustafa Elansari", "fullName": "Moustafa Elansary Hewaidy", "empId": "2038", "crew": "C", "role": "Supervisor", "color": "crew-red", "leaves": [{ "start": "2026-06-16", "end": "2026-06-28", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 12, "name": "Veera Prasad", "fullName": "Veera Venkata Prasad Vaka", "empId": "2294", "crew": "D", "role": "CCR Operator", "color": "crew-green", "leaves": [{ "start": "2026-07-06", "end": "2026-08-06", "type": "Applied on SAP" }], "conflict": true, "conflictWith": ["Lakshmy Prasad"] },
    { "id": 13, "name": "Lakshmy Prasad", "fullName": "LAKSHMI APPALA RAMA DURGA PRASAD", "empId": "501234", "crew": "D", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [{ "start": "2026-07-14", "end": "2026-08-10", "type": "Applied on SAP" }], "conflict": true, "conflictWith": ["Veera Prasad"] },
    { "id": 14, "name": "Prathapan", "fullName": "SOMANATHAN NAIR PRATHAPAN", "empId": "3672", "crew": "B", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [{ "start": "2026-07-22", "end": "2026-08-18", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 15, "name": "Zaid Almarri", "fullName": "Zaid Hadi Almarri", "empId": "502667", "crew": "A", "role": "Shift in Charge", "color": "crew-red", "leaves": [{ "start": "2026-08-01", "end": "2026-08-15", "type": "Planned" }], "conflict": false, "conflictWith": [] },
    { "id": 16, "name": "Sami Hamdan", "fullName": "Sami Hamdan Dasan Alharbi", "empId": "2364", "crew": "A", "role": "CCR Operator", "color": "crew-yellow", "leaves": [{ "start": "2026-09-01", "end": "2026-09-15", "type": "Planned" }], "conflict": false, "conflictWith": [] },
    { "id": 17, "name": "Fawaz Al Qahtani", "fullName": "Fawaz Mari Saeed Alqahtani", "empId": "2954", "crew": "A", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [{ "start": "2026-09-16", "end": "2026-09-30", "type": "Planned" }], "conflict": false, "conflictWith": [] },
    { "id": 18, "name": "Abdulwahab Al-Shehab", "fullName": "Abdulwahab Mohammed Al Shehab", "empId": "2202", "crew": "A", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [{ "start": "2026-10-01", "end": "2026-10-15", "type": "Planned" }], "conflict": false, "conflictWith": [] },
    { "id": 19, "name": "Shaheer Yousaf", "fullName": "Shaheer Yousaf", "empId": "2711", "crew": "A", "role": "CCR Operator", "color": "crew-green", "leaves": [{ "start": "2026-10-16", "end": "2026-10-30", "type": "Planned" }], "conflict": false, "conflictWith": [] },
    { "id": 20, "name": "Mohamed Al Dossary", "fullName": "Mohammad AL Dossary", "empId": "3865", "crew": "A", "role": "Local Operator", "color": "crew-lightorange", "leaves": [{ "start": "2026-11-01", "end": "2026-11-15", "type": "Planned" }], "conflict": false, "conflictWith": [] },
    { "id": 21, "name": "Abdullah Altulayhi", "fullName": "ABDULLAH ALTULAYHI", "empId": "501369", "crew": "A", "role": "Local Operator", "color": "crew-lightorange", "leaves": [{ "start": "2026-11-16", "end": "2026-11-30", "type": "Planned" }], "conflict": false, "conflictWith": [] },
    { "id": 22, "name": "Bakr Abdulmajeed", "fullName": "Bakr Abdulmajed Alkhabeerani", "empId": "3617", "crew": "A", "role": "Local Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 23, "name": "Saad Salem Al Hajiri", "fullName": "Saad Salem Al Hajri", "empId": "4101", "crew": "A", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 24, "name": "Abdulhadi Mohammed Saleh", "fullName": "Abdulhadi Mohammed AlMohammed Saleh", "empId": "4095", "crew": "A", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 25, "name": "Abdullah Al Amri", "fullName": "Abdullah Abdulrahman Alamri", "empId": "2363", "crew": "B", "role": "Shift in Charge", "color": "crew-red", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 26, "name": "Kanaka Naga Srinivasu Kolli", "fullName": "Kanaka Naga Srinivasa Kolli", "empId": "500446", "crew": "B", "role": "Supervisor", "color": "crew-red", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 27, "name": "Ahmed Fawaz", "fullName": "AHMED MOUSTAFA AMIN FAWAZ", "empId": "", "crew": "B", "role": "CCR Operator", "color": "crew-grey", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 28, "name": "Rashed Alhajri", "fullName": "Rashed Ghalib Alhajri", "empId": "2369", "crew": "B", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 29, "name": "Saravanakumar Madhaiyan", "fullName": "Saravanakumar Madhaiyan", "empId": "2035", "crew": "B", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 30, "name": "Abdullah Mohiddin Alshahrani", "fullName": "Abdullah Mohiddin Alshahrani", "empId": "3251", "crew": "B", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 31, "name": "Mohammed Mulhim", "fullName": "Mohammed Fahad Al Mulhim", "empId": "3262", "crew": "B", "role": "Local Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 32, "name": "Mohammed Afnan", "fullName": "MOHAMMAD AFNAN", "empId": "500439", "crew": "B", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [{ "start": "2026-05-25", "end": "2026-06-05", "type": "Planned" }], "conflict": false, "conflictWith": [] },
    { "id": 33, "name": "Abdelaziz Al Harbi", "fullName": "Abdulaziz Alharbi", "empId": "3511", "crew": "C", "role": "Local Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 34, "name": "Amjad Alruwaytie", "fullName": "Amjad Muflih AlRuwaytie", "empId": "4091", "crew": "B", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 35, "name": "Abderahman Al Anezie", "fullName": "Abdulrahman Shaiban Al Anazi", "empId": "4098", "crew": "B", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 36, "name": "Alaa Alrefae", "fullName": "Alaa Abdullah Alrefaei", "empId": "502680", "crew": "C", "role": "Shift in Charge", "color": "crew-red", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 37, "name": "Abdullah Al Hajri", "fullName": "Abdullah Faleh Al hajri", "empId": "2665", "crew": "C", "role": "Local Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 38, "name": "Yasser Althuiqeb", "fullName": "Yaser Althuqaib", "empId": "501370", "crew": "C", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 39, "name": "Norbie Cruz", "fullName": "Norbie Vianzon Cruz", "empId": "2283", "crew": "C", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [{ "start": "2026-05-07", "end": "2026-06-14", "type": "Applied on SAP" }], "conflict": false, "conflictWith": [] },
    { "id": 40, "name": "Khalid Saleh Khalousi", "fullName": "Khaled Khalosy", "empId": "501885", "crew": "C", "role": "Local Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 41, "name": "Saad Al Enize", "fullName": "Seed Alenizi", "empId": "3229", "crew": "C", "role": "Local Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 42, "name": "Abderahman Al Baqmi", "fullName": "Abdulrahman Shabib Al Baqami", "empId": "4096", "crew": "C", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 43, "name": "Ali Al Qahtani", "fullName": "Ali Mashabab Al Qahtani", "empId": "4108", "crew": "C", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 44, "name": "Saleh Mohammed Al Amri", "fullName": "Saleh Mohammed Saleh Alamri", "empId": "2941", "crew": "D", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 45, "name": "Hassan Arshad", "fullName": "Hassan Arshad", "empId": "2512", "crew": "D", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 46, "name": "Rajesh Muniasamy", "fullName": "RAJESH MUNIASAMY", "empId": "2492", "crew": "D", "role": "Local Operator", "color": "crew-lightviolet", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 47, "name": "Mohammed Al Ghamdi", "fullName": "Mohammed Al Ghamdi", "empId": "2820", "crew": "D", "role": "Local Operator", "color": "crew-green", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 48, "name": "Bader AlSubait", "fullName": "Bader Ibrahim Abdulrahman Alsubeet", "empId": "2912", "crew": "D", "role": "Local Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 49, "name": "Faris Al Dawasri", "fullName": "Faris Shaya Al Dawsari", "empId": "4097", "crew": "D", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 50, "name": "Mohamed Al Hakami", "fullName": "Mohammed Hassan Hakami", "empId": "4081", "crew": "D", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 51, "name": "Saad Al Shahrani", "fullName": "Saad Mohammed Al Shahrani", "empId": "4094", "crew": "D", "role": "Filed Operator", "color": "crew-lightorange", "leaves": [], "conflict": false, "conflictWith": [] },
    { "id": 52, "name": "Mohammad Algarni", "fullName": "MOHAMMED ABDULLAH AL GARNI", "empId": "3142", "crew": "General", "role": "CCR Operator", "color": "crew-lightblue", "leaves": [{ "start": "2026-04-17", "end": "2026-05-12", "type": "Applied on SAP" }], "conflict": true, "conflictWith": ["Juma Khan"] }
  ]
};

let roster = db.roster;

// --- GLOBAL SORTING LOGIC ---
const crewOrder = { 'A': 1, 'B': 2, 'C': 3, 'D': 4, 'General': 5 };
const roleOrder = { 'Shift in Charge Engineer': 1, 'Shift in Charge': 1, 'Supervisor': 2, 'CCR Operator': 3, 'Local Operator': 4, 'Filed Operator': 5, 'Field Operator': 5 };

const shiftCycles = {
    'A': ['O', 'O', 'O', 'O', 'D', 'D', 'N', 'N'],
    'B': ['D', 'D', 'N', 'N', 'O', 'O', 'O', 'O'],
    'C': ['N', 'N', 'O', 'O', 'O', 'O', 'D', 'D'],
    'D': ['O', 'O', 'D', 'D', 'N', 'N', 'O', 'O'],
    'General': ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']
};

function getDaysSinceBase(dateStr) {
    const base = new Date('2026-01-01T00:00:00Z');
    const current = new Date(dateStr + 'T00:00:00Z');
    return Math.floor((current - base) / (1000 * 60 * 60 * 24));
}

// 2. CONFLICT CALCULATOR
function calculateConflicts() {
    roster.forEach(p => { p.conflict = false; p.conflictWith = []; });
    for (let i = 0; i < roster.length; i++) {
        for (let j = i + 1; j < roster.length; j++) {
            let p1 = roster[i];
            let p2 = roster[j];
            if (p1.crew === p2.crew && p1.role.includes("CCR") && p2.role.includes("CCR")) {
                if (p1.leaves && p2.leaves) {
                    p1.leaves.forEach(l1 => {
                        p2.leaves.forEach(l2 => {
                            if (l1.start <= l2.end && l1.end >= l2.start) {
                                p1.conflict = true;
                                if (!p1.conflictWith.includes(p2.name)) p1.conflictWith.push(p2.name);
                                p2.conflict = true;
                                if (!p2.conflictWith.includes(p1.name)) p2.conflictWith.push(p1.name);
                            }
                        });
                    });
                }
            }
        }
    }
}

// 3. THE MAGIC WAND
function unlockAutoScheduler() {
    showToast("✨ Magic Wand Activated: Resolving Conflicts...", "saving", 2000);
    document.body.classList.add('magic-resolving');

    setTimeout(() => {
        roster.forEach(person => {
            if (person.conflict && person.leaves.length > 0) {
                let originalStart = new Date(person.leaves[0].start);
                let originalEnd = new Date(person.leaves[0].end);
                
                originalStart.setDate(originalStart.getDate() + 20);
                originalEnd.setDate(originalEnd.getDate() + 20);

                person.leaves[0].start = originalStart.toISOString().slice(0,10);
                person.leaves[0].end = originalEnd.toISOString().slice(0,10);
            }
        });
        calculateConflicts();
        refreshAllViews();
        document.body.classList.remove('magic-resolving');
        showToast("✅ All conflicts magically resolved!", "success", 4000);
    }, 1500);
}

// 4. RENDER DASHBOARD
function renderDashboard() {
    const grid = document.getElementById('dashboard-grid');
    grid.innerHTML = '';

    const uiSortedRoster = [...roster].sort((a, b) => {
        if (a.crew !== b.crew) return (crewOrder[a.crew] || 99) - (crewOrder[b.crew] || 99);
        return (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99);
    });

    uiSortedRoster.forEach(person => {
        let leavesHTML = person.leaves.length === 0 ? `<p class="text-xs text-gray-400 italic mt-2">No leave scheduled.</p>` : '';
        person.leaves.forEach(lv => {
            const color = lv.type === 'Applied on SAP' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700';
            leavesHTML += `<div class="mt-2 text-xs font-medium px-2 py-1 rounded ${color} inline-block">${lv.start} to ${lv.end}</div><br>`;
        });

        let conflictHTML = person.conflict ? `<div class="mt-3 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-xs font-bold conflict-badge shadow-sm">⚠️ CONFLICT WITH: ${person.conflictWith.join(', ')}</div>` : '';

        const magicTrigger = person.name === "Mohammad Algarni" ? `ondblclick="unlockAutoScheduler()" class="cursor-pointer title-hover"` : ``;

        grid.innerHTML += `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 border-crew-${person.crew} hover:shadow-md transition-shadow">
                <div class="flex justify-between items-start">
                    <div ${magicTrigger} title="${person.name === 'Mohammad Algarni' ? 'Double click for Magic Wand' : ''}">
                        <h3 class="text-lg font-bold text-gray-900 ${person.color}">${person.name}</h3>
                        <p class="text-xs text-gray-500 font-medium">Crew ${person.crew} • ${person.role}</p>
                    </div>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-50">
                    ${leavesHTML}${conflictHTML}
                </div>
            </div>
        `;
    });
}

// 5. RENDER TIMELINE
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    let html = `<div class="timeline-grid"><div></div>`; 
    
    let startDate = new Date("2026-04-15T00:00:00Z");
    const dates = [];

    for(let i=0; i<30; i++) {
        let d = new Date(startDate);
        d.setDate(d.getDate() + i);
        dates.push(d);
        html += `<div class="timeline-header">${d.getDate()}<br>${d.toLocaleDateString('en-US', {weekday:'narrow', timeZone:'UTC'})}</div>`;
    }

    const uiSortedRoster = [...roster].sort((a, b) => {
        if (a.crew !== b.crew) return (crewOrder[a.crew] || 99) - (crewOrder[b.crew] || 99);
        return (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99);
    });

    uiSortedRoster.forEach(person => {
        html += `<div class="text-xs font-bold truncate pr-2" style="color:var(--${person.color});">${person.name}</div>`;
        const cycle = shiftCycles[person.crew] || shiftCycles['General'];

        dates.forEach(date => {
            const dateStr = date.toISOString().slice(0, 10);
            const diffInDays = getDaysSinceBase(dateStr);
            const shift = cycle[((diffInDays % 8) + 8) % 8];

            let cellColor = shift === 'D' ? '#FFF2CC' : (shift === 'N' ? '#DDEBF7' : '#F3F4F6');
            let hoverText = `Shift: ${shift}`;

            person.leaves.forEach(lv => {
                if (dateStr >= lv.start && dateStr <= lv.end) {
                    cellColor = lv.type === 'Applied on SAP' ? '#FF7C80' : '#FFFF00';
                    hoverText = `Leave: ${lv.type}`;
                }
            });

            html += `<div class="timeline-cell" style="background-color: ${cellColor};" title="${dateStr} - ${hoverText}"></div>`;
        });
    });

    html += `</div>`;
    container.innerHTML = html;
}

// 6. EDITOR
function openEditModal() {
    const select = document.getElementById('emp-select');
    select.innerHTML = '';
    roster.forEach(p => {
        select.innerHTML += `<option value="${p.id}">${p.name} (${p.crew})</option>`;
    });
    document.getElementById('edit-modal').classList.remove('hidden');
}

function closeEditModal() {
    document.getElementById('edit-modal').classList.add('hidden');
}

function saveLeave() {
    const empId = parseInt(document.getElementById('emp-select').value);
    const start = document.getElementById('leave-start').value;
    const end = document.getElementById('leave-end').value;
    const type = document.getElementById('leave-type').value;

    if (!start || !end) {
        alert("Please select dates!"); return;
    }

    const person = roster.find(p => p.id === empId);
    person.leaves.push({ start, end, type }); 
    
    closeEditModal();
    showToast(`${person.name}'s leave saved!`, 'success');
    refreshAllViews();
}

function showToast(message, type = 'success', duration = 3000) {
    const toast = document.getElementById('toast-container');
    toast.textContent = message;
    toast.className = 'flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-opacity duration-300 shadow-md fixed bottom-6 right-6 z-50';
    if (type === 'success') toast.classList.add('bg-green-100', 'text-green-800');
    if (type === 'saving') toast.classList.add('bg-blue-100', 'text-blue-800');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), duration);
}

// 7. EXCEL EXPORT (2026 & 2027)
async function exportToExcel() {
    try {
        showToast('Generating 2026 & 2027 Excel Dashboards...', 'saving', 5000);
        const workbook = new ExcelJS.Workbook();

        const sortedRoster = [...roster].sort((a, b) => {
            if (a.crew !== b.crew) return (crewOrder[a.crew] || 99) - (crewOrder[b.crew] || 99);
            return (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99);
        });

        const borderStyle = { style: 'thin', color: { argb: 'FFD9D9D9' } };
        const gridBorder = { top: borderStyle, left: borderStyle, bottom: borderStyle, right: borderStyle };
        
        const fills = {
            header: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE7E6E6' } },
            weekend: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF2F2F2' } },
            day: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF2CC' } },
            night: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFDDEBF7' } },
            sap: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFF7C80' } },
            plan: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFFF00' } }
        };

        const fonts = {
            day: { bold: true, color: { argb: 'FFD6B656' } },
            night: { bold: true, color: { argb: 'FF6C8EBF' } },
            black: { bold: true, color: { argb: 'FF000000' } }
        };

        const nameColors = {
            'crew-red': 'FFFF0000', 'crew-yellow': 'FFD4AF37', 'crew-green': 'FF00B050',
            'crew-lightblue': 'FF0070C0', 'crew-lightviolet': 'FF7030A0', 'crew-lightorange': 'FFED7D31',
            'crew-grey': 'FF808080'
        };

        function buildSheet(year) {
            const ws = workbook.addWorksheet(`${year} Roster`, {
                views: [{ state: 'frozen', xSplit: 4, ySplit: 4 }] 
            });

            ws.columns = [
                { width: 14 }, { width: 35 }, { width: 14 }, { width: 25 }
            ];
            
            ws.mergeCells('A1:D1');
            const titleCell = ws.getCell('A1');
            titleCell.value = `${year} OPERATIONS & LEAVE ROSTER`;
            titleCell.font = { size: 14, bold: true };
            titleCell.alignment = { horizontal: 'center', vertical: 'middle' };

            const legend = [
                { range: 'E1:F1', text: ' S = SAP', fill: fills.sap },
                { range: 'H1:I1', text: ' P = Plan', fill: fills.plan },
                { range: 'K1:M1', text: ' D = Day Shift', fill: fills.day },
                { range: 'O1:R1', text: ' N = Night Shift', fill: fills.night }
            ];

            legend.forEach(item => {
                ws.mergeCells(item.range);
                const cell = ws.getCell(item.range.split(':')[0]);
                cell.value = item.text;
                cell.fill = item.fill;
                cell.font = fonts.black;
                cell.border = gridBorder;
                cell.alignment = { horizontal: 'center', vertical: 'middle' };
            });

            const headerTitles = ["Emp ID", "Full Name", "Crew", "Role"];
            headerTitles.forEach((text, i) => {
                ws.mergeCells(3, i + 1, 4, i + 1);
                const cell = ws.getCell(3, i + 1);
                cell.value = text;
                cell.font = fonts.black;
                cell.alignment = { horizontal: 'center', vertical: 'middle' };
                cell.fill = fills.header;
                cell.border = gridBorder;
            });

            const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
            const monthDays = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            let colIdx = 5;
            const dateToCol = {};

            months.forEach((mName, mIdx) => {
                const daysInMonth = monthDays[mIdx];
                
                ws.mergeCells(2, colIdx, 2, colIdx + daysInMonth - 1);
                const mCell = ws.getCell(2, colIdx);
                mCell.value = mName;
                mCell.font = fonts.black;
                mCell.alignment = { horizontal: 'center', vertical: 'middle' };
                mCell.fill = fills.header;
                mCell.border = gridBorder;

                for (let d = 1; d <= daysInMonth; d++) {
                    const currentCol = colIdx + d - 1;
                    ws.getColumn(currentCol).width = 3.5;

                    const dateStr = `${year}-${String(mIdx+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
                    dateToCol[dateStr] = currentCol;

                    const dCell = ws.getCell(3, currentCol);
                    dCell.value = d;
                    dCell.alignment = { horizontal: 'center' };
                    dCell.border = gridBorder;

                    const currentDate = new Date(dateStr + 'T00:00:00Z');
                    const dayOfWeek = currentDate.getUTCDay();

                    const dowCell = ws.getCell(4, currentCol);
                    dowCell.value = currentDate.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' })[0];
                    dowCell.alignment = { horizontal: 'center' };
                    dowCell.font = { size: 8, color: { argb: 'FF595959' } };
                    dowCell.border = gridBorder;

                    if (dayOfWeek === 5 || dayOfWeek === 6) {
                        dCell.fill = fills.weekend;
                        dowCell.fill = fills.weekend;
                    }
                }
                colIdx += daysInMonth;
            });

            let rowNum = 5;
            sortedRoster.forEach(person => {
                const cycle = shiftCycles[person.crew] || shiftCycles['General'];
                
                ws.getCell(rowNum, 1).value = person.empId;
                ws.getCell(rowNum, 1).alignment = { horizontal: 'center', vertical: 'middle' };
                ws.getCell(rowNum, 1).border = gridBorder;

                ws.getCell(rowNum, 2).value = person.name;
                ws.getCell(rowNum, 2).alignment = { vertical: 'middle' };
                ws.getCell(rowNum, 2).border = gridBorder;
                ws.getCell(rowNum, 2).font = { bold: true, color: { argb: nameColors[person.color] || 'FF000000' } };

                ws.getCell(rowNum, 3).value = person.crew === 'General' ? 'General' : `Crew ${person.crew}`;
                ws.getCell(rowNum, 3).alignment = { horizontal: 'center', vertical: 'middle' };
                ws.getCell(rowNum, 3).border = gridBorder;

                ws.getCell(rowNum, 4).value = person.role;
                ws.getCell(rowNum, 4).alignment = { horizontal: 'center', vertical: 'middle' };
                ws.getCell(rowNum, 4).border = gridBorder;

                let dayCount = 0;
                for (let m = 0; m < 12; m++) {
                    for (let d = 1; d <= monthDays[m]; d++) {
                        const dateStr = `${year}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
                        const diffInDays = getDaysSinceBase(dateStr);
                        
                        const shift = cycle[((diffInDays % 8) + 8) % 8]; 
                        const c = 5 + dayCount;
                        const cell = ws.getCell(rowNum, c);

                        const currentDate = new Date(dateStr + 'T00:00:00Z');
                        const isWeekend = currentDate.getUTCDay() === 5 || currentDate.getUTCDay() === 6;

                        cell.alignment = { horizontal: 'center', vertical: 'middle' };
                        cell.border = gridBorder;

                        if (shift === 'D') {
                            cell.value = 'D'; cell.fill = fills.day; cell.font = fonts.day;
                        } else if (shift === 'N') {
                            cell.value = 'N'; cell.fill = fills.night; cell.font = fonts.night;
                        } else if (isWeekend) {
                            cell.fill = fills.weekend;
                        }
                        dayCount++;
                    }
                }

                if (person.leaves) {
                    person.leaves.forEach(lv => {
                        if (lv.start.startsWith(String(year)) || lv.end.startsWith(String(year))) {
                            let cur = new Date(lv.start + 'T12:00:00Z');
                            let end = new Date(lv.end + 'T12:00:00Z');

                            while (cur <= end) {
                                const c = dateToCol[cur.toISOString().slice(0, 10)];
                                if (c) {
                                    const lCell = ws.getCell(rowNum, c);
                                    const isSAP = lv.type === 'Applied on SAP';
                                    lCell.value = isSAP ? 'S' : 'P';
                                    lCell.fill = isSAP ? fills.sap : fills.plan;
                                    lCell.font = fonts.black;
                                }
                                cur.setDate(cur.getDate() + 1);
                            }
                        }
                    });
                }
                rowNum++;
            });
        }

        buildSheet(2026);
        buildSheet(2027);

        const outBuffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([outBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Operations-Master-Roster.xlsx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showToast('Exported seamlessly!', 'success');
    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
}

// 8. MASTER INIT
// 8. MASTER REFRESH (The missing piece!)
function refreshAllViews() {
    calculateConflicts();
    renderDashboard();
    renderTimeline();
}

// 9. INIT APP (Wait for HTML to load first)
document.addEventListener('DOMContentLoaded', () => {
    refreshAllViews();
});