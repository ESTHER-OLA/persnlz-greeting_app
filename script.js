
      // Get the form element
      const form = document.getElementById('my-form');

      // Get the input element
      const input = document.getElementById('name-input');

      // Get the clear button element
      const clearButton = document.getElementById('clear-button');

      // Get the greeting element
      const greeting = document.getElementById('greeting');

      // Add an event listener to the form
      form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the name from the input element
        const name = input.value;

        // Store the name in local storage
        localStorage.setItem('name', name);

        // Update the displayed greeting
        greeting.textContent = `Hello, ${name}!`;

        // Log the name to the console
        console.log('Form submitted with the following data:');
        console.log('Name:', name);
      });

      // Add an event listener to the clear button
      clearButton.addEventListener('click', function() {
        // Clear the stored name from local storage
        localStorage.removeItem('name');

        // Clear the input field
        input.value = '';

        // Update the displayed greeting
        greeting.textContent = 'Hello, stranger!';
      });

      // Check if a name is stored in local storage
      const storedName = localStorage.getItem('name');

      // Update the displayed greeting based on whether a name was stored or not
      if (storedName) {
        greeting.textContent = `Hello, ${storedName}!`;
        input.value = storedName;
      } else {
        greeting.textContent = 'Hello, stranger!';
      }