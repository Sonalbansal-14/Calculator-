function add() {
          var a = parseFloat(document.getElementById('num1').value);
          var b = parseFloat(document.getElementById('num2').value);
          var c = a + b;
          var result = c.toFixed(2);
          console.log(a);
          console.log(b);
          console.log(c);
          document.getElementById('Result').innerHTML = result;
}
function sub() {
          var a = parseFloat(document.getElementById('num1').value);
          var b = parseFloat(document.getElementById('num2').value);
          var c = a - b;
          var result = c.toFixed(2);
          console.log(a);
          console.log(b);
          console.log(c);
          document.getElementById('Result').innerHTML = result;
}
function mul() {
          var a = parseFloat(document.getElementById('num1').value);
          var b = parseFloat(document.getElementById('num2').value);
          var c = a * b;
          var result = c.toFixed(2);
          console.log(a);
          console.log(b);
          console.log(c);
          document.getElementById('Result').innerHTML = result;
}
function div() {
          var a = parseFloat(document.getElementById('num1').value);
          var b = parseFloat(document.getElementById('num2').value);
          var c = a / b;
          var result = c.toFixed(2);
          console.log(a);
          console.log(b);
          console.log(c);
          document.getElementById('Result').innerHTML = result;
}