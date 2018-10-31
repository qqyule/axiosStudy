<template>
  <div class="axios">
    <el-card class="box-card">
      <div v-for="(item, index) in info" :key="index" class="text item">
       {{item.title}}
      </div>
    </el-card>
  </div>
</template>

<script>
import http from '../utils/http'
import api from '../utils/api'
export default {
  name: 'axios',
  data () {
    return {
      info:[],
      content:[],
      url:'https://sites.qnz.com.cn/api/v1/stl/channels?',
      contentUrl:'https://sites.qnz.com.cn/api/v1/stl/contents?&channelIndex=dzrs',
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
        channelIndex:'dzrs',
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
</style>
