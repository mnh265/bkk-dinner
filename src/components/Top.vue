<template>

  <div>
    <header class="header">
      <div class="header__sitetitle">
        <router-link class="sitetitle" to="/"><img src="../assets/logo.png"><span>Bangkok Dinner Adviser</span></router-link>
      </div>
    </header>

    <div class="background">
    </div>
    
      <div class="kv">
        <h1>バンコクの夕食スポット選び</h1>
        <p>バンコクはレストラン天国。<br>どのお店に行くか毎回迷いますよね。<br>このBangkok Dinner Guideで<br>どのお店にするかサクっと決めましょう！！！</p>        
      </div>
      

      <div class="p-top__label">
        <div class="label">
        <p>今夜のご飯を選ぼう</p>
        </div>
      </div>


    <div class="p-top">

      <div class="p-top__search">
        <div class="pulldown-list">
          <p class="pulldown-list__title">ジャンル</p>
          <select class="form-control" name="category" v-model="query.category">
          <option value="">なんでも</option>
          <option value="和食">和食</option>
          <option value="居酒屋">居酒屋</option>
          <option value="寿司">寿司</option>
          <option value="会席料理">会席料理</option>
          <option value="ラーメン">ラーメン</option>
          <option value="そば・うどん">そば・うどん</option>
          <option value="イタリアン">イタリアン</option>
          <option value="ダイニング">ダイニング</option>
          <option value="中華料理">中華料理</option>
          <option value="焼肉">焼肉</option>
          <option value="タイ料理">タイ料理</option>
          <option value="スペイン料理">スペイン料理</option>
          <option value="洋食">洋食</option>
          <option value="バー">バー</option>
          <option value="珍しいジャンル">珍しいジャンル</option>
          <option value="ドイツ料理">ドイツ料理</option>
          <option value="ファストフード">ファストフード</option>
          <option value="フレンチ">フレンチ</option>
          </select>
        </div>

        <div class="pulldown-list">
          <p class="pulldown-list__title">最寄り駅</p>
          <select class="form-control" name="station" v-model="query.station">
          <option value="">指定しない</option>
          <option value="Phrom Phong">Phrom Phong</option>
          <option value="Asok">Asok</option>
          <option value="Thong Lo">Thong Lo</option>
          <option value="Silom">Silom</option>
          <option value="Ekkamai">Ekkamai</option>
          <option value="Phra Khanong">Phra Khanong</option>
          <option value="Chit Lom">Chit Lom</option>
          <option value="Chong Nonsi">Chong Nonsi</option>
          <option value="Nana">Nana</option>
          </select>
        </div>

        <div class="pulldown-list">
          <p class="pulldown-list__title">一食あたり予算</p>
          <select class="form-control" name="price" v-model="query.price">
          <option value="">指定しない</option>
          <option value="手軽（〜700THB）">手軽（〜700THB）</option>
          <option value="普通（700〜1,500THB）">普通（700〜1,500THB）</option>
          <option value="高め（1,500THB〜）">高め（1,500THB〜）</option>
          </select>
        </div>    
      </div>

      <div class="p-top__btn">
        <!--router-link class="btn" to="/list">探す</router-link-->
        <a href="javascript:;" class="btn" @click="onClickSubmit">探す</a>
      </div>
    </div>
    <div class="footer">© 2018 Bangkok Dinner Adviser</div>
  </div>
</template>

<script>

export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Bangkok Dinner Adviser',
      query: {
        category: '',
        station: '',
        price: ''
      }
    }
  },

  created () {
  },

  methods: {
    onClickSubmit () {
      const params = []
      if (this.query.category) {
        params.push(`category=${encodeURIComponent(this.query.category)}`)
      }
      if (this.query.station) {
        params.push(`station=${encodeURIComponent(this.query.station)}`)
      }
      if (this.query.price) {
        params.push(`price=${encodeURIComponent(this.query.price)}`)
      }
      this.$router.push(`/list?${params.join('&')}`)
    }
  }
}
</script>