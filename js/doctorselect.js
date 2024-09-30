document.addEventListener('DOMContentLoaded', function() {
    const specialtySelect = document.getElementById('specialty');
    const doctorSelect = document.getElementById('doctor');

    const doctorOptions = {
        dentistry: [
            { value: 'dr_mohammed_atef', text: 'Dr. Mohammed Atef' },
            { value: 'dr_malak_abdelaziz', text: 'Dr. Malak Abdelaziz' },
            { value: 'dr_ahmed_abdelazim', text: 'Dr. Ahmed Abdelazim' }
        ],
        gastroenterology: [
            { value: 'dr_mohammed_magdy', text: 'Dr. Mohammed Magdy' },
            { value: 'dr_mahmoud_abdelaziz', text: 'Dr. Mahmoud Abdelaziz' },
            { value: 'dr_omer_abdelazim', text: 'Dr. Omer Abdelazim' }
        ],
        neurology: [
            { value: 'dr_zain_atef', text: 'Dr. Zain Atef' },
            { value: 'dr_farida_ahmed', text: 'Dr. Farida Ahmed' },
            { value: 'dr_ahmed_magdy', text: 'Dr. Ahmed Magdy' }
        ],
        pediatrics: [
            { value: 'dr_hala_magdy', text: 'Dr. Hala Magdy' },
            { value: 'dr_hoda_ahmed', text: 'Dr. Hoda Ahmed' },
            { value: 'dr_eman_badr', text: 'Dr. Eman Badr' }
        ],
        cardiology: [
            { value: 'dr_mohammed_abdelrahman', text: 'Dr. Mohammed Abdelrahman' },
            { value: 'dr_yara_ahmed', text: 'Dr. Yara Ahmed' },
            { value: 'dr_sara_mostafa', text: 'Dr. Sara Mostafa' }
        ],
        urology: [
            { value: 'dr_waled_mohammed', text: 'Dr. Waled Mohammed' },
            { value: 'dr_gamila_hassan', text: 'Dr. Gamila Hassan' },
            { value: 'dr_heba_gamal', text: 'Dr. Heba Gamal' }
        ],
        rheumatology: [
            { value: 'dr_magdy_onaim', text: 'Dr. Magdy Onaim' },
            { value: 'dr_mahmoud_elsayad', text: 'Dr. Mahmoud Elsayad' },
            { value: 'dr_alaa_elgamry', text: 'Dr. Alaa ElGamry' }
        ]
    };

    specialtySelect.addEventListener('change', function() {
        const selectedSpecialty = specialtySelect.value;

        // Clear existing doctor options
        doctorSelect.innerHTML = '<option value="">----</option>';

        if (selectedSpecialty && doctorOptions[selectedSpecialty]) {
            const optGroup = document.createElement('optgroup');
            optGroup.label = specialtySelect.options[specialtySelect.selectedIndex].text;

            doctorOptions[selectedSpecialty].forEach(function(doctor) {
                const option = document.createElement('option');
                option.value = doctor.value;
                option.text = doctor.text;
                optGroup.appendChild(option);
            });

            doctorSelect.appendChild(optGroup);
        }
    });
});
