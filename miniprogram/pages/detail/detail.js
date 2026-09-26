const items = require('../../data/items.js')
Page({onLoad(q){const item=items.find(x=>x.id===q.id);if(item){this.setData({item});wx.setNavigationBarTitle({title:item.title})}}})
