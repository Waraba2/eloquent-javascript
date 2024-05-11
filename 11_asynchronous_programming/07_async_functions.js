// rewritting crackPasscode
async function crackPasscode(networkID) {
  for (let code = ""; ; ) {
    for (let digit = 0; ; digit++) {
      let newCode = code + digit;
      try {
        await withTimeout(joinWifi(networkID, newCode), 50);
      } catch (failure) {
        if (failure == "Time out") {
          code = newCode;
          break;
        } else if (digit == 9) {
          throw failure;
        }
      }
    }
  }
}
