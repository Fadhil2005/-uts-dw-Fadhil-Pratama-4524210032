const InputImage = document.getElementById('poster');
const previewImage = document.getElementById('preview-image');

const inputJudul = document.querySelector('#judul');
const previewJudul = document.querySelector('#preview-judul');

const inputChapter = document.querySelector('#chapter');
const previewChapter = document.querySelector('#preview-chapter');

const inputTanggal = document.querySelector('#tanggal');
const previewTanggal = document.querySelector('#preview-tanggal');

const inputStudio = document.querySelector('#studio');
const previewStudio = document.querySelector('#preview-studio');

const inputSinopsis = document.querySelector('#sinopsis');
const previewSinopsis = document.querySelector('#preview-sinopsis');

InputImage.addEventListener('input', () => {
  if (InputImage.value.trim() === "") {
    previewImage.src = "";
  } else {
    previewImage.src = InputImage.value;
  }
});


inputJudul.addEventListener('input', function() {
    const hasilJudul = inputJudul.value;
    
    if (hasilJudul === "") {
        previewJudul.textContent = "...";
    } else {
        previewJudul.textContent = hasilJudul;
    }
});

inputChapter.addEventListener('input', function() {
    const hasilChapter = inputChapter.value;
    
    if (hasilChapter === "") {
        previewChapter.textContent = "...";
    } else {
        previewChapter.textContent = hasilChapter;
    }
});

inputTanggal.addEventListener('input', function() {
    const hasilTanggal = inputTanggal.value;
    
    if (hasilTanggal === "") {
        previewTanggal.textContent = "...";
    } else {
        previewTanggal.textContent = hasilTanggal;
    }
});


inputStudio.addEventListener('input', function() {
    const hasilStudio = inputStudio.value;
    
    if (hasilStudio === "") {
        previewStudio.textContent = "...";
    } else {
        previewStudio.textContent = hasilStudio;
    }
});

inputSinopsis.addEventListener('input', function() {
    const hasilSinopsis = inputSinopsis.value;
    
    if (hasilSinopsis === "") {
        previewSinopsis.textContent = "...";
    } else {
        previewSinopsis.textContent = hasilSinopsis;
    }
});
