import home from "@/components/home/index"
//使用阿里flexible解决方案
import 'amfe-flexible'
//VConsole
import VConsole from 'vconsole'

const vconsole = new VConsole()

new Vue({
  el: '#app',
  components: { home }
});
