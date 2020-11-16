<template>
  <div id="app">
    <head>
      <meta charset="UTF-8">
        <link rel="stylesheet" href="master.css" type="text/css">
        <title>PASS EXPRESS</title>
    </head>
    <body>
      <div class="gradient">
        <header>
          <h3>PASS EXPRESS</h3>
        </header>
        <main>
          <p class="float-two">日付選択</p>
            <div>
            <datepicker :format="DatePickerFormat" :bootstrap-styling="true" :language="ja" ></datepicker>
            <p class="float-two">〜</p>
            <datepicker :format="DatePickerFormat" :bootstrap-styling="true" :language="ja" ></datepicker>
            </div>

          <p class="float-two">ジャンル選択</p>
            <div>
              <select class="textbox-two" name=”選択”>
                <option value=”10”>ジャンルA</option>
                <option value=”30”>ジャンルB</option>
                <option value=”60”>ジャンルC</option>
              </select>
            </div>

            <div>
              <input class="button-one" type="submit" name="Login" value="表示">
            </div>
            <div>
              <router-link to="/Menu">
                <input class="button-three" type="submit" name="Login" value="戻る">
              </router-link>
            </div>                  
        </main>
      </div>
    </body>
  </div>
</template>

<style>

</style>

<script>
import Datepicker from 'vuejs-datepicker'
//日本語化
import {ja} from 'vuejs-datepicker/dist/locale'
 
export default {
  name: 'app',
  data () {
    return {
     //フォーマット
      DatePickerFormat: 'yyyy-MM-dd',
     //日本語化
      ja:ja
    }
  }, 
  components: {
    Datepicker
  }
}
</script>
