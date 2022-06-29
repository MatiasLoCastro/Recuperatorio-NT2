<template>
  <section class="src-components-texto">
    <h1>src-components-texto Component</h1>
    <div class="div">
      <input type="text" v-model="texto" name="texto" id="t1" />

      <hr />
      <div class="content">Cantidad De Caracteres: {{ this.cantLetras }}</div>
      <br>
      Codificado: {{ this.codificar(texto) }}
      <br>
      <br>
      En Mayuscula: {{  texto | pasarAMayuscula }} <br />
      <br>
      En Minuscula: {{ texto | pasarAMinuscula }} <br />
      <br>
      Intercalar EmpezandoPor Minuscula: {{ texto | intercalarEmpezandoPorMinus }} <br />
      <br>
      Intercalar Empezando Por Mayuscula: {{ texto | intercalarEmpezandoPorMayus }} <br />
    </div>
    <br>
    <hr>
    <hr>
    <hr>
    <br>
    <div class="jumbotron">
      <p class="p">Pregunta 1: c) @click</p>
      <p class="p">Pregunta 2: b) Crear un proyecto base Vue basado en Vue CLI </p>
      <p class="p">Pregunta 3: c) Los espacios adelante y atrás en una entrada de texto </p>
      <p class="p">Pregunta 4: a) Definir el path y el componente activo para esa ruta </p>
      <p class="p">Pregunta 5: c) Lógica sincrónica</p>

    </div>

  </section>
</template>

<script>
export default {
  name: "src-components-texto",
  props: [],
  mounted() {},
  data() {
    return {
      texto: "",
    };
  },
  methods: {

    codificar(texto) {

      texto.toLowerCase()

      let txt = texto.split('')

      for(let i = 0; i < txt.length; i++){
        if(txt[i] == 'a' ){
          txt[i] = 'u'
        }else if(txt[i] == 'e'){
          txt[i] = 'o'
        } else if(txt[i] == 'o'){
          txt[i] = 'e'
        } else if(txt[i] == 'u'){
          txt[i] = 'a'
        }
      }
      txt.toString()
      txt.slice(',')
      return txt.slice(',').toString();
      
    },


  },
  computed: {
    cantLetras () {
      return this.texto.length;
    },
  },
};
</script>

<style scoped lang="css">
.src-components-texto {
  position: relative;
  left: -5px;
}
</style>
