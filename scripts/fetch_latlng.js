const request = require('request')

const urls = [
  'https://goo.gl/maps/JB8aM51ACSU2',
  'https://goo.gl/maps/tvysLHA3B4M2',
  'https://goo.gl/maps/okmrxJdMxCK2',
  'https://goo.gl/maps/MMcxAS45cbk',
  'https://goo.gl/maps/X3NR8NXGuJk',
  'https://goo.gl/maps/v8VPkVPu6NC2',
  'https://goo.gl/maps/tKRrXtU3srC2',
  'https://goo.gl/maps/UCSokep6pCM2',
  'https://goo.gl/maps/HJ6fysag85n',
  'https://goo.gl/maps/8k94WW4Bgp82',
  'https://goo.gl/maps/y9X69bxWqHJ2',
  'https://goo.gl/maps/mrzBZ6VEMzt',
  'https://goo.gl/maps/FFcWRc97zKQ2',
  'https://goo.gl/maps/YoccLgLkhE42',
  'https://goo.gl/maps/r6gMqLfckfp',
  'https://goo.gl/maps/KatEJAxPt8s',
  'https://goo.gl/maps/tCLrYLKAUBv',
  'https://goo.gl/maps/w4Q2ekh1May',
  'https://goo.gl/maps/8rctdDox1BU2',
  'https://goo.gl/maps/eXz4nzgjaFs',
  'https://goo.gl/maps/625PgbBAkPx',
  'https://goo.gl/maps/phepVEfYc8z',
  'https://goo.gl/maps/3npQkLVaA9M2',
  'https://goo.gl/maps/85muabpWgVm',
  'https://goo.gl/maps/BjFANf2t4XL2',
  'https://goo.gl/maps/FrvoT8Mykfn',
  'https://goo.gl/maps/obCE2BFW6fy',
  'https://goo.gl/maps/7F8C6vUaEPt',
  'https://goo.gl/maps/rtMatYCCVHv',
  'https://goo.gl/maps/zmo7EpGLhVM2',
  'https://goo.gl/maps/duGg9TbuZCv',
  'https://goo.gl/maps/R3aQVaRJk1v',
  'https://goo.gl/maps/tDN5aUdktAs',
  'https://goo.gl/maps/HgsRpdMNVPN2',
  'https://goo.gl/maps/b6gdaLgMpjR2',
  'https://goo.gl/maps/WDMWsxjE7EJ2',
  'https://goo.gl/maps/boESYDyrEeS2',
  'https://goo.gl/maps/LZHwnX1yVuT2',
  'https://goo.gl/maps/YawggbUBxdG2',
  'https://goo.gl/maps/8C427JjdgEL2',
  'https://goo.gl/maps/neW72X6GHvw',
  'https://goo.gl/maps/XzY8vQSt5xJ2',
  'https://goo.gl/maps/bwm1JaSbVxT2',
  'https://goo.gl/maps/poeaGfTg5w52',
  'https://goo.gl/maps/cNwip1KvUSH2',
  'https://goo.gl/maps/B8tGfM1m5xu',
  'https://goo.gl/maps/Du5LQXooviM2',
  'https://goo.gl/maps/MHoxEHP7LtT2',
  'https://goo.gl/maps/k8vb8txNtxw',
  'https://goo.gl/maps/pWydAfTq4492',
  'https://goo.gl/maps/RLcXPSHriET2',
  'https://goo.gl/maps/wSavkqZZJYS2',
  'https://goo.gl/maps/ScXMUeumaEN2',
  'https://goo.gl/maps/wxgQz1dSF3B2',
  'https://goo.gl/maps/FzFbmDJFhmw',
  'https://goo.gl/maps/mFwXuC2Yg4G2',
  'https://goo.gl/maps/zpxaSpS8pv52',
  'https://goo.gl/maps/XsRNwWBWaiR2',
  'https://goo.gl/maps/4HLJekSorES2',
  'https://goo.gl/maps/S1WKBqFRbHL2',
  'https://goo.gl/maps/ePhefCme4ox',
  'https://goo.gl/maps/NXM41n8NVJo',
  'https://goo.gl/maps/ZnFE1QRE5752',
  'https://goo.gl/maps/FFzVvPBDZgR2',
  'https://goo.gl/maps/juoK8XZCECp',
  'https://goo.gl/maps/XMgpvWUL5vQ2',
  'https://goo.gl/maps/zb4UqS6VBGt',
  'https://goo.gl/maps/9xjK8ccEwkH2',
  'https://goo.gl/maps/gR7DXCC7sgq',
  'https://goo.gl/maps/RsnedfUcqFo',
  'https://goo.gl/maps/EErYT8hV7sq',
  'https://goo.gl/maps/ciFY8wEoWKr',
  'https://goo.gl/maps/SNcDg6Tdp4k',
  'https://goo.gl/maps/9sXXW3mtWBs',
  'https://goo.gl/maps/r1tFv6Pdbuw',
  'https://goo.gl/maps/JfFH3CRzLpt',
  'https://goo.gl/maps/3KuAuSVgJcR2',
  'https://goo.gl/maps/xnZTrJoGF812',
  'https://goo.gl/maps/AhqQf8RUqhF2',
  'https://goo.gl/maps/zjmzRCFGGms',
  'https://goo.gl/maps/3CMwdVV5b5p',
  'https://goo.gl/maps/3j3Wa93vsn62',
  'https://goo.gl/maps/zXpC72weALk',
  'https://goo.gl/maps/2mYKYMznLoP2',
  'https://goo.gl/maps/4bPeDiLDTyQ2',
  'https://goo.gl/maps/rtZQUvptDhq',
  'https://goo.gl/maps/kuFsSBcdUgE2',
  'https://goo.gl/maps/qRdH4suEV8v',
  'https://goo.gl/maps/QemxackHGxR2',
  'https://goo.gl/maps/XnyGxnqqie22',
  'https://goo.gl/maps/G4YxjnXu5ES2',
  'https://goo.gl/maps/CXvJ2Hvt7bG2',
  'https://goo.gl/maps/jmdVkVuzMCo',
  'https://goo.gl/maps/qkhuqkQhm972',
  'https://goo.gl/maps/vgHQ87PxwJF2',
  'https://goo.gl/maps/7qeeTHY8Bdm',
  'https://goo.gl/maps/MpV649R6fnS2',
  'https://goo.gl/maps/H7rdVMvDhaq',
  'https://goo.gl/maps/PemFwX6R54r',
  'https://goo.gl/maps/ZPEtPMnR6hJ2',
  'https://goo.gl/maps/S1qUbe49PJk',
  'https://goo.gl/maps/kzMZkzV5T4B2',
  'https://goo.gl/maps/gnUMjB5ymbE2',
  'https://goo.gl/maps/wwBouLFv5TH2',
  'https://goo.gl/maps/VoCUc1id87w',
  'https://goo.gl/maps/nWcnCAdrCdH2',
  'https://goo.gl/maps/aoX1cEL6TZ12',
  'https://goo.gl/maps/rHyzUTiyN9P2',
  'https://goo.gl/maps/5Up1jc16ux22',
  'https://goo.gl/maps/9G3cQ88u7gw',
  'https://goo.gl/maps/Sc16Xp1j6M42',
  'https://goo.gl/maps/Zt4kymTke132',
  'https://goo.gl/maps/KFjJjaUcD4U2',
  'https://goo.gl/maps/Hz1nHvSQJox',
  'https://goo.gl/maps/qNxnSUUgUH52',
  'https://goo.gl/maps/DCetWvudjUQ2',
  'https://goo.gl/maps/iGnf3x6qnzD2',
  'https://goo.gl/maps/1Mr8qKoL3qm',
  'https://goo.gl/maps/tGQE8gm9Uwp',
  'https://goo.gl/maps/xzMcX41sbCz',
  'https://goo.gl/maps/hkRRkXyudQR2',
  'https://goo.gl/maps/WoCJEURsEhR2',
  'https://goo.gl/maps/dTT7Sg4hCqL2',
  'https://goo.gl/maps/a3WQ6oQNLjQ2',
  'https://goo.gl/maps/hvHvtdLiGgm',
  'https://goo.gl/maps/DPQqmyaxdvC2',
  'https://goo.gl/maps/b9oEHD6tRfJ2',
  'https://goo.gl/maps/5MjyFmGDgLA2',
  'https://goo.gl/maps/R5vNvQyRmvS2',
  'https://goo.gl/maps/LdaVpUYr4s22',
  'https://goo.gl/maps/9jwSpgafNDr',
  'https://goo.gl/maps/gcEeWKPR74R2',
  'https://goo.gl/maps/dVgUWqgN8wz',
  'https://goo.gl/maps/C1a82vvRTgQ2',
  'https://goo.gl/maps/XGdMB5yE2vD2',
  'https://goo.gl/maps/shLqjzumNsn',
  'https://goo.gl/maps/h5KGiBLhNYw',
  'https://goo.gl/maps/cDKJ74M87rw',
  'https://goo.gl/maps/f3q6A8kJDLU2',
  'https://goo.gl/maps/WT9t9gUy3TT2',
  'https://goo.gl/maps/NXQc7MSrLcn',
  'https://goo.gl/maps/dG5SaMSQKht',
  'https://goo.gl/maps/ioRsN2BtJRx',
  'https://goo.gl/maps/zwu4oXRiv132',
  'https://goo.gl/maps/hut6vrhJKax',
  'https://goo.gl/maps/vyFJyzNManF2',
  'https://goo.gl/maps/CRDLWZp1H5Q2',
  'https://goo.gl/maps/kr5FcXKet4T2',
  'https://goo.gl/maps/GmjDz8rY7Q42',
  'https://goo.gl/maps/c5GCgi7JZUF2',
  'https://goo.gl/maps/QL5vs287tys',
  'https://goo.gl/maps/6P7REJMjdcF2',
  'https://goo.gl/maps/qnHmL669VXo',
  'https://goo.gl/maps/zY7omw9TWR62',
  'https://goo.gl/maps/s4UvJEKhj8U2',
  'https://goo.gl/maps/xeUq3a5quAK2',
  'https://goo.gl/maps/87Y3mGdTqRB2',
  'https://goo.gl/maps/WceFbd9yKL52',
  'https://goo.gl/maps/qv5xQpg2PVR2',
  'https://goo.gl/maps/Sw4w9psjJGr',
  'https://goo.gl/maps/zvUBp3dWR8p',
  'https://goo.gl/maps/ZEEERrWfPkR2',
  'https://goo.gl/maps/8mSznfdULst',
  'https://goo.gl/maps/NYe3SyBSFy82',
  'https://goo.gl/maps/CFP8kvVYEoP2',
  'https://goo.gl/maps/XnQge7pztDw',
  'https://goo.gl/maps/ygV5Cjmhq9o',
  'https://goo.gl/maps/h1JuYzzxjC12',
  'https://goo.gl/maps/T8VsQJBi8zk',
  'https://goo.gl/maps/HgPFcNqWCLH2',
  'https://goo.gl/maps/qXo8QqdAL7w',
  'https://goo.gl/maps/dappkgVu8to',
  'https://goo.gl/maps/RsaSKgWRKLz',
  'https://goo.gl/maps/TyQHcLFeWtv',
  'https://goo.gl/maps/gzF93G5Q2HT2',
  'https://goo.gl/maps/31knoc6Umw22',
  'https://goo.gl/maps/jhxfjVqUwr42',
  'https://goo.gl/maps/rrTfHsBVbYS2',
  'https://goo.gl/maps/CAorB3MKaD62',
  'https://goo.gl/maps/NFM37qWhaMB2',
  'https://goo.gl/maps/irJNF7zwRkN2',
  'https://goo.gl/maps/zLaDhTSz1K72',
  'https://goo.gl/maps/tMWaQFJsfTk',
  'https://goo.gl/maps/g82yxQoea4E2',
  'https://goo.gl/maps/1qz1aZgd1XL2',
  'https://goo.gl/maps/dorSFtKfxMU2',
  'https://goo.gl/maps/2ZGp9wRaWJo',
  'https://goo.gl/maps/11JGyWspn9L2',
  'https://goo.gl/maps/KTP8ft51vdx',
  'https://goo.gl/maps/9zHjzWTGw552',
  'https://goo.gl/maps/iSvVfvFUoaB2',
  'https://goo.gl/maps/4XAADKZCv5t',
  'https://goo.gl/maps/QakUj4wEDTL2',
  'https://goo.gl/maps/JXE7CKFpVPA2',
  'https://goo.gl/maps/cJ99chvUdyp',
  'https://goo.gl/maps/h5HAnsBE6xH2',
  'https://goo.gl/maps/qLjjZMhEwG12',
  'https://goo.gl/maps/TF7VFb5tnVE2',
  'https://goo.gl/maps/qEUA9asZDzP2',
  'https://goo.gl/maps/DGbTo8LsVvr',
  'https://goo.gl/maps/QxHzStGP7tn',
  'https://goo.gl/maps/nRAn38goL3y',
  'https://goo.gl/maps/VSBy4grcwXC2',
  'https://goo.gl/maps/cPu17tN8zJ32',
  'https://goo.gl/maps/kkr9acH2HMH2',
  'https://goo.gl/maps/TPegGDkbj3B2',
  'https://goo.gl/maps/6cMma8vfcT62',
  'https://goo.gl/maps/Tmo5me1xLE42',
  'https://goo.gl/maps/9MdcKGacSKn',
  'https://goo.gl/maps/5c2WUiqeMtz',
  'https://goo.gl/maps/RsP9u79wNNt',
  'https://goo.gl/maps/PuK7noz2oAs',
  'https://goo.gl/maps/pAiKp1eXt4m',
  'https://goo.gl/maps/Pg1rUC7MuLQ2',
  'https://goo.gl/maps/PiPxrFa4W7K2',
  'https://goo.gl/maps/fwDso5tW8Hp',
  'https://goo.gl/maps/SsGMYVQNpX62',
  'https://goo.gl/maps/ikeQKUz1Ehm',
  'https://goo.gl/maps/2EPaa7TWkRv',
  'https://goo.gl/maps/QoDrtnutcn12',
  'https://goo.gl/maps/fkgpC3Zfep82',
  'https://goo.gl/maps/3QAJmpPcFf72',
  'https://goo.gl/maps/oR7TJT5nTXL2',
  'https://goo.gl/maps/WMEEBDUN1Bp',
  'https://goo.gl/maps/LzMH9T9xdWx',
  'https://goo.gl/maps/X6egaaBZiXk',
  'https://goo.gl/maps/ZqdBqY3oWzL2',
  'https://goo.gl/maps/vycRQBdPg9M2',
  'https://goo.gl/maps/4WvPCf3XUjF2',
  'https://goo.gl/maps/ZDiywTgGj4H2',
  'https://goo.gl/maps/cLVQbJdP2DB2',
  'https://goo.gl/maps/MwmctYmyxos',
  'https://goo.gl/maps/c2Ax4gyEYhQ2',
  'https://goo.gl/maps/cMRnZwskrSQ2',
  'https://goo.gl/maps/ChoJ6F8vUm52',
  'https://goo.gl/maps/N9YABZtTe362',
  'https://goo.gl/maps/xYEDwpRmD7v',
  'https://goo.gl/maps/3DvWwoMykgD2',
  'https://goo.gl/maps/9C963J72Y642',
  'https://goo.gl/maps/haSCxZneBw22',
  'https://goo.gl/maps/2nfysv3sV6Q2',
  'https://goo.gl/maps/hpvV4evbAhQ2',
  'https://goo.gl/maps/i82a82kX56s',
  'https://goo.gl/maps/BdFHYNGGUrA2',
  'https://goo.gl/maps/JQLBo1czKQM2',
  'https://goo.gl/maps/jHSP56q1K1K2',
  'https://goo.gl/maps/ResgkRvvjgs',
  'https://goo.gl/maps/3iVBa2qyw2P2',
  'https://goo.gl/maps/yzFqmg3gwJF2',
  'https://goo.gl/maps/gSKercri8jk',
  'https://goo.gl/maps/BPPiKQaaEcP2',
  'https://goo.gl/maps/vSUsvNgJVE12',
  'https://goo.gl/maps/Cnp9DMqZ8SM2',
  'https://goo.gl/maps/11mVwqpHrrF2',
  'https://goo.gl/maps/erSXXuZQXz72',
  'https://goo.gl/maps/LbS1EXgtnsq',
  'https://goo.gl/maps/DMMFjZMXuAA2',
  'https://goo.gl/maps/gSp8Mfff1AE2',
  'https://goo.gl/maps/QJaberneBQ72',
  'https://goo.gl/maps/wH1RznHy8Ro',
  'https://goo.gl/maps/3m2DmuXqntn',
  'https://goo.gl/maps/6aEg9WfvYu22',
  'https://goo.gl/maps/p2am9NKuBtF2',
  'https://goo.gl/maps/yuX4Ss96MAx',
  'https://goo.gl/maps/MSwu1DrfKMJ2',
  'https://goo.gl/maps/6iVWv9BaQTM2',
  'https://goo.gl/maps/t64BLhHktZ42',
  'https://goo.gl/maps/p71AZdV9SRR2',
  'https://goo.gl/maps/YqRjRW8jHr52',
  'https://goo.gl/maps/oUQ85nA2SFQ2',
  'https://goo.gl/maps/xeYamFDzB3C2',
  'https://goo.gl/maps/LnY9adJjmzB2',
  'https://goo.gl/maps/J2N11JJ2Qpo',
  'https://goo.gl/maps/oG7jnhGnruF2',
  'https://goo.gl/maps/hEevPtd9ivB2',
  'https://goo.gl/maps/9m7ji59AJM22',
  'https://goo.gl/maps/47ogXj2dA5L2',
  'https://goo.gl/maps/uxSeZKn6u5r',
  'https://goo.gl/maps/53igCwidfX32',
  'https://goo.gl/maps/Hpqgxu3cgmp',
  'https://goo.gl/maps/kjn6Pine1LE2',
  'https://goo.gl/maps/VxFFkjJv1Y82',
  'https://goo.gl/maps/YETsvbSxA9o',
  'https://goo.gl/maps/u5A1hG5q1rv',
  'https://goo.gl/maps/G3nNp6m1f9L2',
  'https://goo.gl/maps/3MavPC2dUMr',
  'https://goo.gl/maps/krBgjnrU9LG2',
  'https://goo.gl/maps/GSzCrt33Qzr',
  'https://goo.gl/maps/LYn7kc9wdtu',
  'https://goo.gl/maps/nCETVzumbUz',
  'https://goo.gl/maps/35yEx4m8VCD2',
  'https://goo.gl/maps/U8EVxCis7R12',
  'https://goo.gl/maps/tGLJYMv1psu',
  'https://goo.gl/maps/aZ3qrPhezBA2',
  'https://goo.gl/maps/dFBUeLVtPR42',
  'https://goo.gl/maps/6aMMvwNQubP2',
  'https://goo.gl/maps/UJtteYGGXy62',
  'https://goo.gl/maps/gjgRJP8mTy82',
  'https://goo.gl/maps/dkkNmV7oKHw',
  'https://goo.gl/maps/xkrhVttSi2Q2',
  'https://goo.gl/maps/hky6fFS8D732',
  'https://goo.gl/maps/vX1ZFmXWPF12',
  'https://goo.gl/maps/f9JptdaEsFR2',
  'https://goo.gl/maps/ciDrHAYN3PA2',
  'https://goo.gl/maps/LvTB2bngAh42',
  'https://goo.gl/maps/o3juFy1j4bN2',
  'https://goo.gl/maps/5nH8pKncHtR2',
  'https://goo.gl/maps/ix1QAP4fy8m',
  'https://goo.gl/maps/dKcCnjsbm292',
  'https://goo.gl/maps/W3oXD5WA18z',
  'https://goo.gl/maps/LQsu8YPwPZ12',
  'https://goo.gl/maps/Lx4pEoGhpi52',
  'https://goo.gl/maps/pm2d7Si9B612',
  'https://goo.gl/maps/JcUNGbAqat32',
  'https://goo.gl/maps/DFZdZUsY1Fz',
  'https://goo.gl/maps/7LR6uLUiNc42',
  'https://goo.gl/maps/jjjuqGCTWct',
  'https://goo.gl/maps/e169gHCJPJP2',
  'https://goo.gl/maps/Z33EHEQYZ462',
  'https://goo.gl/maps/2UpNv4G2b452',
  'https://goo.gl/maps/F5KEbw8SgYQ2',
  'https://goo.gl/maps/9ozpTGe1YAu',
  'https://goo.gl/maps/2Bn83FxZwdR2',
  'https://goo.gl/maps/EB5f5XNnEa92',
  'https://goo.gl/maps/wtWQT6FkCJL2',
  'https://goo.gl/maps/RbmKXxA2DLA2',
  'https://goo.gl/maps/89QTBexxnM82',
  'https://goo.gl/maps/HnQV2DnvDfK2',
  'https://goo.gl/maps/eavxeJEeuqu',
  'https://goo.gl/maps/hGvhf3iKh3K2',
  'https://goo.gl/maps/oYyexJQicPT2',
  'https://goo.gl/maps/J9PHVqfM82x',
  'https://goo.gl/maps/aKULj9Eejkn',
]

const fetch = (url) => {
  return new Promise((resolve, reject) => {
    var options = {
      url: url,
      method: 'GET',
      followRedirect: false
    }
    request(options, function (error, response, body) {
        // console.log(response.headers.location);
        // https://www.google.co.th/maps/place/Shakariki+432%22+Sukhumvit31/@13.7375389,100.5675678,19.25z/data=!4m5!3m4!1s0x30e29fcf930d92cf:0x9931e9ef1197fd39!8m2!3d13.7375389!4d100.5675678?hl=ja&authuser=0&shorturl=
        const regex = /@(\d+.\d+),(\d+.\d+),/
        const results = regex.exec(response.headers.location)
        resolve({
          lat: results[1],
          lng: results[2]
        })
    })
  })
}

const sleep = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, ms || 300)
  })
}

const main = async () => {
  for (let i=0; i<urls.length; i++) {
    const url = urls[i]
    const latlng = await fetch(url)
    console.log(`${latlng.lat},${latlng.lng}`)
    await sleep()
  }
}

main()