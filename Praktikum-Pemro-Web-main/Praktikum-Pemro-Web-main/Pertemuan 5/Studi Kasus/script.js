// Simulasi data cuaca
const weatherData = {
    "bandung": {
    temperature: 30,
    condition: "Cerah"
    },
    "balikpapan": {
    temperature: 25,
    condition: "Hujan Ringan"
    },
    "jogja": {
    temperature: 34,
    condition: "Panas Terik"
    },
    "palaembang": {
    temperature: 31,
    condition: "Mendung"
    },
    "bali": {
    temperature: 24,
    condition: "berawan"
    }
};

function cekCuaca() {
    const city = document.getElementById("cityInput").value.toLowerCase();
    const data = weatherData[city];

    if (data) {
    console.log(`Cuaca di ${city.charAt(0).toUpperCase() + city.slice(1)}:`);
    console.log(`Suhu: ${data.temperature}°C`);
    console.log(`Kondisi: ${data.condition}`);
    } else {
    console.log(`Data cuaca untuk kota "${city}" tidak ditemukan.`);
    }
}
