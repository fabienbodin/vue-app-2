var GendersMixin = {
    data: () => ({
        genders: []
    }),
    methods: {
        loadGenders: function() {
            if (this.hasSaveGenders()) {
                this.genders = JSON.parse(localStorage.getItem('genders'));
                console.log('Genders loaded.');
            } else {
                this.setDefaultGenders();
            }
        },
        setDefaultGenders: function() {
            this.genders = ['Homme', 'Femme'];
            console.log('Set default genders.');
            this.saveGenders();
        },
        hasSaveGenders: function() {
            const genders = localStorage.getItem('genders');
            return genders !== null;
        },
        saveGenders: function() {
            localStorage.setItem('genders', JSON.stringify(this.genders));
            console.log('Genders saved.');
        }
    }
}

export default GendersMixin;