(function() {
    function reorderSidePanel() {
        const sidePanel = document.querySelector('.task'); // Select the side panel
        if (!sidePanel) return;

        const menuItems = Array.from(sidePanel.querySelectorAll('a.task-link')); // Select all menu items

        // Define your desired order of items by text content (case-insensitive)
        const order = [
            'Build Now',
            'Configure',
            'Delete Project',
            // Add other items here in the desired order
        ];

        // Sort the menu items based on the desired order
        menuItems.sort((a, b) => {
            const textA = a.textContent.trim();
            const textB = b.textContent.trim();
            const indexA = order.indexOf(textA);
            const indexB = order.indexOf(textB);
            return indexA - indexB;
        });

        // Reorder the items in the DOM
        menuItems.forEach(item => sidePanel.appendChild(item.closest('li')));
    }

    // Execute when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', reorderSidePanel);
})();
