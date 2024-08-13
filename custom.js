document.addEventListener('DOMContentLoaded', function() {
    // Find the "Pipeline Console" menu item
    const menuItems = document.querySelectorAll('#tasks .task-link');

    menuItems.forEach(item => {
        const linkTextElement = item.querySelector('.task-link-text');
        if (linkTextElement && linkTextElement.innerText === 'Pipeline Console') {
            // Rename it to "Console Pipeline"
            linkTextElement.innerText = 'Console Pipeline';
        }
    });
});
