// ======= Inisialisasi REKA:BIT =======
rekabit.brakeMotor(MotorChannel.All)
rekabit.disableServo(ServoChannel.All)

// ======= Inisialisasi BLE UART =======
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)

// ======= Fungsi eksekusi command =======
function executeCommand(cmd: string) {
    switch (cmd) {
        case "A":
            // Motor A & B maju
            rekabit.runMotor(MotorChannel.All, MotorDirection.Forward, 200)
            bluetooth.uartWriteString("Motor maju OK\n")
            break
        case "B":
            // Motor A & B mundur
            rekabit.runMotor(MotorChannel.All, MotorDirection.Backward, 200)
            bluetooth.uartWriteString("Motor mundur OK\n")
            break
        case "C":
            // Belok kiri: motor A berhenti, motor B maju
            rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 0)
            rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 200)
            bluetooth.uartWriteString("Belok kiri OK\n")
            break
        case "D":
            // Belok kanan: motor A maju, motor B berhenti
            rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 200)
            rekabit.runMotor(MotorChannel.M2, MotorDirection.Forward, 0)
            bluetooth.uartWriteString("Belok kanan OK\n")
            break
        case "0":
            // Stop semua motor
            rekabit.brakeMotor(MotorChannel.All)
            bluetooth.uartWriteString("Berhenti OK\n")
            break
        default:
            bluetooth.uartWriteString("Command tidak dikenali\n")
    }
}

// ======= Listener BLE UART =======
bluetooth.onUartDataReceived("#", function () {
    let data = bluetooth.uartReadUntil("#")  // baca sampai #
    executeCommand(data)
})

