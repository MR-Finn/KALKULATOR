    let input = "";

function bt(value) {
    if (value === '.' && input.split(/[\+\-\*\/%]/).pop().includes('.')) return;
    input += value;
    document.getElementById("keluaran").value = input;
}
function op(operator) {

    if (input && !isNaN(input[input.length - 1])) {
        input += operator;
        document.getElementById("keluaran").value = input;
    }
}
function kal() {

    if (input.includes('/0')) {
        document.getElementById("keluaran").value = "tidak bisa bagi 0";
        input = ""; 
        return;
    }

    try {
        const result = eval(input.replace(/x/g, '*').replace(/%/g, '/100'));
        document.getElementById("keluaran").value = result;
        input = result.toString();
    } catch (error) {
        document.getElementById("keluaran").value = "Error";
        input = "";
    }
}
function hapus() {
    input = "";
    document.getElementById("keluaran").value = "";
}
function hapus1() {
    input = input.slice(0, -1);
    document.getElementById("keluaran").value = input;
}
