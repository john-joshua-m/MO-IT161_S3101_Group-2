const { createApp } = Vue;

createApp({
data() {
    return {
        
        items: JSON.parse(localStorage.getItem('todoItems')) || [  // Initialize items from Local Storage, the last changes we had before we close the browser, gets initialized 
            { description: 'Sample Task', completed: false },  
            { description: 'Sample Marked Off Task', completed: true }
        ],  
        
        message: 'Hello World!',
        quoteText: 'Loading quote of the day....',
        quoteAuthor: '',
        currentTime: '',
        currentDate: '',
        currentDay: '',
        tempCelsius: '--',
        feelsCelsius: '--',
        tempFahrenheit: '--',
        feelsFahrenheit: '--',
        city: '--',
        country: '--',
        
        newItemInput: '', 
            };
        },

    methods: {
        updateClock() {
            const now = new Date();
            this.currentTime = now.toLocaleTimeString();
            this.currentDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            this.currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });
        },

        async fetchWeather(lat, lon) {
            try {
                const apiKey = 'e9a0d2c7ae89366465a6d05cac11c2d3';
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
                const res = await fetch(url);
                const data = await res.json();

                this.city = data.name;
                this.country = data.sys.country;
                this.tempCelsius = data.main.temp.toFixed(1);
                this.feelsCelsius = data.main.feels_like.toFixed(1);
                this.tempFahrenheit = (data.main.temp * 9/5 + 32).toFixed(1);
                this.feelsFahrenheit = (data.main.feels_like * 9/5 + 32).toFixed(1);

            } catch (error) {
                console.error('Error fetching weather:', error);
                this.city = 'Error fetching data';
            }
        },

        detectCity() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        this.fetchWeather(latitude, longitude);
                    },
                    () => {
                        this.city = 'Unable to detect location';
                    }
                );
            } else {
                this.city = 'Geolocation not supported';
            }
        },

        addItem() {
            if (this.newItemInput.trim() !== '') {
                this.items.push({                                 /*Saves items into the browser's local storage*/
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
        },

        async getQuoteOfTheDay() {
            const QUOTE_API_URL = 'https://api.allorigins.win/raw?url=https://zenquotes.io/api/today';
            try {
            const response = await fetch(QUOTE_API_URL);
            const data = await response.json();
            const quote = data[0]; // ZenQuotes returns an array
            this.quoteText = quote.q;
            this.quoteAuthor = quote.a;
            } catch (error) {
            console.error('Failed to fetch quote:', error);
            this.quoteText = 'Unable to fetch quote at the moment.';
            this.quoteAuthor = '';
            }
        }

    },

    watch: {
    items: {             /* This is our watcher, its responsible for getting all items saved into the browser's local storage*/
        handler(newItems) {
            localStorage.setItem('todoItems', JSON.stringify(newItems)); 
        },
        deep: true 
            }
        },

    mounted() {
        console.log('Vue app is running');
        this.getQuoteOfTheDay();
        this.updateClock();
        setInterval(this.updateClock, 1000);
        this.detectCity(); 
             }
        }).mount('#app');

