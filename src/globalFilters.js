import Vue from 'vue'

Vue.filter('pasarAMayuscula', function(value) {
    return value.toUpperCase()
})

Vue.filter('pasarAMinuscula', function(value) {
    return value.toLowerCase()
})

Vue.filter('intercalarEmpezandoPorMinus', function(text) {
    let res = "";

      for (let i = 0; i < text.length; i++) {
        if (i % 2 != 0) {
          res += text[i].toUpperCase();
        } else {
          res += text[i].toLowerCase();
        }
      }
      return res;
})

Vue.filter('intercalarEmpezandoPorMayus', function(text) {
    let res = "";

      for (let i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
          res += text[i].toUpperCase();
        } else {
          res += text[i].toLowerCase();
        }
      }
      return res;
})

