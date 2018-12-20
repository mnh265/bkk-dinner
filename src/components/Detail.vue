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
				<a href="###">Coming Soon!</a>
				<a href="###">Coming Soon!</a>
				<a href="###">Coming Soon!</a>
			</div>
		</div>

		<div class="p-restaurant__share">
			<h3>シェアする</h3>

			 <social-sharing url="https://bangkok-dinner-adviser.info/"
                      title="Bangkok Dinner Adviser（バンコクディナーアドバイザー）"
                      description="バンコクの夕飯スポットをサクっと決めよう！"
                      
                      inline-template>

				  <div>
				  <network network="email">
				      <i class="fa fa-envelope"></i> Email
				  </network>
				  <network network="facebook">
				    <i class="fa fa-facebook"></i> Facebook
				  </network>
				  <network network="line">
				    <i class="fa fa-line"></i> Line
				  </network>
				  <network network="linkedin">
				    <i class="fa fa-linkedin"></i> LinkedIn
				  </network>
				  <network network="pinterest">
				    <i class="fa fa-pinterest"></i> Pinterest
				  </network>
				  <network network="twitter">
				    <i class="fa fa-twitter"></i> Twitter
				  </network>
				  <network network="whatsapp">
				    <i class="fa fa-whatsapp"></i> Whatsapp
				  </network>
				</div>
				</social-sharing>



		</div>


		<div class="p-restaurant__btn">
			<router-link class="btn" to="/">もう一度探す</router-link>  
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

