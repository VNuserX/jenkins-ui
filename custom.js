(function() {
    function reorderJobs() {
        const jobsMenu = document.querySelectorAll('.task')[1].parentNode;
        const jobs = Array.from(jobsMenu.querySelectorAll('li'));

        jobs.sort((a, b) => {
            const nameA = a.textContent.trim().toUpperCase();
            const nameB = b.textContent.trim().toUpperCase();
            return nameA.localeCompare(nameB);
        });

        jobs.forEach(job => jobsMenu.appendChild(job));
    }

    // Execute when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', reorderJobs);
})();
