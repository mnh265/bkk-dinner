<template>
  <div>
    <header class="header">
      <div class="header__sitetitle">
        <router-link class="sitetitle" to="/"><img src="../assets/logo.png"><span>Bangkok Dinner Adviser</span></router-link>
      </div>
    </header>

	<div class="p-restaurant">

		<div class="main-title">
		<h2>今夜のご飯候補</h2>
		</div>



		<div class="p-restaurant__shopinfo">
			<div class="shop-details">
 		       	<h3>{{detail['店舗名']}}</h3>

				<table class="shop-details__table">
					<tr>
						<th>ジャンル</th><td>{{detail['カテゴリ']}}</td>
					</tr>

					<tr>
						<th>最寄り駅</th><td>{{detail['地域']}}</td>
					</tr>

					<tr>
						<th>価格帯</th><td>{{detail['お一人様予算']}}</td>
					</tr>

					<tr>
						<th>お店情報</th>
						<td>
							<a :href="detail['URL (Google map)']" target="_blank" v-if="detail['URL (Google map)']">{{detail['URL (Google map)']}}</a>
						</td>
					</tr>
				</table>

                <div class="text-center">
                    <a :href="detail['URL (Google map)']" target="_blank"><img style="width: 100%; max-width: 600px;" :src="staticMapUrl"></a>
                </div>
			</div>
		</div>

		<div class="p-restaurant__blog">
			<div class="blog">
				<h3>ブログなど</h3>
				<div v-if="detail['Blog 1 (URL)']">
					<a v-for="i in [1, 2, 3, 4]" v-if="detail['Blog ' + i + ' (URL)']" :href="detail['Blog ' + i + ' (URL)']" target="_blank">{{detail['Blog ' + i + ' (title)']}}</a>
				</div>
				<div v-else>
					<a href="###">Coming Soon!</a>
					<a href="###">Coming Soon!</a>
					<a href="###">Coming Soon!</a>
				</div>
			</div>
		</div>

		<div class="p-restaurant__btn">
			<router-link class="btn" to="/">もう一度探す</router-link>  
		</div>
		
		<div class="p-restaurant__share">
			<h3>シェアする</h3>

			 <social-sharing url="https://bangkok-dinner-adviser.info/"
                      title="Bangkok Dinner Adviser（バンコクディナーアドバイザー）"
                      description="バンコクの夕飯スポットをサクっと決めよう！"
                      
                      inline-template>

				  <div class="social-wrap">
				  <network network="facebook">
				    <i class="fab fa-3x fa-facebook-square"></i>
				  </network>
				  <network network="twitter">
				  <i class="fab fa-3x fa-twitter-square"></i>
				  </network>
				  <network network="line">
				    <i class="fab fa-3x fa-line"></i>
				  </network>
				  <network network="linkedin">
				    <i class="fab fa-3x fa-linkedin"></i>
				  </network>
				  <network network="pinterest">
				    <i class="fab fa-3x fa-pinterest-square"></i>
				  </network>

				</div>
				</social-sharing>

		</div>


		<div class="p-restaurant__enquiry">
			<div class="enquiry">
			<p>このBangkok Dinner Adviser に関するご意見やご感想、お問い合わせは<a href="https://twitter.com/manahii" target="_blank">作者</a>までお気軽にどうぞ！</p>
			</div>
		</div>
	</div>

	<div class="footer">© 2018 Bangkok Dinner Adviser</div>
</div>
</template>

<script>
import restaurants from '../data/restaurants'

export default {
	data () {
		return {
			detail: null
		}
	},

	created () {
		const params = this.$route.params
		const filtered = restaurants.filter(restaurant => restaurant.ID === params.id)
		if (filtered.length > 0) {
			this.detail = filtered[0]
		}
		console.log('detail', this.detail)
	},

	computed: {
		staticMapUrl () {
			return `https://maps.googleapis.com/maps/api/staticmap?center=${this.detail.lat},${this.detail.lng}&zoom=16&scale=1&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size%3Amid%7Ccolor%red%7Clabel%3AA%7C&key=AIzaSyD8CTm1r3xCBOoHNCT22ZHLDDABcUHGdCE`
		}
	},


	methods: {
	}
}
</script>

