// Data produk (50 produk dari Google Drive)
// Ganti nama produk, deskripsi, dan harga sesuai keinginan Anda
const produkData = [
    { nama: "Produk 1", deskripsi: "Deskripsi produk 1", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1crNGWGCUUKbN4DKSepuZJ1FgyPxoXvxn&sz=w400" },
    { nama: "Produk 2", deskripsi: "Deskripsi produk 2", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1BV_E1xWo5gBdWUN6FYzADGm7n8Zkjbje&sz=w400" },
    { nama: "Produk 3", deskripsi: "Deskripsi produk 3", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1JIw6olRUQJiYBIjmzUVnaa_lkEGyKrFr&sz=w400" },
    { nama: "Produk 4", deskripsi: "Deskripsi produk 4", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=18qLELD_WboVr1NGwnccd7W_dSU91WgmN&sz=w400" },
    { nama: "Produk 5", deskripsi: "Deskripsi produk 5", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1fwkaAX-At7pi5jZn2wFc-4OAQZFN7fEr&sz=w400" },
    { nama: "Produk 6", deskripsi: "Deskripsi produk 6", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1brzTPmbXCV-U3p5LEFfxvr4xTwmDgt5q&sz=w400" },
    { nama: "Produk 7", deskripsi: "Deskripsi produk 7", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1ASdUvFvEUT_Vwr4QJwiXBW1dvfhHMVgF&sz=w400" },
    { nama: "Produk 8", deskripsi: "Deskripsi produk 8", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=13OIG1KJQyP8t-1hjkXibbNASMR8BTiPS&sz=w400" },
    { nama: "Produk 9", deskripsi: "Deskripsi produk 9", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1PxDEoJydURWXPjmf1IDAbz8n0MuYOIqj&sz=w400" },
    { nama: "Produk 10", deskripsi: "Deskripsi produk 10", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1zBvCKxw0_E_DJ-KvYG_mwtsUk4vtFPXG&sz=w400" },
    { nama: "Produk 11", deskripsi: "Deskripsi produk 11", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=19oA5g6B5zWCeWxDErpdZP1UBWWasXZk9&sz=w400" },
    { nama: "Produk 12", deskripsi: "Deskripsi produk 12", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1wH7_cuk9AMOSMWhocS3kZ_mY1wa9oCVY&sz=w400" },
    { nama: "Produk 13", deskripsi: "Deskripsi produk 13", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1s_ldpKZAOZ2K7_thv7tbaInE83ph09Bs&sz=w400" },
    { nama: "Produk 14", deskripsi: "Deskripsi produk 14", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1djaVD2E5HNPRgPG1nK4cN_LDGSlAOAkI&sz=w400" },
    { nama: "Produk 15", deskripsi: "Deskripsi produk 15", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1M1D78_9xzjmECVqHOxL9QfernYAIaXVF&sz=w400" },
    { nama: "Produk 16", deskripsi: "Deskripsi produk 16", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1iMbOU_v30cOWmqUUsHt-IcJNOTwoMfTY&sz=w400" },
    { nama: "Produk 17", deskripsi: "Deskripsi produk 17", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1nDNFCizucusTz6ulnupPYjoca0Aw56YW&sz=w400" },
    { nama: "Produk 18", deskripsi: "Deskripsi produk 18", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1rITOgDpnwxAifvyKSQGs9g4rYZ44sCDS&sz=w400" },
    { nama: "Produk 19", deskripsi: "Deskripsi produk 19", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1W_WbppH-eo4l43KUleiNdtw3kr9UBl3X&sz=w400" },
    { nama: "Produk 20", deskripsi: "Deskripsi produk 20", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1Qr93LewSlsJHZIm_EcE9UfdaDaFnr0Vs&sz=w400" },
    { nama: "Produk 21", deskripsi: "Deskripsi produk 21", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1afiyBzVXaHdL72b6rRRwCv51-JJA6m6p&sz=w400" },
    { nama: "Produk 22", deskripsi: "Deskripsi produk 22", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1uj0cCRLKuspctzbAG1oqFMZ9irXKqrIn&sz=w400" },
    { nama: "Produk 23", deskripsi: "Deskripsi produk 23", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1ndJMKeKhKrGFbQoJAyd32MHxoA3Sk9Mt&sz=w400" },
    { nama: "Produk 24", deskripsi: "Deskripsi produk 24", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1E0h3Fe0jva-x3mJGWtd5JEj13Tx73xcW&sz=w400" },
    { nama: "Produk 25", deskripsi: "Deskripsi produk 25", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1PMc4vE52jPzUVmgQM7b91DBh8QhKBx9_&sz=w400" },
    { nama: "Produk 26", deskripsi: "Deskripsi produk 26", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1ciZKrNmsENY8yEVxqczJz59--8WpU2hE&sz=w400" },
    { nama: "Produk 27", deskripsi: "Deskripsi produk 27", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1ezbOCFYZuOSElzpRRVXbzg9SLxpmj4V_&sz=w400" },
    { nama: "Produk 28", deskripsi: "Deskripsi produk 28", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1D-ma-OiX58zk42Gewr0TG2XaCx79k5N2&sz=w400" },
    { nama: "Produk 29", deskripsi: "Deskripsi produk 29", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=14bLk2XvFNLl2sEnrjYTMYNhoRshUGUHK&sz=w400" },
    { nama: "Produk 30", deskripsi: "Deskripsi produk 30", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1wHB0cEplqng0odsG5vSddJuJdQK21W3U&sz=w400" },
    { nama: "Produk 31", deskripsi: "Deskripsi produk 31", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1L-Qx6D9w3M0jqJIdnP18FCAlSmYYZsDt&sz=w400" },
    { nama: "Produk 32", deskripsi: "Deskripsi produk 32", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1E2TSbHkH-yZHb5Kxp4EKdXNQ5MYY0T2Y&sz=w400" },
    { nama: "Produk 33", deskripsi: "Deskripsi produk 33", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1ORlDqq2ALhDm-5jsTK3HZ0fJ9AcJA3nd&sz=w400" },
    { nama: "Produk 34", deskripsi: "Deskripsi produk 34", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1MPHia6jyHkScCqideHsox0dXuTbruldR&sz=w400" },
    { nama: "Produk 35", deskripsi: "Deskripsi produk 35", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1g7rOizuf9-C-u9aUuJcOWYwmfbpKANLb&sz=w400" },
    { nama: "Produk 36", deskripsi: "Deskripsi produk 36", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1XWT75nFyM2-cjM9yPLyn0lfIaRCYeUi3&sz=w400" },
    { nama: "Produk 37", deskripsi: "Deskripsi produk 37", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1BhIMQxasyjJtPSSrsWlwR6pa9SXFpqrE&sz=w400" },
    { nama: "Produk 38", deskripsi: "Deskripsi produk 38", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1aaWkcMSTQhq_-f8A0y_f51Q3RpK1ZiOw&sz=w400" },
    { nama: "Produk 39", deskripsi: "Deskripsi produk 39", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1xJ9L0WEJb12Uzx2WS_O1HX7b9KDc0Rbf&sz=w400" },
    { nama: "Produk 40", deskripsi: "Deskripsi produk 40", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=18SWuRId5Om-g9DWrWgpKEQcsR3EWuwVw&sz=w400" },
    { nama: "Produk 41", deskripsi: "Deskripsi produk 41", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1xwcxrFL17Nrx1GWqiHxwht7pI-VN_qbC&sz=w400" },
    { nama: "Produk 42", deskripsi: "Deskripsi produk 42", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1zdynoQSNpsvY6ZAx8MwjlSSqFLsc6Ug_&sz=w400" },
    { nama: "Produk 43", deskripsi: "Deskripsi produk 43", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=14DXv4FmGdO7HxmBm4daFxwvcbWbGL-UX&sz=w400" },
    { nama: "Produk 44", deskripsi: "Deskripsi produk 44", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1enl9QecfABYE-bjPTsDgZW61Oklb9rrS&sz=w400" },
    { nama: "Produk 45", deskripsi: "Deskripsi produk 45", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1DjwiI6uoaqI8nuMTlJQ0YmicHX_HjiTl&sz=w400" },
    { nama: "Produk 46", deskripsi: "Deskripsi produk 46", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1prOJg-8aAC9E6tJDv7je090UZ8gqNtS3&sz=w400" },
    { nama: "Produk 47", deskripsi: "Deskripsi produk 47", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1XATgd9CyzYeX1-2yicbF4iLfXtAdZMJC&sz=w400" },
    { nama: "Produk 48", deskripsi: "Deskripsi produk 48", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1xpogyTq8BByz-1xWbQaXUnmpop6PPe80&sz=w400" },
    { nama: "Produk 49", deskripsi: "Deskripsi produk 49", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1WoEoYYgFJkUO1XGe7NeO1HOe8VS__4Jj&sz=w400" },
    { nama: "Produk 50", deskripsi: "Deskripsi produk 50", harga: "[HARGA] Rp 0", gambar: "https://drive.google.com/thumbnail?id=1oROhngxc1OXQmZ5jKcS5937kcqxoa-YH&sz=w400" }
];

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});