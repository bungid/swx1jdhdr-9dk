function copy(rekening) { var nomor_rekening = document.getElementById(rekening); nomor_rekening.select(); document.execCommand("copy"); iqwerty.toast.Toast("Nomor Berhasil Disalin"); } function berhasil(rekening) { var nomor_rekening = document.getElementById(rekening); nomor_rekening.select(); document.execCommand("copy"); iqwerty.toast.Toast("Berhasil Disalin"); } 
