document.addEventListener('DOMContentLoaded', function () {

    const tabs = document.querySelectorAll('.team-tab');
    const contents = document.querySelectorAll('.team-tab-content');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {

            // Remove active from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active to clicked tab
            tab.classList.add('active');

            // Show matching content
            const target = tab.getAttribute('data-tab');
            document.getElementById(target).classList.add('active');
        });
    });

});