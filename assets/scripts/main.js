// main.js

// Get relevant elements
const sound_image = document.getElementById('sound-image');
const volume_image = document.getElementById('volume-image');
const volume_number = document.getElementById('volume-number');
const volume_slider = document.getElementById('volume-slider');
const radio_air_horn = document.getElementById('radio-air-horn');
const radio_car_horn = document.getElementById('radio-car-horn');
const radio_party_horn = document.getElementById('radio-party-horn');
const horn_sound = document.getElementById('horn-sound');
const honk_btn = document.getElementById('honk-btn');

honk_btn.type = 'button';       // Fix to prevent button from reloading page



// Volume change logic
function update_volume_icon(volume_amount) {
    if(volume_amount == 0) {
        volume_image.src = "./assets/media/icons/volume-level-0.svg";
    } else if(volume_amount < 34) {
        volume_image.src = "./assets/media/icons/volume-level-1.svg";
    } else if(volume_amount < 67) {
        volume_image.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        volume_image.src = "./assets/media/icons/volume-level-3.svg";
    }
}

function num_change() {
    update_volume_icon(volume_number.value);
    volume_slider.value = volume_number.value;
    honk_btn.disabled = volume_number.value == 0;

    horn_sound.volume = volume_number.value / 100;
}
volume_number.addEventListener('change', num_change);

function slider_change() {
    update_volume_icon(volume_slider.value);
    volume_number.value = volume_slider.value;
    honk_btn.disabled = volume_slider.value == 0;

    horn_sound.volume = volume_slider.value / 100;
}
volume_slider.addEventListener('change', slider_change);



// Sound change logic
function horn_change() {
    if(radio_air_horn.checked) {
        sound_image.src = "./assets/media/images/air-horn.svg";
        horn_sound.src = "./assets/media/audio/air-horn.mp3";
    } else if(radio_car_horn.checked) {
        sound_image.src = "./assets/media/images/car.svg";
        horn_sound.src = "./assets/media/audio/car-horn.mp3";
    } else {
        sound_image.src = "./assets/media/images/party-horn.svg";
        horn_sound.src = "./assets/media/audio/party-horn.mp3";
    }
}
radio_air_horn.addEventListener('change', horn_change);
radio_car_horn.addEventListener('change', horn_change);
radio_party_horn.addEventListener('change', horn_change);



// Button logic
function btn_press() {
    horn_sound.play();
}
honk_btn.addEventListener('click', btn_press);