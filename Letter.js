$(document).ready(function () {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Pesan surat diperbarui
    var message = `
      Dear Tyara,<br><br>

      Maybe our love story doesn't start like those romantic couple out there.<br>

      But it's ok as long as I still have you.<br>

      Of course, it's not like I don't like being romantic because we still have so much to grow.<br>

      I'm just thankful for how you accepted me even though I'm not like the ordinary man.<br>

      The truth is I've always prayed to God for something like this to happen.<br>

      When I ask for something new in my life, God introduced me to you.<br>
      And when I ask for strength, God gave me several difficulties or problem from the start of our interaction to make my heart stronger.<br>

      I ask for wisdom, and God gave me problems from every possible side like school, organization, and you, for me to Learn.<br>

      I asked for courage, and God gave me a situation to overcome my cowardly self.<br>

      And when I asked for love, God gave me the strength, wisdom, courage, and patience to ask you out.<br>

      "Ask and you shall receive."  Matthew 7:7<br><br>

      After all that, it came to my conclusion that all of my prayers were answered by God with you.<br><br>

      Best regards,<br>
      Geo. ❤️
    `;

    $('#letter-content').html(message); // Tambahkan pesan ke surat

    envelope.click(function () {
        open();
    });

    btn_open.click(function () {
        open();
    });

    btn_reset.click(function () {
        close(); // Tutup surat
        resetAnimation(); // Reset animasi
    });

    function open() {
        envelope.addClass("open").removeClass("close");

        // Aktifkan ulang animasi scroll dengan kecepatan lambat
        var contentHeight = $('#letter-content').outerHeight();
        if (contentHeight > 0) {
            var animationDuration = Math.max(contentHeight / 20, 40); // Durasi minimum 40 detik untuk surat panjang
            $('.content').css({
                animation: `scrollText ${animationDuration}s linear`,
                transform: "translateY(0%)" // Mulai dari atas
            });
        }
    }

    function close() {
        envelope.addClass("close").removeClass("open");

        // Reset posisi teks ke atas
        $('.content').css({
            animation: "none", // Hentikan animasi
            transform: "translateY(0%)" // Reset ke posisi awal
        });

        // Reload pesan jika hilang
        $('#letter-content').html(message);
    }

    function resetAnimation() {
        $('.content').css({
            animation: "none" // Hapus animasi
        });
        setTimeout(() => {
            // Aktifkan kembali animasi dengan delay kecil
            open();
        }, 10); // Delay untuk memastikan animasi di-restart
    }
});
