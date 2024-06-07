document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu-icon').addEventListener('click', function () {
        const dropdownMenu = document.getElementById('dropdown-menu');
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        } else {
            dropdownMenu.classList.add('show');
        }
    });

    document.getElementById('chat-input-text').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const chatBox = document.getElementById('chat-box');
            const messageBase = `<div id="message" class="flex flex-col gap-2 ml-32 mr-2">
                <p class="text-sm text-gray-800">{message}</p>
            </div>`;

            const message = e.target.value;
            const newMessage = messageBase.replace('{message}', message);
            chatBox.innerHTML += newMessage;
            e.target.value = '';
        }
    });

    document.getElementById('close-chat').addEventListener('click', function () {
        const chatMenu = document.getElementById('chat-menu');
        if (chatMenu.classList.contains('show')) {
            chatMenu.classList.remove('show');
        }
    });

    document.getElementById('open-chat').addEventListener('click', function () {
        const chatMenu = document.getElementById('chat-menu');
        if (!chatMenu.classList.contains('show')) {
            chatMenu.classList.add('show');
        }
    });
});
