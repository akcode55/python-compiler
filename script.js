function runPython() {
    const code = document.getElementById("pythonCode").value;
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = ""; // تفريغ المخرجات السابقة
  
    try {
      const pythonOutput = pythonInterpreter(code);
      outputDiv.textContent = pythonOutput;
    } catch (error) {
      outputDiv.textContent = "خطأ: " + error.message;
    }
  }
  
  function pythonInterpreter(code) {
    if (!code) return "لم يتم توفير أي كود.";
    try {
      const lines = code.split('\n');
      let result = "";
  
      for (let line of lines) {
        line = line.trim();
        if (line.startsWith('print')) {
          const valueToPrint = line.substring('print('.length, line.length - 1).trim();
          if ((valueToPrint.startsWith('"') && valueToPrint.endsWith('"')) ||
              (valueToPrint.startsWith("'") && valueToPrint.endsWith("'"))) {
            result += valueToPrint.slice(1, -1) + "\n";
          } else {
            result += "تعليمات print غير صالحة.\n";
          }
        } else if (line.trim() === "") {
          result += "\n";
        } else {
          result += "تعليمات غير معروفة: " + line + "\n";
        }
      }
  
      return result;
    } catch (err) {
      return "خطأ: " + err.message;
    }
  }
  