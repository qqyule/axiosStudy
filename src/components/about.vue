<template>
  <div class="about">
    <ul>
      <li v-for="(item, index) in info" :key="index"><a :href="item.navigationUrl">ID:{{index}} {{item.title}} <img :src="item.imageUrl" /></a></li>
    </ul>
  </div>
</template>

<script>
import http from '../utils/http'
import api from '../utils/api'
export default {
  name: 'about',
  data () {
    return {
      info:[],
      content:[],
      url:'https://sites.qnz.com.cn/api/v1/stl/channels?',
      contentUrl:'https://sites.qnz.com.cn/api/v1/stl/contents?&channelIndex=whmr',
      message:''
    }
  },
  props: {
    msg: String,
  },
  methods: {
    fetchData: async function () {
      let params = {
        // api参数
        siteId:27,
        channelIndex:'whmr',
        apikey:'e938b2d0-987d-4412-a046-fd55d537d3c5'
      }
      const res = await http.get(api.contents, params)
      if(res.data.value) {
        // 数据获取成功
        this.info = res.data.value
      }
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
li img{
  width: 50px;
}
</style>
