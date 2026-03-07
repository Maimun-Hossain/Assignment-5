// console.log(document);
const signInCard = document.getElementById("signInCard");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
// 
const mainSection = document.getElementById("mainSection");
// 
const cardContainer = document.getElementById("cardContainer");
// 
const loadingSpinner = document.getElementById("loadingSpinner");
// 
const issuesCounter = document.getElementById("issuesCounter");
const filterButtons = document.querySelectorAll("#BtnContainer button");
// 
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const issueDetailsModal = document.getElementById("issueDetailsModal");
const modalIssueTitle = document.getElementById("modalIssueTitle");
const modalIssueDescription = document.getElementById("modalIssueDescription");
const modalIssueStatusBadge = document.getElementById("modalIssueStatusBadge");
const modalIssueMeta = document.getElementById("modalIssueMeta");
const modalIssueLabels = document.getElementById("modalIssueLabels");
const modalIssueAssignee = document.getElementById("modalIssueAssignee");
const modalIssuePriorityBadge = document.getElementById("modalIssuePriorityBadge");
// 
let allIssues = [];
let activeFilter = "all";

function signInBtnFunc(id){
    // console.log(usernameInput.value);
    // console.log(passwordInput.value);

    if(usernameInput.value === "admin" && passwordInput.value === "admin123"){
        // console.log("Bingo");
        signInCard.classList.add("hidden");
        mainSection.classList.remove("hidden");
    }
}

function showLoading(){
    loadingSpinner.classList.remove("hidden");
    cardContainer.innerHTML = "";
}

function hideLoading(){
    loadingSpinner.classList.add("hidden");
}

function getStatusImage(status){
    if(status === "open"){
        return "./assets/Open-Status.png";
    }
    return "./assets/Closed-Status.png";
}

function getCardBorderClass(status){
    if(status === "open"){
        return "border-[#00a96e]";
    }
    return "border-[#a855f7]";
}

function getPriorityBadgeClass(priority){
    if(priority === "high"){
        return "badge-error";
    }
    if(priority === "low"){
        return "text-[#9ca3af]";
    }
    return "badge-warning";
}

function getLabelStyle(label){
    const labelLower = label.toLowerCase();

    if(labelLower === "bug"){
        return { badgeClass: "badge-error", icon: "bug" };
    }

    if(labelLower === "enhancement"){
        return { badgeClass: "badge-success", icon: "wand-magic-sparkles" };
    }

    if(labelLower === "documentation"){
        return { badgeClass: "badge-primary", icon: "book" };
    }

    if(labelLower === "good first issue"){
        return { badgeClass: "badge-secondary", icon: "hand-sparkles" };
    }

    if(labelLower === "help wanted"){
        return { badgeClass: "badge-warning", icon: "life-ring" };
    }

    return { badgeClass: "badge-warning", icon: "life-ring" };
}

function createLabelsHtml(labels){
    let labelsHtml = "";
    const safeLabels = labels;

    for(let i = 0; i<safeLabels.length; i++){
        const label = safeLabels[i];
        const labelStyle = getLabelStyle(label);

        labelsHtml += `<div class="badge badge-soft ${labelStyle.badgeClass} uppercase rounded-4xl"><i class="fa-solid fa-${labelStyle.icon}"></i> ${label}</div>`;
    }

    return labelsHtml;
}

function formatDateOnly(dateTime){
    return dateTime.split("T")[0];
}

function getModalStatusInfo(status){
    if(status === "open"){
        return {
            text: "Opened",
            className: "badge badge-success badge-soft rounded-full px-3"
        };
    }

    return {
        text: "Closed",
        className: "badge rounded-full px-3 bg-[#a855f7] text-white border-none"
    };
}

function getModalPriorityClass(priority){
    if(priority === "high"){
        return "badge badge-error rounded-full px-3 text-white";
    }

    if(priority === "low"){
        return "badge rounded-full px-3 bg-[#9ca3af] text-white border-none";
    }

    return "badge badge-warning rounded-full px-3";
}

function openIssueModal(issue){
    const status = (issue.status || "closed").toLowerCase();
    const priority = (issue.priority || "medium").toLowerCase();
    const author = issue.author;
    const date = formatDateOnly(issue.createdAt);
    const modalStatusInfo = getModalStatusInfo(status);

    modalIssueTitle.textContent = issue.title;
    modalIssueDescription.textContent = issue.description;
    modalIssueStatusBadge.textContent = modalStatusInfo.text;
    modalIssueStatusBadge.className = modalStatusInfo.className;
    modalIssueMeta.textContent = `${modalStatusInfo.text} by ${author} • ${date}`;
    modalIssueLabels.innerHTML = createLabelsHtml(issue.labels);
    modalIssueAssignee.textContent = author;
    modalIssuePriorityBadge.textContent = priority.toUpperCase();
    modalIssuePriorityBadge.className = getModalPriorityClass(priority);

    issueDetailsModal.showModal();
}

function getFilterFromButtonId(buttonId){
    if(buttonId === "openBtn"){
        return "open";
    }

    if(buttonId === "closedBtn"){
        return "closed";
    }

    return "all";
}

async function loadIssues(){
    showLoading();
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    const data = await res.json();
    allIssues = data.data || [];
    // .then((json) => console.log(json.data.length))
    hideLoading();
    setActiveFilterButton(activeFilter);
    renderIssues();
}

async function searchIssues(searchText){
    showLoading();
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`)
    const data = await res.json();
    const searchResults = data.data || [];
    hideLoading();
    issuesCounter.textContent = searchResults.length;
    cardContainer.innerHTML = "";
    displayIssues(searchResults);
}

function setActiveFilterButton(filter){
    filterButtons.forEach(button => {
        const buttonFilter = getFilterFromButtonId(button.id);
        const isActive = buttonFilter === filter;

        if(isActive){
            button.classList.remove("btn-outline");
            button.classList.add("btn-primary");
        }
        else{
            button.classList.add("btn-outline", "btn-primary");
        }
    });
}

function renderIssues(){
    let filteredIssues = [];

    if(activeFilter === "all"){
        filteredIssues = allIssues;
    }
    else{
        filteredIssues = allIssues.filter(issue => issue.status?.toLowerCase() === activeFilter);
    }

    issuesCounter.textContent = filteredIssues.length;
    cardContainer.innerHTML = "";
    displayIssues(filteredIssues);
}

function displayIssues(issues){
    for(let i = 0; i < issues.length; i++){
        const issue = issues[i];

        const card = document.createElement("div");
        const status = issue.status ? issue.status.toLowerCase() : "closed";
        const borderClass = getCardBorderClass(status);
        const statusImage = getStatusImage(status);
        const priorityClass = getPriorityBadgeClass(issue.priority);
        const labelsHtml = createLabelsHtml(issue.labels);
        const author = issue.author;
        const formattedDate = formatDateOnly(issue.createdAt);

        card.className = `card bg-white shadow-lg w-3xs border-t-[3px] ${borderClass} rounded-sm p-4 cursor-pointer`;
        card.innerHTML = `<div class="flex items-center justify-between mb-3">
                            <img src="${statusImage}" alt="">
                            <div class="badge badge-soft ${priorityClass} rounded-4xl uppercase">${issue.priority}</div>
                        </div>
                        <h5 class="text-sm font-semibold text-[#1f2937]">${issue.title}</h5>
                        <p class="text-[0.75rem] text-[#64748b] mt-2 mb-3">${issue.description}</p>
                        <div class="flex items-center gap-2 flex-wrap">
                            ${labelsHtml}
                        </div>
                        <div class="divider my-4"></div>
                        <p class="text-[#64748b] text-xs mb-2">#${issue.id} by ${author}</p>
                        <p class="text-[#64748b] text-xs">${formattedDate}</p>`;
        card.addEventListener("click", () => {
            openIssueModal(issue);
        });
        cardContainer.appendChild(card);
    }
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        activeFilter = getFilterFromButtonId(button.id);
        setActiveFilterButton(activeFilter);
        renderIssues();
    });
});

searchBtn.addEventListener("click", () => {
    const searchText = searchInput.value.trim();

    if(searchText === ""){
        renderIssues();
    }
    else{
        searchIssues(searchText);
    }
});

loadIssues();