const { createApp } = Vue;

createApp({
  
    data() {
        return {
            message: 'Hello World!',
            currentTime: '',
            currentDate: '',
            currentDay: '',
            tempCelsius: '--',
            feelsCelsius: '--',
            tempFahrenheit: '--',
            feelsFahrenheit: '--',
            city: '--',
            country: '--',
            
            // To-Do List data
            newItemInput: '',
            items: [
                { description: 'Sample Task', completed: false },
                { description: 'Sample Marked Off Task', completed: true }
            ]
        };
    },

    
    methods: {
        updateClock() {
            const now = new Date();
            this.currentTime = now.toLocaleTimeString();
            this.currentDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            this.currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
        }, 

        addItem() {
            if (this.newItemInput.trim() !== '') {
                this.items.push({ 
                    description: this.newItemInput.trim(), 
                    completed: false 
                });
                this.newItemInput = '';
            } 
        }, 

        deleteItem(index) {
            this.items.splice(index, 1);
        },

        resetAll() {
            this.items = [];
            this.newItemInput = '';
        }
    }, 

    mounted() {
        this.updateClock(); 
        setInterval(this.updateClock, 1000);
    }
    
}).mount('#app');
