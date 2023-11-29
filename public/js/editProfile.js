const user_id = parseInt(window.location.pathname.split('/').pop());

const updateProfileFormHandler = async (event) => {
    event.preventDefault();
    console.log('Script executed');
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();

    if (username && email) {
        try {
            const response = await fetch(`/api/users/${user_id}`, {
                method: "PUT",
                body: JSON.stringify({ username, email }),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                console.log("Update successful");
                window.location.href = `/profile/${user_id}`;
            } else {
                const errorMessage = await response.text();
                console.error("Update failed:", errorMessage);
                alert(`Failure to update profile: ${errorMessage}`);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("An error occurred while updating profile. Please try again.");
        }
    }
};

// Update Profile Event Listener
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event triggered');

    const updateProfileButton = document.querySelector('#update-profile');
    if (updateProfileButton) {
        updateProfileButton.addEventListener('click', (event) => {
            console.log('Button clicked');
            updateProfileFormHandler(event);
        });
    }
});
