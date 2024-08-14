document.addEventListener('DOMContentLoaded', function() {
    // Ensure the tasks container exists
    const tasksContainer = document.querySelector('#tasks');
    
    if (!tasksContainer) {
        console.error('Side panel container not found.');
        return;
    }

    // Locate the 'Pipeline Console' task
    let pipelineConsoleItem = null;
    const taskLinks = tasksContainer.querySelectorAll('.task');

    taskLinks.forEach(item => {
        const linkTextElement = item.querySelector('.task-link-text');
        if (linkTextElement && linkTextElement.textContent.trim() === 'Pipeline Console') {
            pipelineConsoleItem = item;
        }
    });

    if (pipelineConsoleItem) {
        // Move 'Pipeline Console' to the top of the side panel
        tasksContainer.insertBefore(pipelineConsoleItem, tasksContainer.firstChild);
        console.log('Pipeline Console moved to the top.');
    } else {
        console.error('Pipeline Console item not found.');
    }
});
