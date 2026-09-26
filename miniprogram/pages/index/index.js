const items = require('../../data/items.js')
Page({ data:{items}, open(e){wx.navigateTo({url:'/pages/detail/detail?id='+e.currentTarget.dataset.id})}, about(){wx.navigateTo({url:'/pages/about/about'})} })
