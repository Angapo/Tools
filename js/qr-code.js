function generateQRCode() {
      const text = document.getElementById("text").value;
      const qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";

      if (text.trim() === "") {
        alert("กรุณากรอกข้อความก่อน");
        return;
      }

      new QRCode(qrcodeContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark: "#2d3436",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }

    function clearQRCode() {
      document.getElementById("text").value = "";
      document.getElementById("qrcode").innerHTML = "";
    }